import React from 'react'
import Image from 'next/image'
import { Page } from '../components'
import profilePic from '../../static/img/photo.jpg'

const Title = () => {
  return (
    <div className="flex flex-col mx-8 py-32 items-start sm:items-center">
      <Image
        src={profilePic}
        alt="Picture of the author"
        width="80"
        height="80"
        placeholder="blur" // Optional blur-up while loading
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
    <Title />
  )
}

Home.getLayout = page => (
  <Page title="Home">
    {page}
  </Page>
)

export default Home
