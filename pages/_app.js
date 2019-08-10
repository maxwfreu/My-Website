import App, {Container} from 'next/app'
import Head from 'next/head';
import React from 'react'
import Layout from '../components/layout';

export default class MyApp extends App {
  render () {
    const {Component, pageProps, page} = this.props
    return (
      <Container>
        <Head>
          <title>Max Freundlich - Full Stack Developer</title>
        </Head>
        <Layout>
          <Component page={page} />
        </Layout>
      </Container>
    )
  }
}