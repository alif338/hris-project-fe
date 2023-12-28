export default function DashboardAdminPage() {
  return (
    <div className="pl-4 min-h-lvh">
      {/* Header */}
      <h1 className="text-4xl leading-relaxed border-b">Dashboard Admin</h1>

      {/* Main Section */}
      <div className="py-5">
        <div className="grid grid-cols-2 gap-7 mx-5 mt-5">
          <div className="flex items-center justify-center rounded bg-gray-50 h-56 dark:bg-gray-800">
            <div className="flex flex-row gap-10">
              <svg
                className="w-32 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"
                />
              </svg>
              <div className="flex flex-col justify-between">
                <h2 className="text-8xl">99</h2>
                <p className="text-lg">Companies Registered</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded bg-gray-50 h-56 dark:bg-gray-800">
            <div className="flex flex-row gap-10">
              <svg
                className="w-32 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"
                />
              </svg>
              <div className="flex flex-col justify-between">
                <h2 className="text-8xl">999</h2>
                <p className="text-lg">Employees Managed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
