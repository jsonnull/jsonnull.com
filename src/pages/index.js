import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Heading, Page, Wrapper } from '../components'
import { Spacer } from '../components/Spacer.tsx'
import { ProjectGrid } from '../components/ProjectGrid'
import { Button } from '../components/Button'
import profilePic from '../../static/img/photo.jpg'
import { jsonnull, configuration } from '../data/projects/index.ts'
import { ArrowRight } from 'react-feather'

const Title = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={profilePic}
        alt="Picture of the author"
        width="80"
        height="80"
        className="rounded-full"
      />
      <h1 className="pt-4 text-3xl sm:text-5xl font-semibold tracking-tight">
        Crafting{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fog to-steel">
          experiences
        </span>{' '}
        with code.
      </h1>
    </div>
  )
}

const Home = () => {
  return (
    <Wrapper>
      <Spacer extraWide />
      <Title />
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

Home.getLayout = (page) => <Page title="Home">{page}</Page>

export default Home
