import React from 'react'
import { ClearHeader, Page } from '../components'

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
        name: 'jsonnull.com',
        description: 'This site, a static React application.',
        tags: ['Next.js', 'Tailwind']
      },
      {
        name: 'React Routine',
        description:
          'Before hooks, I tried to solve React lifecycle challenges using sagas.',
        tags: ['React']
      },
      {
        name: 'Redux Render',
        description: 'React render prop bindings to Redux.',
        tags: ['React']
      }
    ]
  }
]

const Home = () => {
  return (
    <Page title="Home">
      <ClearHeader />
      <div className="flex flex-col px-6 sm:px-8">
        <div className="h-16 sm:h-32 md:h-48 lg:h-64" />
        <div className="font-display tracking-tight">
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
        <div className="h-16 sm:h-32 md:h-48 lg:h-64" />
        {sections.map(section => (
          <React.Fragment key={section.name}>
            <h2 className="uppercase pb-4 text-cloud-500 font-bold">
              {section.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {section.cards.map(card => (
                <div
                  className="p-4 shadow-md bg-cloud-700 flex flex-col"
                  key={card.name}
                >
                  <h3 className="pb-2 font-bold">{card.name}</h3>
                  <p className="pb-4 text-cloud-400">{card.description}</p>
                  <ul className="flex mt-auto">
                    {card.tags.map(tag => (
                      <li
                        className="p-1 px-2 mr-3 shadow-md text-sm text-cloud-400 bg-cloud-600"
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
    </Page>
  )
}

export default Home
