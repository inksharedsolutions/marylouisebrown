import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/main_book.png'

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
                                    title:`DEEP DOWN THE RABBIT HOLE`,
                                    spanFirst: `The World is Not What You Think`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        An extensively illustrated, thought-provoking blend of forbidden subjects and unexplained world mysteries, Deep Down the Rabbit Hole: Reality is Not What You Think, challenges established beliefs, views, norms and current structures on a journey unveiling the hidden mysteries of mankind: past, present and reality itself. Imagine:
                                    </p> 
                                    
                                    <p>
                                        * Prison planet earth - proof of human recycling after death and collective amnesia. Mysterious buildings popping up overnight, dead people turning out to be alive, half-human hybrids among us: these scenarios once confined to science fiction are now part of our reality.
                                    </p>

                                    <p>
                                        * One of the most important mysteries of all time solved. Rediscovered and unveiled: an ancient artifact capable of changing human history, providing limitless free energy, interstellar travel and physical longevity.
                                    </p>
                                    
                                    <p>
                                        This groundbreaking book deciphers cross-cultural symbols and meticulously analyses language to weave ancient global myths, stories and art into a matrix of interconnected mysteries replete with sagas of ancient atomic wars, interstellar travels, genetic engineering and even the use of artificial intelligence.
                                    </p>

                                    <p> 
                                        It reveals the truth behind our current state as pawns for parasitic elites, dispensable batteries for economies and mass consumers of unworthy products, ideologies, entertainment and prescribed dreams. The mind-blowing information and stunning conclusions will radically alter the way we view the world and ourselves.
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/deep-down-the-rabbit-hole-the-world-is-not-what-you-think/',
                                        barnes: 'https://www.barnesandnoble.com/w/deep-down-the-rabbit-hole-adin-kachisi/1126392436?ean=9781643455211',
                                        amazon :'https://www.amazon.com/Deep-Down-Rabbit-Hole-World-ebook/dp/B07SVJCVYQ/ref=sr_1_1?dchild=1&keywords=9781643455211&qid=1601364815&s=books&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Deep-Down-Rabbit-Hole-World/dp/1948654253/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1601364851&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/deep-down-the-rabbit-hole-adin-kachisi/1126392436?ean=9781948654258',
                                        booksamillion:'https://www.booksamillion.com/p/Deep-Down-Rabbit-Hole/Adin-Kachisi/9781948654258?id=8009965417365&_ga=2.150596287.884073673.1601364975-1770015116.1600996550',
                                    }
                                }} 
                            />
                            <BookInfo
                                data={{
                                    title:`DEEP DOWN THE RABBIT HOLE`,
                                    spanFirst: `The World is Not What You Think`,
                                    imgSrc: FrontBook,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                    <p>
                                        An extensively illustrated, thought-provoking blend of forbidden subjects and unexplained world mysteries, Deep Down the Rabbit Hole: Reality is Not What You Think, challenges established beliefs, views, norms and current structures on a journey unveiling the hidden mysteries of mankind: past, present and reality itself. Imagine:
                                    </p> 
                                    
                                    <p>
                                        * Prison planet earth - proof of human recycling after death and collective amnesia. Mysterious buildings popping up overnight, dead people turning out to be alive, half-human hybrids among us: these scenarios once confined to science fiction are now part of our reality.
                                    </p>

                                    <p>
                                        * One of the most important mysteries of all time solved. Rediscovered and unveiled: an ancient artifact capable of changing human history, providing limitless free energy, interstellar travel and physical longevity.
                                    </p>
                                    
                                    <p>
                                        This groundbreaking book deciphers cross-cultural symbols and meticulously analyses language to weave ancient global myths, stories and art into a matrix of interconnected mysteries replete with sagas of ancient atomic wars, interstellar travels, genetic engineering and even the use of artificial intelligence.
                                    </p>

                                    <p> 
                                        It reveals the truth behind our current state as pawns for parasitic elites, dispensable batteries for economies and mass consumers of unworthy products, ideologies, entertainment and prescribed dreams. The mind-blowing information and stunning conclusions will radically alter the way we view the world and ourselves.
                                    </p>
                                    `,

                                    ebooks:{
                                        stratton : 'https://www.stratton-press.com/books/deep-down-the-rabbit-hole-the-world-is-not-what-you-think/',
                                        barnes: 'https://www.barnesandnoble.com/w/deep-down-the-rabbit-hole-adin-kachisi/1126392436?ean=9781643455211',
                                        amazon :'https://www.amazon.com/Deep-Down-Rabbit-Hole-World-ebook/dp/B07SVJCVYQ/ref=sr_1_1?dchild=1&keywords=9781643455211&qid=1601364815&s=books&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Deep-Down-Rabbit-Hole-World/dp/1948654253/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1601364851&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/deep-down-the-rabbit-hole-adin-kachisi/1126392436?ean=9781948654258',
                                        booksamillion:'https://www.booksamillion.com/p/Deep-Down-Rabbit-Hole/Adin-Kachisi/9781948654258?id=8009965417365&_ga=2.150596287.884073673.1601364975-1770015116.1600996550',
                                    }
                                }} 
                            />
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