import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <div className="navbr">
            <div className="navbar">
                <div className="menu">☰</div>
                <div className="image">
                    <img src="../Mediamodifier-Design.svg" height="80px" alt=""/>
                </div>
                <div className="engine">
                    <a className="engine1" href="#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Search Icon</title>
                            <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                    <input className="search" type="text" placeholder="Search for Products, Brands and More"></input>
                </div>
                <div className="account">
                    <span>
                        <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" /></a>
                    </span>
                    <Link className="login-button" to="/login">Login</Link> {/* Changed from dropdown to direct link */}
                    <Link className="accountbutton1" to="/login">You</Link>
                </div>
                <div className="cart">
                    <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" /></a>
                    <a className="cartbutton" href="#">Cart</a>
                </div>
                <div className='seller'>
                    <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" /></a>
                    <a className="sellerbutton" href="#">Become a seller</a>
                </div>
                <div className="more">
                    <div className="ss">
                        <span>
                            <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" /></a>
                        </span>
                        <div id="more" className="dropdown-content">
                            <div id="moredrop" className="accountdropdown1">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" height="20px" width="20px" alt="" />
                                <a className="accountdropdown1a" href="#">Notification Preferences</a>
                            </div>
                            <div id="moredrop" className="accountdropdown1">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/helpcenter-7d90c0.svg" height="20px" width="20px" alt="" />
                                <a className="accountdropdown1a" href="#">24x7 Customer Care</a>
                            </div>
                            <div className="accountdropdown1">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-298691.svg" height="20px" width="20px" alt="" />
                                <a className="accountdropdown1a" href="#">Advertise</a>
                            </div>
                            <div className="accountdropdown1">
                                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/downloadApp-2ea657.svg" height="20px" width="20px" alt="" />
                                <a className="accountdropdown1a" href="#">Download App</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondnavbar">
                <div className="secondengine">
                    <a className="secondengine1" href="#">
                        <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <title>Search Icon</title>
                            <path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                    <input className="secondsearch" type="text" placeholder="Search for Products, Brands and More"></input>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
