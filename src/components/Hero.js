import React from 'react'

const parts = [
  "I'm a ",
  'software engineer',
  ' building ',
  'web experiences',
  '.'
]

export const Hero = () => {
  return (
    <div className="flex min-h-screen font-display items-center p-8 leading-tight">
      <div>
        <h1 className="uppercase text-3xl font-extrabold text-steel">
          Jason Nall
        </h1>
        <h2 className="text-5xl font-hairline">
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
