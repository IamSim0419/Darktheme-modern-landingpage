import React from 'react'

export default function Banner() {
  return (
    <section className="py-3 text-center gradient-bg">
      <div className="container text-white">
        <p className="font-medium">
          <span className="hidden md:inline text-shadow-black">Introducing a completely redesigned interface - </span>
          <a href="#" className="font-medium bg-gradient-to-r from-green-500 to-yellow-500 text-white px-3 py-1 rounded-md hover:drop-shadow-xl hover:brightness-105">
              Explore the demo
          </a>
        </p>
        
      </div>
    </section>
  )
}
