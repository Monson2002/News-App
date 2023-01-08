import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "Chetan Sharma returns as chairman of BCCI's selection committee - ESPNcricinfo",
            "description": "Salil Ankola, SS Das, Subroto Banerjee and S Sharath are the other members of the committee",
            "url": "https://www.espncricinfo.com/story/bcci-selection-committee-chetan-sharma-ss-das-salil-ankola-subroto-banerjee-s-sharath-1352651",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/349800/349815.6.jpg",
            "publishedAt": "2023-01-07T11:45:33Z",
            "content": "NewsSalil Ankola, SS Das, Subroto Banerjee and S Sharath are the other members of the committee"
        },
        {
            "source": {
                "id": null,
                "name": "The Tribune India"
            },
            "author": "The Tribune India",
            "title": "Punjab minister Fauja Singh Sarari resigns months after extortion controversy - The Tribune India",
            "description": "Punjab Horticulture Minister Fauja Singh Sarari resigned from the Cabinet today, months after his name came up in a case of devising an extortion plan.&nbsp;&nbsp;",
            "url": "https://www.tribuneindia.com/news/punjab/punjab-minister-fauja-singh-sarari-resigns-468271",
            "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/1/2023_1$largeimg_691475185.JPEG",
            "publishedAt": "2023-01-07T11:25:00Z",
            "content": "Tribune News Service\r\nRuchika M. Khanna \r\nChandigarh, January 7\r\nPunjab Horticulture Minister Fauja Singh Sarari resigned from the Cabinet today, months after his name came up in a case of devising a… [+1403 chars]"
        },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "ThePrint"
        //     },
        //     "author": "ANI",
        //     "title": "Study: Protein important in development of Alzheimer’s disease for normal learning processes - ThePrint",
        //     "description": "Washington [US], January 7 (ANI): New research has revealed that the tau protein, which is important in the development of Alzheimer’s disease, is also involved in normal learning processes in the healthy brain, potentially providing a target for future drug …",
        //     "url": "https://theprint.in/health/study-protein-important-in-development-of-alzheimers-disease-for-normal-learning-processes/1303237/",
        //     "urlToImage": null,
        //     "publishedAt": "2023-01-07T11:14:35Z",
        //     "content": "Washington [US], January 7 (ANI): New research has revealed that the tau protein, which is important in the development of Alzheimer’s disease, is also involved in normal learning processes in the he… [+3556 chars]"
        // },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Anand Mohan J",
            "title": "‘Will go by law, not public pressure’: Court sends accused in Air India ‘urinating’ incident to 14-day judicial custody - The Indian Express",
            "description": "The Delhi Police alleged that Shankar Mishra did not cooperate with the investigation and was ‘deliberately avoiding the joining of investigation’.",
            "url": "https://indianexpress.com/article/cities/delhi/shankar-mishra-air-india-urination-incident-accused-judicial-custody-delhi-8367381/",
            "urlToImage": "https://images.indianexpress.com/2023/01/shankar-mishra.jpg",
            "publishedAt": "2023-01-07T11:12:36Z",
            "content": "Observing that it will go by law and not public pressure, a Delhi court on Saturday sent Shankar Mishra, the Air India passenger accused of urinating on a woman during a flight, to 14 days in judicia… [+2620 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Cummins leads from the front as Aussies make inroads | Australia v South Africa 2022-23 - cricket.com.au",
            "description": "Two sessions were possible on day four in Sydney as the weather finally cooperated and Australia’s declaration led to six South African wickets falling befor...",
            "url": "https://www.youtube.com/watch?v=n6xFe13LAR0",
            "urlToImage": "https://i.ytimg.com/vi/n6xFe13LAR0/maxresdefault.jpg",
            "publishedAt": "2023-01-07T10:35:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Samsung Galaxy S23 series launch date revealed: Details | Mint - Mint",
            "description": "Samsung Colombia official website has revealed the date of Galaxy Unpacked event 2023 that has tagline “Epic moments are coming.”",
            "url": "https://www.livemint.com/technology/gadgets/samsung-galaxy-s23-series-launch-date-revealed-details-11673087287114.html",
            "urlToImage": "https://images.livemint.com/img/2023/01/07/600x338/galaxy_unpacked_1673087299943_1673087332668_1673087332668.jfif",
            "publishedAt": "2023-01-07T10:32:21Z",
            "content": "Samsung Galaxy S23 series will be officially released on February 1. The companys official Colombia website has listed the Galaxy Unpacked event with the tagline Epic moments are coming.\" The smartph… [+1945 chars]"
        },
        // {
        //     "source": {
        //         "id": "google-news",
        //         "name": "Google News"
        //     },
        //     "author": null,
        //     "title": "Cancer vaccine breakthrough: Scientists turn tumor cells into cancer killers | TheHealthSite.com - TheHealthSite",
        //     "description": null,
        //     "url": "https://news.google.com/__i/rss/rd/articles/CBMilQFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL2NhbmNlci9maW5hbGx5LXdlLWhhdmUtYS1jYW5jZXItdmFjY2luZS10aGF0LWNhbi1raWxsLXR1bW9yLWNlbGxzLXByZXZlbnQtY2FuY2VyLXJlY3VycmVuY2UtOTQxNjQzL9IBmQFodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS9kaXNlYXNlcy1jb25kaXRpb25zL2NhbmNlci9maW5hbGx5LXdlLWhhdmUtYS1jYW5jZXItdmFjY2luZS10aGF0LWNhbi1raWxsLXR1bW9yLWNlbGxzLXByZXZlbnQtY2FuY2VyLXJlY3VycmVuY2UtOTQxNjQzL2FtcC8?oc=5",
        //     "urlToImage": null,
        //     "publishedAt": "2023-01-07T10:26:00Z",
        //     "content": null
        // },
        {
            "source": {
                "id": null,
                "name": "123telugu.com"
            },
            "author": null,
            "title": "Star director gets injured while shooting in Hyderabad - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/star-director-gets-injured-while-shooting-in-hyderabad.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2023-01-07T10:02:00Z",
            "content": "Bollywood star director Rohit Shetty who is known for his masala commercial flicks met with an accident just a while ago. As per the news, the incident happened in Hyderabad while shooting an action … [+721 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "2 Billion People To Travel In China's \"Great Migration\" Over Next 40 Days - NDTV",
            "description": "China on Saturday marked the first day of \"chun yun\", the 40 day period of Lunar New Year travel known prepandemic as the world's largest annual migration of people",
            "url": "https://www.ndtv.com/world-news/2-billion-people-to-travel-in-chinas-great-migration-over-next-40-days-3671437",
            "urlToImage": "https://c.ndtvimg.com/2023-01/rel87jag_china-travel_625x300_07_January_23.jpg",
            "publishedAt": "2023-01-07T09:44:08Z",
            "content": "China's Ministry of Transport expects over 2 billion people to take trips over the next 40 days.\r\nShanghai: China on Saturday marked the first day of \"chun yun\", the 40-day period of Lunar New Year t… [+5172 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Oppo Reno 9 NOT coming to India! Oppo to bring THIS instead - HT Tech",
            "description": "Oppo Reno 9 series is not coming to India, leaks suggest the Reno 10 series coming to India.",
            "url": "https://tech.hindustantimes.com/mobile/news/oppo-reno-9-not-coming-to-india-oppo-to-bring-this-instead-71673083692093.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2023/01/07/1600x900/Untitled_design_99_1673083897909_1673083898045_1673083898045.png",
            "publishedAt": "2023-01-07T09:34:41Z",
            "content": "Oppo Reno 9 series is not coming to India. Based on a new leak, it is now said that the Reno 9 series is not coming to India in the early phase of 2023. Instead, Oppo is likely to bring the Reno 10 s… [+1772 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT News Desk",
            "title": "Sultanpuri horror: Eyewitness Nidhi was arrested in drug smuggling case - Hindustan Times",
            "description": "Nidhi was arrested in December 2020 in a case registered in Agra Cantt under Narcotic Drugs and Psychotropic Substances Act, (1985). | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/sultanpuri-horror-eyewitness-nidhi-was-arrested-in-drug-smuggling-case-101673081081140.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/01/07/1600x900/sultanpuri_death_case_eyewitness_nidhi_1673081535577_1673081541606_1673081541606.jpeg",
            "publishedAt": "2023-01-07T09:14:28Z",
            "content": "Sultanpuri death case eyewitness Nidhi, who was riding pillion on Anjali Singh's scooty on the fateful night of New Year, was earlier arrested in a drug smuggling case and was out on bail, Delhi Poli… [+2293 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rediff.com"
            },
            "author": "PTI",
            "title": "Pant undergoes knee surgery for ligament tear - Rediff.com",
            "description": "Rishabh Pant, who miraculously escaped a horrific car accident last week, has successfully undergone a knee surgery at a Mumbai hospital.",
            "url": "https://www.rediff.com/cricket/report/rishabh-pant-undergoes-knee-surgery-for-ligament-tear/20230107.htm",
            "urlToImage": "https://im.rediff.com/cricket/2022/dec/30rishabh-pant1.jpg",
            "publishedAt": "2023-01-07T08:50:32Z",
            "content": "IMAGE: Rishabh Pant suffered multiple injuries after his speeding car hit the divider and caught fire on the Delhi-Dehradun highway, on December 30, 2022. Photograph: PTI\r\nRishabh Pant, who miraculou… [+935 chars]"
        },
        // {
        //     "source": {
        //         "id": "google-news",
        //         "name": "Google News"
        //     },
        //     "author": null,
        //     "title": "Redmi Note 12 series, OnePlus 11, Samsung Galaxy F04 and more: Top smartphones launched this week | FE Tech Bytes news roundup - The Financial Express",
        //     "description": null,
        //     "url": "https://news.google.com/__i/rss/rd/articles/CBMiswFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlL3RlY2hub2xvZ3ktcmVkbWktbm90ZS0xMi1zZXJpZXMtb25lcGx1cy0xMS1zYW1zdW5nLWdhbGF4eS1mMDQtYW5kLW1vcmUtdG9wLXNtYXJ0cGhvbmVzLWxhdW5jaGVkLXRoaXMtd2Vlay1mZS10ZWNoLWJ5dGVzLW5ld3Mtcm91bmR1cC0yOTM5Njk0L9IBuAFodHRwczovL3d3dy5maW5hbmNpYWxleHByZXNzLmNvbS9saWZlL3RlY2hub2xvZ3ktcmVkbWktbm90ZS0xMi1zZXJpZXMtb25lcGx1cy0xMS1zYW1zdW5nLWdhbGF4eS1mMDQtYW5kLW1vcmUtdG9wLXNtYXJ0cGhvbmVzLWxhdW5jaGVkLXRoaXMtd2Vlay1mZS10ZWNoLWJ5dGVzLW5ld3Mtcm91bmR1cC0yOTM5Njk0L2xpdGUv?oc=5",
        //     "urlToImage": null,
        //     "publishedAt": "2023-01-07T08:05:07Z",
        //     "content": null
        // },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "On Camera: Schoolboy Hit By Car, Dragged For 1 km In UP - NDTV",
            "description": "A 15-year-old schoolboy was dragged by a car for a kilometre in Uttar Pradesh's Hardoi in a hit-and-run incident similar to the Delhi car horror.",
            "url": "https://www.ndtv.com/india-news/on-camera-schoolboy-hit-by-car-dragged-for-1-km-in-up-3671544",
            "urlToImage": "https://c.ndtvimg.com/2023-01/tnjnocvo_schoolboy-dragged-up_625x300_07_January_23.jpg",
            "publishedAt": "2023-01-07T07:48:34Z",
            "content": "CCTV videos show the boy getting dragged behind the speeding car.\r\nA 15-year-old schoolboy was dragged by a car for a kilometre in Uttar Pradesh's Hardoi in a hit-and-run incident similar to the Delh… [+1243 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Pakistani actor Sadia Khan shares pic with Aryan Khan from Dubai party - Hindustan Times",
            "description": "A picture of Aryan Khan posing with Pakistani actor Sadia Khan at a party in Dubai has caught the attention of his fans. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/aryan-khan-poses-with-pakistani-actor-sadia-khan-in-pic-from-new-year-party-in-dubai-101673072880625.html",
            "urlToImage": "https://images.hindustantimes.com/img/2023/01/07/1600x900/aryan_khan_sadia_khan_1673073903430_1673073903625_1673073903625.jpg",
            "publishedAt": "2023-01-07T07:36:53Z",
            "content": "Aryan Khan and sister Suhana Khan attended a party in Dubai around the new year and pictures from the same have led to rumours of him dating actor Nora Fatehi. Now a picture of Aryan posing with Paki… [+1850 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "iPhone SE 4 is now reportedly canceled: Ming Chi-Kuo - The Indian Express",
            "description": "A report from the analyst last month speculated that the next-gen iPhone SE might be cancelled or delayed. Now, it appears that model has been scrapped entirely.",
            "url": "https://indianexpress.com/article/technology/tech-news-technology/iphone-se-4-is-now-reportedly-canceled-kuo-8366889/",
            "urlToImage": "https://images.indianexpress.com/2022/12/iphone-se-4-cancelled.jpg",
            "publishedAt": "2023-01-07T07:19:00Z",
            "content": "The iPhone SE 4 that was supposed to come out this year might be scrapped entirely. Apple has reportedly informed suppliers that it has cancelled plans to release a fourth-generation iPhone SE.The in… [+1441 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "OpIndia"
            },
            "author": "OpIndia Staff",
            "title": "‘He is Vijender, not a dog’: Netizens react after Congress shares Rahul Gandhi’s pictures with a dog, boxer Vijender Singh as BJY enters Haryana - OpIndia",
            "description": "Congress shared pictures of Rahul Gandhi walking along with a dog, boxer Vijender Singh, and others. | OpIndia News",
            "url": "https://www.opindia.com/2023/01/netizens-react-after-congress-shares-rahul-gandhis-picture-with-boxer-vijender-singh-as-bjy-enters-haryana/",
            "urlToImage": "https://www.opindia.com/wp-content/uploads/2023/01/IMG_6303.jpg",
            "publishedAt": "2023-01-07T07:14:53Z",
            "content": "As Bharat Jodo Yatra entered Haryana today, the official Twitter account of the Congress party shared pictures of senior leader Rahul Gandhi, boxer Vijender Singh, and a dog walking ahead of them.\r\nT… [+3652 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "IANS",
            "title": "For Indian techies, is it the end of the great American dream? - Economic Times",
            "description": "Nearly four in 10 previously laid off tech workers found jobs less than a month after they began searching, the survey found. However, 2023 is set to become the worst year for tech layoffs and there may not be jobs available for those on H1-B visa anymore. Se…",
            "url": "https://economictimes.indiatimes.com/nri/work/for-indian-techies-is-it-the-end-of-the-great-american-dream/articleshow/96809952.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-96810033,width-1070,height-580,imgsize-812316,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-01-07T06:51:00Z",
            "content": "As thousands of techies continue to lose jobs at Big Tech companies amid recession fears, most of them are finding it difficult to get jobs, as there is a freeze on new hiring at nearly every top fir… [+3212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Devdiscourse"
            },
            "author": "Devdiscourse News Desk",
            "title": "Five down, five to go: NASA's Perseverance rover just dropped off another sample tube on Mars | Science-Environment - Devdiscourse",
            "description": "Read more about Five down, five to go: NASA's Perseverance rover just dropped off another sample tube on Mars on Devdiscourse",
            "url": "https://www.devdiscourse.com/article/science-environment/2311486-five-down-five-to-go-nasas-perseverance-rover-just-dropped-off-another-sample-tube-on-mars",
            "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/07_01_2023_12_17_32_1706989.jfif?width=920&format=jpeg",
            "publishedAt": "2023-01-07T06:49:11Z",
            "content": "NASA's Perseverance has successfully dropped yet another sample tube on the Martian surface. This was the fifth of the 10 titanium sample tubes that will make up the backup depot at Three Forks, an a… [+1539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Srishti Choudhary",
            "title": "Joshimath Can No Longer Sustain Increasing Pressure, Warns Senior Geologist as Himalayan Town Sinks - News18",
            "description": "In an exclusive interview to News18, director of Dehradun-based Wadia Institute of Himalayan Geology, Dr Kalachand Sain, discusses why the geological foundation of Joshimath region has weakened and how it is collapsing under the pressure of unplanned growth",
            "url": "https://www.news18.com/news/india/joshimath-can-no-longer-sustain-increasing-pressure-warns-senior-geologist-as-himalayan-town-sinks-6778207.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2023/01/joshimath-167308402916x9.jpg",
            "publishedAt": "2023-01-07T06:19:00Z",
            "content": "Hundreds of houses in Uttarakhands Joshimath area are in the midst of collapse. The dangerous cracks in the walls of buildings and roads are widening, sending huge amounts of water gushing out. But t… [+4037 chars]"
        }

    ]

    constructor() {
        super();
        console.log("This is a consructor");
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    render() {
        return (
            <div className='w-3/4 m-auto'>
                <div className='text-center m-4 text-4xl font-medium font-newsHead'>
                    Today's Top News
                </div>
                <div className=''>
                    <div className='row grid grid-cols-3 gap-3'>
                        {this.state.articles.map((element) => {
                            return <div className='hover:scale-105 transition-all' key={element.url} >
                                <div>
                                    <NewsItem title={element.title.slice(0,80)} description={element.description.slice(0,90)} urlToImage={element.urlToImage} url={element.url} />
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
