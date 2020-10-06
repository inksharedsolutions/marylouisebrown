import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/dummy.png'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
        
                <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} />
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        <p className="italic-tag margin-off">Well done, good and faithful servant</p>
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                            Mary Louise Brown is an award-winning, unconventional thinker and 
                            researcher challenging entrenched views, with insights on the 
                            need to rethink and redesign society. He delves into ancient 
                            mysteries as well as the very nature of current reality.
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                read more
                            </Link>
                        </p>
                        
                        <p className="margin-off auth-name">
                            Mary Louise Brown
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default LowerMain 