import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'

const ATB = (props)=>{
	
	return (
		<>
		 	<Layout>
                 
		 		<Nav pathExt={props.path}/>
                 <Banner 
                 spanFirst={`About The`} 
                 contextHeading={`Author`}/>
                  
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    {/* <p>I Am amidst you now</p>
                                    <p>My miracles to perform</p>
                                    <p>I Am not dead</p>
                                    <p>I Am alive and I Am yours to behold</p> */}
                                </h4>
                                
                                <span className="ata-span-fx">
                                    {/* author quote */}
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I met my husband nineteen years ago in EMT school and we married five years later. I had many different jobs in the restaurant business in my life time. But the two jobs that I enjoy the most is writing and being a first lady. I have always had the dream of writing a book and helping people. I wrote this book because I wanted to pass on life lessons to children. Fantasy is wonderful but children need reality in their life too. I live in Pennsylvania with my husband and my two service dogs and my two cats. The book is based on my pets, and what they do around the house to get into mischief and mysteries.
                            </p><p>
                            My husband is a pastor and we have a small church in Philadelphia, Pennsylvania. Being a first lady is a job that is fulfilling and busy as writing a book. We do community service through the church by having a food pantry for the community. We give out food the 1st and 3rd Thursdays of each month. You don’t need anything to get the food it is free. I enjoy helping people out that is in need. That is what is most fulfilling in life and that is what I want to teach in my books. Even though that this is a children’s book, the adults enjoy the book just as much. 
                            </p><p>
                            What I want as an author, is that the children can take from this book, is life lessons that will help them understand that people are alike in many ways, that you can have many friends of different races and nationalities. That helping people that are in need is a wonderful thing it gives you a great feeling of fulfillment in your life.  You can have success in many ways in your life. Every job that you have in your life is important as well as you as a person are important too.    
                            </p><p>
                            There are two most important people in my life and that is God and my husband, because it was God who gave me the strength and direction and my husband gave me the support and the push to write this book. He believed in me enough and he encourage me to do this. So, the one life lesson that I want to say is that if you really want to do something do it. No matter what it takes do it because you will never know if you can do unless you try. 
                            </p>
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">M. L.  Brown</span>
                                </span>
                            </p>
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;