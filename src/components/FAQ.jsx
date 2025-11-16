import React from 'react'

const faqs = [
  {
    q: 'Is this a live store?',
    a: 'No. This is a portfolio and concept showcase of the brand experience.'
  },
  {
    q: 'Can I customize products here?',
    a: 'You can interact with a visual demo to preview how customization would work.'
  },
  {
    q: 'Are the app badges functional?',
    a: 'They are placeholders to illustrate distribution. This is not a published app.'
  },
  {
    q: 'What inspires the design?',
    a: 'Luxury minimalism meets street culture with bold, creator-led identity.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">FAQ</h2>
        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, idx) => (
            <details key={f.q} className={`group p-6 ${idx !== faqs.length - 1 ? 'border-b border-gray-200' : ''}`}>
              <summary className="flex cursor-pointer items-center justify-between">
                <span className="text-gray-900 font-medium">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
