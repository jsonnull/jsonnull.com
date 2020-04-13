import React from 'react'

const parts = [
  "I'm a ",
  'software engineer',
  ' building ',
  <>web&nbsp;experiences</>,
  '.'
]

const sections = [
  {
    name: 'Projects',
    cards: [
      {
        name: 'Homepage',
        description: 'This site, a static React application.',
        tags: ['Next.js']
      },
      {
        name: 'Homepage',
        description:
          'This site, a static React application but this one is longer.',
        tags: ['Next.js']
      }
    ]
  },
  {
    name: 'Github',
    cards: [
      {
        name: 'Homepage',
        description: 'This site, a static React application.',
        tags: ['Next.js']
      },
      {
        name: 'Homepage',
        description:
          'This site, a static React application but this one is longer.',
        tags: ['Next.js']
      }
    ]
  }
]

export const Hero = () => {
  return (
    <div className="flex flex-col px-6 sm:px-8 tracking-tight">
      <div className="h-64" />
      <div className="font-display">
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
      <div className="h-64" />
      {sections.map(section => (
        <React.Fragment key={section.name}>
          <h2 className="uppercase pb-4 text-cloud-500 font-bold">
            {section.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {section.cards.map(card => (
              <div className="p-4 bg-cloud-700 flex flex-col" key={card.name}>
                <h3 className="pb-2 font-bold">{card.name}</h3>
                <p className="pb-4 text-cloud-200">{card.description}</p>
                <ul className="flex mt-auto">
                  {card.tags.map(tag => (
                    <li
                      className="p-1 px-2 text-sm text-cloud-300 bg-cloud-600"
                      key={tag}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pb-8" />
        </React.Fragment>
      ))}
    </div>
  )
}
