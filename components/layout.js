import Head from 'next/head'
import React, {Component} from "react";
import Backdrop from "./backdrop";
import Navigation from "../pages/_document";
import NavigationBar from "../components/Navbar/index";

class Layout extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let background;

        if (this.props.showBackground) {
            background = <Backdrop />;
        }

        return (
            <div>
                { this.props.showBackground ? null : <NavigationBar/> }
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                {background}
            </div>
        );
    }
}

export default Layout;

/*
import Head from 'next/head'
import React from "react";
import Backdrop from "./backdrop";

export default ({ showBackground, title = 'Ruthvik Konda' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Backdrop/>
    </div>
)
 */