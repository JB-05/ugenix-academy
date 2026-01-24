# Google Apps Script Setup Instructions

## Step 1: Create the Script

1. Open your Google Sheet
2. Go to **Extensions** > **Apps Script**
3. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    // SECURITY: Verify the secret token
    const SECRET_TOKEN = 'YOUR_SECRET_TOKEN_HERE'; // Change this to a strong random string
    const data = JSON.parse(e.postData.contents);
    
    // Check if the secret token matches
    if (data.secretToken !== SECRET_TOKEN) {
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: 'Unauthorized: Invalid token' })
      ).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Prepare the row data according to headers
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.courseYear || '',
      data.branch || '',
      data.phone || '',
      data.email || '',
      data.paymentScreenshotUrl || '',
      data.submissionId || '',
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Data added successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Save the Script

1. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
2. Give your project a name (e.g., "Registration Form Handler")

## Step 3: Set Your Secret Token

1. In the script editor, replace `YOUR_SECRET_TOKEN_HERE` with a strong random string
   - Example: `'sk_live_abc123xyz789_random_string_here'`
   - You can generate one at: https://www.random.org/strings/
   - Make it at least 32 characters long
2. **Important**: Remember this token - you'll need it for your `.env.local` file

## Step 4: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Configure:
   - **Description**: "Registration form submission handler" (optional)
   - **Execute as**: **Me**
   - **Who has access**: **Anyone** (required for external API calls, but secured with secret token)
4. Click **Deploy**
5. **Copy the Web App URL** - this is your `GOOGLE_SCRIPT_URL`

> **Note**: You must set "Who has access" to **Anyone** for your Next.js app to call it. However, the secret token ensures only authorized requests can write to your sheet.

## Step 5: Add Headers to Your Sheet

Make sure your Google Sheet has these headers in Row 1:
- Timestamp
- Full Name
- Course Year
- Branch
- Phone Number
- Email Address
- Payment Screenshot URL
- Submission ID

## Step 6: Add URL and Token to Environment

Add the copied URL and your secret token to your `.env.local` file:
```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
GOOGLE_SCRIPT_SECRET_TOKEN=your_secret_token_here
```

Make sure the `GOOGLE_SCRIPT_SECRET_TOKEN` matches exactly what you set in the script!

## How to Check Which Script is Deployed

To view and manage your deployments:

1. **Open your Google Sheet**
2. Go to **Extensions** > **Apps Script**
3. In the Apps Script editor, click **Deploy** > **Manage deployments**
4. You'll see a list of all your deployments with:
   - **Deployment ID** - The unique identifier
   - **Version** - Which version of your script is deployed
   - **Type** - Should show "Web app"
   - **Last deployed** - When it was last updated
   - **Status** - Active/Inactive
   - **Web app URL** - The URL you use in your `.env.local`

### Viewing Deployment Details

- Click on any deployment to see:
  - The exact Web App URL
  - Current version number
  - Who has access settings
  - When it was created/modified

### Updating a Deployment

If you make changes to your script:

1. **Save your changes** in the script editor
2. Go to **Deploy** > **Manage deployments**
3. Click the **pencil icon** ✏️ next to your deployment
4. Click **Select new version** and choose the latest version
5. Click **Deploy**
6. The URL stays the same - no need to update your `.env.local`!

### Creating Multiple Deployments

You can have multiple deployments (e.g., for testing vs production):
- Each deployment gets its own unique URL
- Useful for testing changes before updating production

## Notes

- The script will automatically append new rows to your active sheet
- Make sure the sheet has the correct headers in the first row
- The script runs with your permissions, so it can write to your sheet directly
- No Google Cloud Project or Service Account setup needed!
- **Security**: The secret token prevents unauthorized access. Keep it private and never commit it to version control.
- **Why "Anyone" access?**: Google Apps Script requires "Anyone" access for external API calls, but the secret token ensures only your application can submit data.
