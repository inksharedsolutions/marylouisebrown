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
                            I am married and live in Pennsylvania. I have two cats and one service dog that keep me busy. I have had pets my entire life. I had belonged to the Cat Fancier Association and that is how I got involved with showing cats as a hobby. During that time, I learned many things about cats. 
                            
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