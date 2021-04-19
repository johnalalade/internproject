import React, { Component } from 'react'
import Footer from './footer';
import Header from './header';
import Aids from '../Images/aids.png';
import Bp from '../Images/blood pressure.png';
import lungs from '../Images/lungs.jpg';
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
                            <div className="container">
                            {/* Top Box */}
                            <div className="box-container">
                                <div className="AFYA">
                                    <div className="border-radius">
                                        <h6 className="name1">AFYA</h6>
                                    </div>
                                    <p className="number">143.00</p>
                                    <p className="text">Balance</p>
                                </div>

                                <div className="line"></div>

                                <div className="ZAR">
                                    <div className="border-radius">
                                        <h6 className="name2">ZAR</h6>
                                    </div>
                                    <p className="number">R21.00</p>
                                    <p className="text">Equivalent</p>
                                </div>
                            </div>

                            {/* Currency */}
                            <br />
                            <div className="currency">
                                <p className="select-currency">Select Currency:</p>
                            </div>

                            <div className="select currency">

                                <select value={this.state.currency} name="currency" onChange={this.currency} className="select-box">
                                    {this.state.currencies.map((cur) =>
                                        <option key={cur} value={cur}>{cur}</option>
                                    )}

                                </select>

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
                                    <img src={Aids} className="list-img" alt="HIV" />
                                    <p className="list-text">HIV Blood Draw Test</p>
                                    <p className="list-price">A100</p>
                                </div>
                                <div className="list">
                                    <img src={lungs} className="list-img" alt="HIV" />
                                    <p className="list-text">TB Radiology XRay</p>
                                    <p className="list-price">A30</p>
                                </div>
                                <div className="list">
                                    <img src={Bp} className="list-img" alt="HIV" />
                                    <p className="list-text">Blood Pressure Check</p>
                                    <p className="list-price">A10</p>
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