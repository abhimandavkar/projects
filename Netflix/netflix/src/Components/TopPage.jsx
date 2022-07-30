import React from 'react';
import './TopPage.css';
import Img from './Images/R.png'

function TopPage() {
    return (
        <div>
            <div className='container'>
            <nav className='nav_bar'>
                <img src={Img} alt='Nitflex log' className='logo' />
                <div className='side_Btns'>
                <select className='btn_2'>
                    <option>English</option>
                    <option>हिंदी</option>
                </select>
                <button className='btn_1'>Sign In</button>
                </div>
            </nav>
            <div className='main_Container'>
                <div className='main_Title_Container'>
                <h1 className='main_Title'>Unlimited movies, TV shows and more.</h1>
                <h2 className='sub_Title'>Watch anywhere. Cancel anytime.</h2>
                <p className='sub_Title_a'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='email_Container'>
                <input type='email' name='email' id='mail' placeholder='Email Address'  className='email_Input'/>
                <input type='submit' value='Get Started >' className='btn_Get_Started'/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default TopPage;