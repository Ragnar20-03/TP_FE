/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zX41EHGpfMu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen pt-28">
      {" "}
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-md px-4 border p-5 rounded-md shadow-lg shadow-teal-50">
          <h1 className="text-3xl font-bold mb-8">Register</h1>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="avatar">Avatar</label>
                <input
                  id="avatar"
                  type="file"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Upload your avatar"
                />
              </div>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="locality">Locality</label>
                <input
                  id="locality"
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md"
                  placeholder="Enter your locality"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-teal-700 text-white hover:bg-teal-600 w-full p-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>
      </main>
      <footer className="bg-teal-700 text-white py-6 mt-auto">
        <div className="container mx-auto text-center text-sm">
          &copy; 2024 Tree Planter. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
