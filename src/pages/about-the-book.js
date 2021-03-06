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
	  shortname: 'm-l-brown',
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
                                        stratton : 'https://www.stratton-press.com/books/stormies-adventures-stormies-new-family/',
                                        barnes: 'https://www.barnesandnoble.com/w/stormies-adventures-m-l-brown/1135622810?ean=9781643458090',
                                        amazon :'https://www.amazon.com/Stormies-Adventures-New-Family-ebook/dp/B082VLPKRB/ref=sr_1_1?keywords=9781643458090&qid=1576687427&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Stormies-Adventures-New-Family/dp/1643457365/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1576687427&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/stormies-adventures-m-l-brown/1135622810?ean=9781643457369',
                                        booksamillion:'https://www.booksamillion.com/p/Stormies-Adventures/M-L-Brown/9781643457369?id=8009965417365&_ga=2.194710893.1905326297.1602216593-1770015116.1600996550',
                                    }
                                }} 
                            />
                            <BookInfo
                                data={{
                                    title:`Stormie's Adventures`,
                                    spanFirst: `Stormie's New Family`,
                                    imgSrc: SecondBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        This is a story about Stormie's secrets that she hasn't revealed to anyone and that leads to a mystery that changes her life forever. Her secrets get revealed one at a time. Also, In this story it also teaches life's lessons.
                                    </p> 
                                    `,

                                    ebooks:{
                                        stratton : '',
                                        barnes: 'https://www.barnesandnoble.com/w/stormies-adventures-ml-brown/1121392646?ean=9781648951480',
                                        amazon :'https://www.amazon.com/Stormies-Adventures-M-L-Brown-ebook/dp/B08FNZMBGF/ref=sr_1_1?dchild=1&keywords=9781648951480&qid=1617990552&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Stormies-Adventures-M-L-Brown/dp/1643459015/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1602271177&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/stormies-adventures-ml-brown/1121392646?ean=9781643459011',
                                        booksamillion:'https://www.booksamillion.com/p/Stormies-Adventures/M-L-Brown/9781643459011?id=8179891524610',
                                    }
                                }} 
                            />
                            {/* <div className="columns book-container-ft">
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
                                            >
                                                This is a story about Stormie's secrets that she hasn't revealed to anyone and that leads to a mystery that changes her life forever. her secrets get revealed one at a time. Also, In this story it also reaches life's lessons.
                                            </div>
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
                            </div> */}
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