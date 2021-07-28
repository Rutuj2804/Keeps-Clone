import React from 'react'
import './Header.css'
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <h4>Google Keeps</h4>
        </div>
    )
}

export default Header