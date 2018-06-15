import App, {Container} from 'next/app'
import React from 'react'
import Main from '../components/main';

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    let page = 1;
    if (ctx.pathname === '/about') {
      page = 2;
    }
    return {
      pageProps,
      page,
    }
  }

  render () {
    const {Component, pageProps, page} = this.props
    return (
      <Container>
        <Main>
          <Component page={page}/>
        </Main>
      </Container>
    )
  }
}