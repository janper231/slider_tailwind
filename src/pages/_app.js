import React from 'react';
import App from 'next/app';
import Head from "next/head";
import "../style.css";

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Slider</title>
                </Head>
                <div className="container mx-auto">
                    <Component {...pageProps} />
                </div>
            </>
        )
    }
}

export default MyApp
