import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/dummy.png'

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
                                Mary Louise Brown is an award-winning, unconventional 
                                thinker and researcher challenging entrenched views, 
                                with insights on the need to rethink and redesign society. 
                                He delves into ancient mysteries as well as the very nature 
                                of current reality. His subjects of interest include unknown 
                                and suppressed ancient history, myths, art and symbols, unexplained 
                                high strangeness and quantum reality. He combines fringe 
                                research and creative analysis to unveil the mysteries 
                                underneath the deceptively mundane events and unexamined cultural assumptions.
                            </p>

                            <p>              
                                Residing in New York, he holds an M.A. in Urban Planning 
                                from the University of Hertfordshire and a Graduate Diploma 
                                in Interdisciplinary studies from UWA. His broad experience 
                                also includes arts-humanities and built-environment, allowing 
                                him interdisciplinary analysis on various subjects.
                            </p>
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author |  Writer </span>
                                    <span className="ata-name">Mary Louise Brown</span>
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