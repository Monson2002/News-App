import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="bg-gray-800">
                    <div className="mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* <!-- Mobile menu button--> */}
                                <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute flex items-center md:justify-between w-full sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center sm:p-4">
                                    <img className="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                                    <img className="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                                </div>

                                <div className="relative flex npm run startjustify-center items-center md:space-x-4 sm:p-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline" aria-current="page"><Link to="/">NEWS App</Link></div>

                                    <div className="nav-items text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline"><Link to="/business">Business</Link></div>
                                    <div className="nav-items text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline"><Link to="/entertainment">Entertainment</Link></div>
                                    <div className="nav-items text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline"><Link to="/health">Health</Link></div>
                                    <div className="nav-items text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline"><Link to="/science">Science</Link></div>
                                    <div className="nav-items text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline"><Link to="/sports">Sports</Link></div>
                                    <div className="nav-items text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer hover:text-slate-200 hover:underline"><Link to="/technology">Technology</Link></div>

                                    {/* <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</Link> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar