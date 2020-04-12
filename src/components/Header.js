import React from 'react'
import Link from 'next/link'

const Li = ({ children }) => <li className="ml-3">{children}</li>

export const Header = () => (
  <nav className="fixed flex flex-1 inset-x-0 p-8">
    <Link href="/">
      <a>jsonnull</a>
    </Link>
    <ul className="ml-auto flex">
      <Li>
        <Link href="/blog/">
          <a>blog</a>
        </Link>
      </Li>
      <Li>
        <Link href="/about/">
          <a>about</a>
        </Link>
      </Li>
    </ul>
  </nav>
)
