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
                        <p className="italic-tag margin-off"></p>
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                            I met my husband nineteen years ago in EMT school and we married five years later. I had many different jobs in the restaurant business in my life time. But the two jobs that I enjoy the most is writing and being a first lady.
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                read more
                            </Link>
                        </p>
                        
                        <p className="margin-off auth-name">
                            M. L. Brown
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