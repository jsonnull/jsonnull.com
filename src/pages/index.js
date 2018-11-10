import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => (
  <Layout dark>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Header inverted />
    <Hero />
  </Layout>
)

export default Home
