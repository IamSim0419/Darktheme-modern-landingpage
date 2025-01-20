import React from 'react'

export default function Banner() {
  return (
    <section className="py-3 text-center gradient-bg">
      <div className="container gradient-banner-text">
        <p className="font-medium">
          <span className="hidden md:inline">Introducing a completely redesigned interface - </span>
          <a href="#" className="underline underline-offset-4 font-medium text-black">
              Explore the demo
          </a>
        </p>
        
      </div>
    </section>
  )
}
