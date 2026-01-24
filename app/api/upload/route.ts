import { v2 as cloudinary } from 'cloudinary'
import { NextRequest, NextResponse } from 'next/server'

// Validate Cloudinary configuration
const validateCloudinaryConfig = () => {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary configuration is missing. Please check your environment variables.')
  }

  return { cloudName, apiKey, apiSecret }
}

// Configure Cloudinary
const config = validateCloudinaryConfig()
cloudinary.config({
  cloud_name: config.cloudName,
  api_key: config.apiKey,
  api_secret: config.apiSecret,
})

// File size limit: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024
// Allowed image types
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Invalid file type. Allowed types: ${ALLOWED_TYPES.join(', ')}` },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `File size exceeds maximum limit of ${MAX_FILE_SIZE / (1024 * 1024)}MB` },
        { status: 400 }
      )
    }

    if (file.size === 0) {
      return NextResponse.json(
        { error: 'File is empty' },
        { status: 400 }
      )
    }

    // Convert File to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Convert buffer to base64
    const base64 = buffer.toString('base64')
    const dataURI = `data:${file.type};base64,${base64}`

    // Upload to Cloudinary with timeout
    const result = await Promise.race([
      new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
          dataURI,
          {
            folder: 'ugenix-academy/payment-screenshots',
            resource_type: 'auto',
            timeout: 60000, // 60 second timeout
          },
          (error, result) => {
            if (error) reject(error)
            else resolve(result)
          }
        )
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Upload timeout: Request took too long')), 60000)
      ),
    ]) as any

    if (!result || !result.secure_url) {
      throw new Error('Upload failed: No URL returned from Cloudinary')
    }

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    })
  } catch (error: any) {
    console.error('Cloudinary upload error:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to upload image'
    if (error.message) {
      errorMessage = error.message
    } else if (error.http_code) {
      errorMessage = `Cloudinary error (${error.http_code}): ${error.message || 'Upload failed'}`
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: error.http_code || 500 }
    )
  }
}
