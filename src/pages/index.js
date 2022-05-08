import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Heading, Page, Wrapper } from '../components'
import { Spacer } from '../components/Spacer.tsx'
import { ProjectGrid } from '../components/ProjectGrid'
import { Button } from '../components/Button'
import { profileDataURI } from '../lib/profileDataURI'
import { jsonnull, configuration } from '../data/projects/index.ts'
import { ArrowRight } from 'react-feather'

export const Title = ({ className }) => {
  return (
    <h1
      className={clsx(
        'pt-4 text-4xl sm:text-5xl font-semibold tracking-tight',
        className
      )}
    >
      Crafting{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fog to-steel">
        experiences
      </span>{' '}
      with code.
    </h1>
  )
}

const TitleSection = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={profileDataURI}
        alt="Picture of the author"
        width="80"
        height="80"
        className="rounded-full"
      />
      <Title />
    </div>
  )
}

const Home = () => {
  return (
    <Wrapper>
      <Spacer extraWide />
      <TitleSection />
      <Spacer extraWide />
      <div className="flex flex-col items-center">
        <Heading>Recent Projects</Heading>
      </div>
      <Spacer medium />
      <ProjectGrid projects={[jsonnull, configuration]} />
      <Spacer medium />
      <div className="flex justify-center">
        <Link href="/projects">
          <a>
            <Button>
              <div className="flex items-center underline-themed">
                See my other projects
                <ArrowRight size={18} className="ml-2" />
              </div>
            </Button>
          </a>
        </Link>
      </div>
    </Wrapper>
  )
}

Home.getLayout = (page) => (
  <Page title="Home" ogImage="/public/og-images/index.jpg">
    {page}
  </Page>
)

export default Home
