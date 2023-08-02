import React from 'react'
import Dropdown from './Dropdown'
export default function Footer() {
    return (
        <div className='m-4'>
            <div className="flex flex-col mt-5 md:flex md:flex-row">
                <div className='ml-10 md:mt-5'>
                    <img className="invert inline w-[150px]" src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" alt="zomato" />
                </div>
                <div className=' relative w-full mt-4 z-10 flex flex-row h-[50px] justify-start gap-2'>
                    <div>
                        <Dropdown number1="24" number2="20" />
                    </div>
                    <div>
                        <Dropdown number1="12" number2="12" />
                    </div>
                </div>
            </div>
            <div className='mt-2 ml-10'>
                <div className='ml-5 mb-5 mr-20 inline-block p-3 rounded-md '>
                    <h2 className=' text-xl font-bold tracking-wider mb-2'>ABOUT ZOMATO</h2>
                    <ul className=''>
                        <li>Who We Are</li>
                        <li>Blog</li>
                        <li>Work With Us</li>
                        <li>Investor Relations</li>
                        <li>Report Fraud</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='ml-5 relative -top-[28px] mr-20 inline-block p-3 rounded-md '>
                    <h2 className=' text-xl font-bold tracking-wider mb-2'>ZOMAVERSE</h2>
                    <ul className=''>
                        <li>Zomato</li>
                        <li>Blinkit</li>
                        <li>Feeding India</li>
                        <li>Hyperpure</li>
                        <li>Zomaland</li>
                    </ul>
                </div>
                <div className='ml-5 mb-3 relative -top-[28px] mr-20 inline-block p-3 rounded-md '>
                    <h2 className=' text-xl font-bold tracking-wider mb-2'>FOR RESTAURANTS</h2>
                    <ul className=''>
                        <li>Partner With Us</li>
                        <li>Apply For You</li>
                        <li><h2 className=' mt-2 text-xl font-bold tracking-wider mb-2'>FOR ENTERPISES</h2></li>
                        <li>Zomato For Enterprise</li>
                    </ul>
                </div>
                <div className='ml-5 sm:ml-0 relative -top-[47px] mr-20 inline-block p-3 rounded-md '>
                    <h2 className=' text-xl font-bold tracking-wider mb-2'>LEARN MORE</h2>
                    <ul className=''>
                        <li>Privacy</li>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className='ml-5 mr-20 relative -top-[59px] inline-block p-3 rounded-md '>
                    <h2 className=' text-xl font-bold tracking-wider mb-2'>SOCIAL LINKS</h2>
                    <ul className='flex gap-[8px]'>
                        <li className='w-6 '>
                            <img className='' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                        </li>
                        <li className='w-6'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346" alt="" /></li>
                        <li className='w-6'>
                            <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt="" />
                        </li>
                        <li className='w-6'>
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                        </li>
                        <li className='w-6'>
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                        </li>
                    </ul>
                    <div className='flex flex-col -ml-1'>
                        <a className='w-[155px] mt-2' href="https://bnc.lt/download-zomato-ios">
                            <img src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
                        </a>
                        <a className='w-[155px] mt-2' href="https://bnc.lt/download-z-android">
                            <img src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <hr />
                <p className='m-2 p-2'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}
