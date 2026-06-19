'use client'

export default function AdminPage() {
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
    console.log('Export to XLSX - to be implemented')
  }

  return (
    <div className="dark-page">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="mb-2 text-text-primary">Admin Dashboard</h1>
            <p className="text-text-secondary">Manage course registrations</p>
          </div>
          <button
            onClick={handleExport}
            className="btn-primary-orange px-6 py-2"
          >
            Export to XLSX
          </button>
        </div>

        <div className="dark-card overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-primary">
                <th className="px-4 py-4 text-left text-sm font-medium text-text-primary">ID</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-text-primary">Name</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-text-primary">Email</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-text-primary">Phone</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-text-primary">Learning Mode</th>
                <th className="px-4 py-4 text-left text-sm font-medium text-text-primary">Registered At</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((registration) => (
                <tr key={registration.id} className="border-b border-border-primary transition-colors hover:bg-bg-900/50">
                  <td className="px-4 py-4 text-sm text-text-secondary">{registration.id}</td>
                  <td className="px-4 py-4 text-sm text-text-secondary">{registration.name}</td>
                  <td className="px-4 py-4 text-sm text-text-secondary">{registration.email}</td>
                  <td className="px-4 py-4 text-sm text-text-secondary">{registration.phone}</td>
                  <td className="px-4 py-4 text-sm text-text-secondary">{registration.learningMode}</td>
                  <td className="px-4 py-4 text-sm text-text-secondary">{registration.registeredAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {registrations.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-text-secondary">No registrations found.</p>
          </div>
        )}
      </section>
    </div>
  )
}
