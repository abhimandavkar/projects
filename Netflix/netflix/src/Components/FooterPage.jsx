import React from 'react';
import './FooterPage.css';

function FooterPage() {
  return (
    <div>
       <footer className='footer'>
           {/* <div className='contact'>
               <h3>Questions? Call 000-800-040-1843</h3>
           </div> */}
           <div className='one'>
               <ul className='items'>
               <h3>Questions? Call 000-800-040-1843</h3>
                   <li><a href='#.'>FAQ</a></li>
                   <li><a href='#.'>Investor Relations</a></li>
                   <li><a href='#.'>Privacy</a></li>
                   <li><a href='#.'>Speed Test</a></li> 
               </ul>

               <ul className='items'>
                   <li><a href='#.'>Help Centre</a></li>
                   <li><a href='#.'>Jobs</a></li>
                   <li><a href='#.'>Cookie Preferences</a></li>
                   <li><a href='#.'>Legal Notices</a></li>
               </ul>
           </div>

           <div className='one'>
               <ul className='items'>
                   <li><a href='#.'>Account</a></li>
                   <li><a href='#.'>Ways to Watch</a></li>
                   <li><a href='#.'>Corporate Information</a></li>
                   <li><a href='#.'>Only on Netflix</a></li>
               </ul>

               <ul className='items'>
                   <li><a href='#.'>Media Centre</a></li>
                   <li><a href='#.'>Terms of Use</a></li>
                   <li><a href='#.'>Contact Us</a></li>
               </ul>
           </div>
       </footer>
    </div>
  )
}

export default FooterPage;