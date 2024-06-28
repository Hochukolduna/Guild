import React, { Component } from 'react'
import NUK from '../data/reviewData/NewsData'

export default class News extends Component {
    render() {
        return (
            <div className = 'backside'>
                <div className='flat'>
                <NUK/>
                </div>
            </div>
        )
    }
}