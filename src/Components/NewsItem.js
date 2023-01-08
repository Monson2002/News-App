import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let { title, description, urlToImage, url } = this.props;
        return (
            <div>
                <div className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={urlToImage} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">
                            {description}...
                        </p>
                        <div className='p-4'>
                            <a href={url} target="_blank" rel="noreferrer" className="flex justify-center items-center">
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
