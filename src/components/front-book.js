import React from 'react'
import FrontBook from '../../static/books/book1.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">Read, listen, and learn in various formats</span>

                            <h1>Stormie's Adventures</h1>
                            <span>Stormie's new family</span>
                            <p>
                                This is a story about Stormie’s secrets that she hasn’t revealed to anyone and that leads to a mystery that changes her life forever. Her secrets get revealed one at a time. 
                            </p>

                            <Accordions/>
                        </div>

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook