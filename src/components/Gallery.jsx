import React from 'react'

export default function Gallery() {
  const items = Array.from({ length: 9 }).map((_, i) => ({ id: i + 1 }))
  return (
    <section id="gallery" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Visual Gallery</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">A curated collection of product shots, mockups, and UI screens representing the brand’s creative direction.</p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.id} className="relative aspect-[4/5] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-400/10 to-amber-300/10" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">Image {it.id}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
