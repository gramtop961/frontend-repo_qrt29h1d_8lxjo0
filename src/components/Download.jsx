import React from 'react'

export default function Download() {
  const features = ['Quick preview mode', 'Wishlist saving', 'Design editor', 'Product showcasing']
  return (
    <section id="download" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Experience the App (Demo)</h2>
            <p className="mt-3 text-gray-600">Preview the app flow, personalization screens, and wishlist features.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#download" className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"><span className="text-sm font-semibold">Google Play</span></a>
              <a href="#download" className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"><span className="text-sm font-semibold">App Store</span></a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 text-gray-700"><span className="w-2 h-2 rounded-full bg-red-500" /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 p-4">
            <div className="aspect-[9/19] w-full rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400">App Preview</div>
          </div>
        </div>
      </div>
    </section>
  )
}
