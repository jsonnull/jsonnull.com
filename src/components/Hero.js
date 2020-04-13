import React from 'react'

const parts = [
  "I'm a ",
  'software engineer',
  ' building ',
  <>web&nbsp;experiences</>,
  '.'
]

export const Hero = () => {
  return (
    <div className="flex min-h-screen font-display items-center p-6 sm:p-8 tracking-tight">
      <div>
        <h1 className="uppercase text-xl md:text-2xl lg:text-3xl font-extrabold text-steel">
          Jason Nall
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-hairline leading-tight">
          {parts[0]}
          <span className="font-normal">{parts[1]}</span>
          {parts[2]}
          <span className="font-normal">{parts[3]}</span>
          {parts[4]}
        </h2>
      </div>
    </div>
  )
}
