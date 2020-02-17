import React, { Component } from 'react';
import Table from "react-bootstrap/Table";
import SampleQ from '../components/question.js';
import css from '../scss/style.scss';
import Layout from '../components/layout';
import NavigationBar from "../components/Navbar/index";

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showBackground: false
        };

        this.showBackground = () => {
            this.setState({ showBackground: true });
        };

        this.hideBackground = () => {
            this.setState({ showBackground: false });
        }
    }

    static getInitialProps({query: {categories, questions, answers}}) {
        return {postCs: categories, allQs: questions, allAs: answers}
    }

    createTable = () => {
        let table = [];

        let cats = [];

        for (let i = 0; i < this.props.postCs.length; i++){
            cats.push(<th key = {i}>{this.props.postCs[i].title}</th>);
        }

        table.push(<thead> <tr> {cats} </tr> </thead>);

        let index = 0;
        // Outer loop to create parent
        for (let i = 1; i < 6; i++) {
            let children = [];

            //Inner loop to create children
            for (let j = 1; j < 7; j++) {
                children.push(
                    <td>
                        <div>
                            <SampleQ
                                amount={i}
                                question={this.props.allQs[(index)].title}
                                answer={this.props.allAs[(index)].title}
                                showBackdrop={this.showBackground}
                                hideBackdrop={this.hideBackground}
                            />
                        </div>
                    </td>);
                index++;
            }
            //Create the parent and add the children
            table.push(<tr>{children}</tr>)
        }

        return table
    };

    render() {
        let data = this.createTable();

        return (
            <div>
                <Layout showBackground={this.state.showBackground} title="lllll" />
                <Table striped bordered hover variant = "dark" className={css.table} hide={true}>
                    {data}
                </Table>
            </div>
        )
    }
}