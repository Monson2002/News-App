import React, { Component } from 'react'
import spinner from './Images/Spinner-2.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='flex justify-center items-center mt-[15%]'>
                <img src={spinner} alt="" />
            </div>
        )
    }
}
