import React, { useState } from 'react'

const products = [
  { id: 'tee', name: 'Tee', colors: ['#111111', '#d32f2f', '#fbbf24', '#ffffff'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'hoodie', name: 'Hoodie', colors: ['#0f172a', '#ef4444', '#22c55e', '#ffffff'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'jacket', name: 'Jacket', colors: ['#111827', '#f97316', '#3b82f6', '#e5e7eb'], sizes: ['M', 'L', 'XL'] },
]

export default function Customization() {
  const [selectedProduct, setSelectedProduct] = useState(products[0])
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0])
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[0])
  const [artText, setArtText] = useState('STORIIC')

  return (
    <section id="customize" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Create. Preview. Own It.</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">A simple visual demo showing how users can personalize apparel inside the app.</p>
          </div>
          <a href="#customize" className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-semibold">Try the Customization Demo</a>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <label className="block text-sm font-medium text-gray-700">Choose your product</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => { setSelectedProduct(p); setSelectedColor(p.colors[0]); setSelectedSize(p.sizes[0]); }}
                  className={`px-4 py-2 rounded-lg border ${selectedProduct.id === p.id ? 'border-red-500 text-red-600' : 'border-gray-200 text-gray-700'} bg-white hover:border-gray-300`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select color</label>
                <div className="mt-2 flex items-center gap-3">
                  {selectedProduct.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`w-9 h-9 rounded-full border-2 ${selectedColor === c ? 'border-red-500' : 'border-white'} shadow`} style={{ backgroundColor: c }}
                      aria-label={`Choose color ${c}`}
                    />
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Select size</label>
                <div className="mt-2 flex items-center gap-2">
                  {selectedProduct.sizes.map((s) => (
                    <button key={s} onClick={() => setSelectedSize(s)} className={`px-3 py-2 rounded-md border ${selectedSize === s ? 'border-red-500 text-red-600' : 'border-gray-200 text-gray-700'} bg-white`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Add design or artwork</label>
              <input value={artText} onChange={(e) => setArtText(e.target.value)} placeholder="Your text" className="mt-2 w-full rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500" />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-black">See live preview</button>
              <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-gray-300">Save or share mockup</button>
            </div>
          </div>

          <div>
            <div className="relative aspect-square w-full rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[75%] h-[75%] rounded-xl shadow-lg" style={{ backgroundColor: selectedColor }}>
                  <div className="absolute inset-x-0 top-6 mx-auto w-32 h-6 rounded-full bg-white/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/90 text-4xl md:text-5xl font-extrabold tracking-widest" style={{ mixBlendMode: 'overlay' }}>{artText || ' '}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-white/70 px-2 py-1 rounded bg-black/30">{selectedProduct.name} • {selectedSize}</div>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-5 gap-3">
              {['/mock1.png','/mock2.png','/mock3.png','/mock4.png','/mock5.png'].map((src, i) => (
                <div key={src} className="aspect-square rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 text-xs">
                  Mock {i+1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
