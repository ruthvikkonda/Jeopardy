import Document, { Head, Main, NextScript } from "next/document";
import Navigation from '../components/Navbar';
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <title>
                        Ruthvik Konda
                    </title>
                    <link
                        rel ="icon"
                        type="image/png"
                        href='../static/favicon.ico'
                    />
                    <Navigation/>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}