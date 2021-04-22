import React, { Component } from 'react'
import Footer from './footer';
import Header from './header';
import Page from './Pages';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            currencies: ["AFYA", "ZAR"],
            currency: "AFYA",
            page: "Home"
        }
    }
    currency = (ev) => {
        let currency = ev.target.value
        this.setState({ currency })
    }


    pagination = (pagename) => {
        this.setState({ page: pagename })
    }

    render() {
        return (
            <div>

                <Header />

                {(this.state.page !== "Home") ? <Page page={this.state.page} /> :
                    <div className="outter-container">
                        <div className="contain">
                            {/* Top Box */}
                            <div className="box-container">
                                <h5 className="text" >WALLET BALANCE</h5>
                                <h5 className="text" >TOKEN BALANCE:</h5>
                                <h5 className="text" >NAIRA BALANCE:</h5>
                            </div>

                            {/* Currency */}
                            <br />
                            <div className="currency">
                                <p className="select-currency">Select Currency:</p>
                            </div>

                            <div className="select currency">
                                <p className="token">TOKEN</p>
                                <p className="digits">0.00000001</p>
                            </div>

                            {/* Buttons */}
                            <div className="buttons">
                                <button className="btn btn-primary">SEND</button>
                                <button className="btn btn-primary">RECEIVE</button>
                            </div>

                            {/* Recent Activity */}
                            <div className="recent-bg">
                                <p className="recent">Recent Activity</p>
                            </div>
                            {/* lists */}
                            <div className="lists">
                                <div className="list">
                                    <p className="list-text">Date</p>
                                    <p className="list-text">Description</p>
                                    <p className="list-text">Amount</p>
                                </div>
                                <div className="list">
                                    <p className="list-text">1/1/21</p>
                                    <p className="list-text">Sent</p>
                                    <p className="list-text">N100.0</p>
                                </div>
                                <div className="list">
                                    <p className="list-text">2/2/21</p>
                                    <p className="list-text">Received</p>
                                    <p className="list-text">N200.0</p>
                                </div>
                                <div className="list">
                                    <p className="list-text">3/3/21</p>
                                    <p className="list-text">Sent</p>
                                    <p className="list-text">N300.0</p>
                                </div>
                            </div>

                            {/* Last Bar */}
                            <div className="last-bar"></div>

                            <br />
                        </div>
                    </div>}
                <Footer pagename={this.state.page} pagination={this.pagination} />
            </div>

        )
    }
}