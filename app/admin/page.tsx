'use client'

export default function AdminPage() {
  // Placeholder data for demonstration
  const registrations = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      learningMode: 'Online',
      registeredAt: '2024-01-15',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+1234567891',
      learningMode: 'Offline',
      registeredAt: '2024-01-16',
    },
  ]

  const handleExport = () => {
    // Placeholder for future XLSX export functionality
    console.log('Export to XLSX - to be implemented')
  }

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-slate-deep">Admin Dashboard</h1>
            <p className="text-neutral-muted">Manage course registrations</p>
          </div>
          <button
            onClick={handleExport}
            className="px-6 py-2 bg-brand text-white font-medium hover:bg-brand-dark hover:text-white transition-colors duration-200 ease-in-out rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Export to XLSX
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-neutral-border">
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-deep">ID</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-deep">Name</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-deep">Email</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-deep">Phone</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-deep">Learning Mode</th>
                <th className="text-left py-4 px-4 text-sm font-medium text-slate-deep">Registered At</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <tr key={registration.id} className="border-b border-neutral-border hover:bg-neutral-offwhite transition-colors">
                  <td className="py-4 px-4 text-sm text-neutral-muted">{registration.id}</td>
                  <td className="py-4 px-4 text-sm text-neutral-muted">{registration.name}</td>
                  <td className="py-4 px-4 text-sm text-neutral-muted">{registration.email}</td>
                  <td className="py-4 px-4 text-sm text-neutral-muted">{registration.phone}</td>
                  <td className="py-4 px-4 text-sm text-neutral-muted">{registration.learningMode}</td>
                  <td className="py-4 px-4 text-sm text-neutral-muted">{registration.registeredAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {registrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-muted">No registrations found.</p>
          </div>
        )}
      </section>
    </div>
  )
}

