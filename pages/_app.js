import App, {Container} from 'next/app'
import React from 'react'
import Main from '../components/main';

export default class MyApp extends App {
  render () {
    const {Component, pageProps, page} = this.props
    return (
      <Container>
        <Main>
          <Component page={page} />
        </Main>
      </Container>
    )
  }
}