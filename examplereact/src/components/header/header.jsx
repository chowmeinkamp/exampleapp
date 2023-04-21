import React from 'react';
import './header.css'

export default function Header() {
    return(
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitle1'>FUNNY</span>
                <span className='headerTitle2'>Posts</span>
                <img className='headerImg' src='/images/background.jpg' alt='header'/>
            </div>
        </div>
    )
}