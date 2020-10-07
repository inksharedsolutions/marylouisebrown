import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/book1.png'
import SecondBook from '../../static/books/book2.png'

const ATB = (props)=>{


    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'mary-louise-brown',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                 />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Stormie's Adventures`,
                                    spanFirst: `Stormie's New Family`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        This is a story about Stormie’s secrets that she hasn’t revealed to anyone and that leads to a mystery that changes her life forever. Her secrets get revealed one at a time. Also, in this story, it also teaches life’s lessons.
                                    </p> 
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/',
                                        barnes: 'https://www.barnesandnoble.com/w/stormies-adventures-m-l-brown/1135622810?ean=9781643458090',
                                        amazon :'https://www.amazon.com/Stormies-Adventures-New-Family-ebook/dp/B082VLPKRB/ref=sr_1_1?keywords=9781643458090&qid=1576687427&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Stormies-Adventures-New-Family/dp/1643457365/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576687427&sr=8-1',
                                        barnes:'https://www.booksamillion.com/p/Stormies-Adventures/M-L-Brown/9781643457369?id=8009965417365&_ga=2.242091074.1904462625.1602048182-1770015116.1600996550',
                                        booksamillion:'https://www.booksamillion.com/p/Deep-Down-Rabbit-Hole/Adin-Kachisi/9781948654258?id=8009965417365&_ga=2.150596287.884073673.1601364975-1770015116.1600996550',
                                    }
                                }} 
                            />
                            <div className="columns book-container-ft">
                                <div className="column">
                                    <div className="bookImgContainer">
                                        <img alt="main-book" src={SecondBook} />
                                    </div>
                                </div>

                                <div className="column">
                                    <section className="contentBook">

                                        <h1>Stormie's Adventures</h1>
                                        <p className="sub-heading">
                                            Stormie's New Mysteries
                                        </p>
                                        
                                        <span></span>

                            
                                        <div className="content-body" 
                                            >Comming Soon...</div>
                                    </section>


                                    <section className="fullSection">
                                        <nav className="booklinkBlocks">
                                            <span>Ebooks :</span>
                                            <span>Soon...</span>
                                        </nav>

                                        <nav className="booklinkBlocks">
                                            <span>Purchase Paperback :</span>
                                            <span>Soon...</span>
                                        </nav>
                                    </section>


                                </div>	
                            </div>
                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;