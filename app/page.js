export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            NEAR<span className="text-green-400">Build</span> Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Fund Your NEAR Idea. Find Contributors. Track Treasury.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">For Projects</h3>
              <p className="text-gray-400">Post your NEAR idea, get funding & builders</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">For Contributors</h3>
              <p className="text-gray-400">Find paid NEAR gigs. Ship and get paid</p>
            </div>
            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">For Treasury</h3>
              <p className="text-gray-400">Fund builders transparently. Track ROI</p>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Join Waitlist</h2>
            <p className="text-gray-400 mb-6">Be first to access when we launch</p>
            <p className="text-green-400">Tally form coming soon</p>
          </div>

          <div className="mt-12">
            <a href="#" className="text-green-400 underline">
              Read Docs: How It Works →
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
