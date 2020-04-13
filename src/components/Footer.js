import React from 'react'
import Link from 'next/link'
import feather from 'feather-icons'
import { theme } from '../../tailwind.config'

// "It is the power of the mind to be unconquerable." – Seneca

export const Footer = () => (
  <div className="flex inset-x-0 p-6 sm:p-8 mt-auto">
    {[
      ['github', 'https://github.com/jsonnull'],
      ['twitter', 'https://twitter.com/jsonnull']
    ].map(([name, href]) => {
      return (
        <a href={href} key={href} target="_blank" rel="noopener noreferrer">
          <div
            className="mr-3"
            dangerouslySetInnerHTML={{
              __html: feather.icons[name].toSvg({
                color: theme.colors.cloud['500'],
                width: 20,
                height: 20
              })
            }}
          />
        </a>
      )
    })}
    <div className="ml-auto flex">
      <a
        className="text-cloud-500"
        href="https://github.com/jsonnull/jsonnull.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source on GitHub
      </a>
    </div>
  </div>
)
