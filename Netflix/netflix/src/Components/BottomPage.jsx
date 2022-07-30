import React from 'react';
import './BottomPage.css';

function BottomPage() {
    return (
        <div className='main'>
            <div className='list'>
                <h1>Frequently Asked Questions</h1>
                <div className='accordion_menu'>
                    <div className='item' id='item_1'>
                        <a href='#item_1' className='title' id='item_1'>
                            <span>What Is Netflix ? </span>
                            <i className='icon'></i>
                        </a>
                        <p className='text'>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices.
                            <br />
                            <br />
                            You can watch as much as you want, whenever you want, without a single ad  all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </p>
                    </div>
                </div>

                <div className='accordion_menu'>
                    <div className='item' id='item_2'>
                        <a href='#item_2' className='title' id='item_2'>
                            <span>How much does Netflix cost ? </span>
                            <i className='icon'></i>
                        </a>
                        <p className='text'>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </p>
                    </div>
                </div>

                <div className='accordion_menu'>
                    <div className='item' id='item_3'>
                        <a href='#item_3' className='title' id='item_3'>
                            <span>Where can I watch ? </span>
                            <i className='icon'></i>
                        </a>
                        <p className='text'>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                            <br />
                            <br />
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </p>
                    </div>
                </div>


                <div className='accordion_menu'>
                    <div className='item' id='item_4'>
                        <a href='#item_4' className='title' id='item_4'>
                            <span>How can I cancel ? </span>
                            <i className='icon'></i>
                        </a>
                        <p className='text'>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees  start or stop your account anytime.
                        </p>
                    </div>
                </div>


                <div className='accordion_menu'>
                    <div className='item' id='item_6'>
                        <a href='#item_6' className='title' id='item_6'>
                            <span>What can I watch on Netflix ? </span>
                            <i className='icon'></i>
                        </a>
                        <p className='text'>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </p>
                    </div>
                </div>

                <div className='accordion_menu'>
                    <div className='item' id='item_7'>
                        <a href='#item_7' className='title' id='item_7'>
                            <span>Is Netflix good foe kid ? </span>
                            <i className='icon'></i>
                        </a>
                        <p className='text'>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                            <br />
                            <br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.
                        </p>
                    </div>
                </div>

                <div className='banner_2'>
                    <div className='main_Title_Container'>
                        <p className='sub_Title_a'>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className='email_Container_1'>
                        <input type='email' name='email' id='mail' placeholder='Email Address' className='email_Input' />
                        <input type='submit' value='Get Started >' className='btn_Get_Started' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomPage;