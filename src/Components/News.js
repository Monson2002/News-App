import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=%22india%22&apiKey=609f81c798b744568fb763a01ea621fe&pageSize=21&page=1`;

        fetch(url).then((res) => {
            res.json().then((result) => {
                this.setState({ 
                    articles: result.articles,
                    loading: false,
                })
            })
        })
    }

    handlePreviousPage = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/everything?q=%22india%22&apiKey=609f81c798b744568fb763a01ea621fe&pageSize=21&page=${this.state.page - 1}`;

        fetch(url).then((res) => {
            res.json().then((result) => {
                this.setState({ 
                    articles: result.articles, 
                    page: this.state.page - 1, 
                    loading: false,
                })
            })
        })
    }

    handleNextPage = async () => {
        console.log("Next");
        let url = `https://newsapi.org/v2/everything?q=%22india%22&apiKey=609f81c798b744568fb763a01ea621fe&pageSize=21&page=${this.state.page + 1}`;

        fetch(url).then((res) => {
            res.json().then((result) => {
                this.setState({ 
                    articles: result.articles, 
                    page: this.state.page + 1, 
                    loading: false,
                })
            })
        })
    }

    render() {
        return (
            <div className='w-full m-auto sm:w-3/4'>
                <div className='text-center m-4 text-2xl sm:text-3xl lg:text-4xl font-medium font-newsHead'>
                    Today's Top News
                </div>
                <div className=''>
                    <div className='row grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'>
                        {this.state.articles.map((element) => {
                            return (
                                <>
                                    <div className='hover:scale-105 transition-all'>

                                        <NewsItem key={element.publishedAt} title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage ? element.urlToImage : "https://res.cloudinary.com/teepublic/image/private/s--79EwJk3z--/t_Preview/b_rgb:000000,c_limit,f_auto,h_630,q_90,w_630/v1608236443/production/designs/17519845_0.jpg"} url={element.url} />

                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="flex justify-between items-center m-4">
                        <button disabled={this.state.page <= 1} onClick={this.handlePreviousPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500 disabled:hover:bg-gray-100 font-bold py-2 px-4 rounded-l">
                            &#8592; Prev
                        </button>
                        <button disabled={this.state.page >= 4} onClick={this.handleNextPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500 disabled:hover:bg-gray-100 font-bold py-2 px-4 rounded-r">
                            Next &#8594;
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
