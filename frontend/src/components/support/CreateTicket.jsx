import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircle, FaUser, FaChartLine, FaWallet, FaTerminal, FaCoins, FaCirclePlus } from "react-icons/fa6";

function CreateTicket() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

                {/* Account Opening */}
                <div className="col-md-4 p-5 mt-2 mb-2">
                    <h5 className="">
                        <FaCirclePlus /> Account Opening
                    </h5>
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Online Account Opening
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Offline Account Opening
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Company, Partnership and HUF Account Opening
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        NRI Account Opening
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Charges at Zerodha
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Zerodha IDFC FIRST Bank 3-in-1 Account
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Getting Started
                    </Link>
                </div>

                {/* Your Zerodha Account */}
                <div className="col-md-4 p-5 mt-2 mb-2">
                    <h5 className="">
                        <FaUser /> Your Zerodha Account
                    </h5>
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Login Credentials
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Account Modification and Segment Addition
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        DP ID and bank details
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Your Profile
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Transfer and conversion of shares
                    </Link>
                </div>

                {/* Your Zerodha Account (Second) */}
                <div className="col-md-4 p-5 mt-2 mb-2">
                    <h5 className="">
                        <FaChartLine /> Your Zerodha Account
                    </h5>
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Margin/leverage, Product and Order types
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Kite Web and Mobie
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Trading FAQs
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Corporate Actions
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Sentinel
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Kite API
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Pi and other platforms
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Stockreports+
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        GTT
                    </Link>
                </div>

                {/* Funds */}
                <div className="col-md-4 p-5 mt-4 mb-2">
                    <h5 className="">
                        <FaWallet /> Funds
                    </h5>
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Adding Funds
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Fund Withdrawal
                    </Link>
                </div>

                {/* Console */}
                <div className="col-md-4 p-5 mt-4 mb-2">
                    <h5 className="">
                        <FaTerminal /> Console
                    </h5>
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Reports
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Ledger
                    </Link>
                </div>

                {/* Coin */}
                <div className="col-md-4 p-5 mt-4 mb-2">
                    <h5 className="">
                        <FaCoins /> Coin
                    </h5>
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        Understanding Mutual Funds
                    </Link>
                    <br />
                    <Link to="/" style={{ textDecoration: "none", lineHeight: "2.5" }}>
                        About Coin
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CreateTicket
