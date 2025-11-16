import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Our Story in a Stitch</h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          House of Storiic is a design-first, emotion-driven apparel concept blending luxury aesthetics with street culture. This website showcases the features, visuals, and personalization flows of the brand — purely for portfolio and presentation purposes.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Minimal & Bold', desc: 'A clean aesthetic with decisive visual accents.' },
            { title: 'Customizable Expression', desc: 'Personalization as a first-class experience.' },
            { title: 'Creator-Led Vision', desc: 'Built to inspire and empower creative identity.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
