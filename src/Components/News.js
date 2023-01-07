import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className='w-3/4 m-auto'>
                <div className='text-center m-4 text-4xl font-medium font-newsHead'>
                    Today's Top News
                </div>
                <div className=''>
                    <div className='row flex justify-center items-center'>
                        <NewsItem title = "news1" description = "lorem30" image = "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg"/>
                        <NewsItem title = "news1" description = "lorem30" image = "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg"/>
                        <NewsItem title = "news1" description = "lorem30" image = "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg"/>
                    </div>
                    <div className="row flex justify-center items-center">
                        <NewsItem title = "news1" description = "lorem30" image = "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg"/>
                        <NewsItem title = "news1" description = "lorem30" image = "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg"/>
                        <NewsItem title = "news1" description = "lorem30" image = "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg"/>
                    </div>
                </div>
            </div>
        )
    }
}
