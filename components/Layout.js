import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import "../static/css/style.css"

class Layout extends Component {
  render() {
    const { children, title = "My blogs" } = this.props;

    return (
      <div>
        <Head>
          <title> {title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
