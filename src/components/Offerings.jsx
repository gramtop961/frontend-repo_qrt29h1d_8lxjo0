import React from 'react'

export default function Offerings() {
  const blocks = [
    {
      title: 'Apparel Concepts',
      desc: 'Tees, Hoodies, Jackets, Accessories',
    },
    {
      title: 'Brand Visuals',
      desc: 'Lifestyle shots, product mockups, design explorations',
    },
    {
      title: 'Customization Flow',
      desc: 'How users would personalize outfits',
    },
    {
      title: 'Preview Screens',
      desc: 'High-fidelity UI/UX workflows',
    },
  ]

  return (
    <section id="features" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">What You’ll Find Here</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition">
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
