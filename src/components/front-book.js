import React from 'react'
import FrontBook from '../../static/books/main_book.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">Read, listen, and learn in various formats</span>

                            <h1>Deep Down the Rabbit Hole</h1>
                            <span>The World Is Not What You Think</span>
                            <p>
                                An extensively illustrated, 
                                thought-provoking blend of 
                                forbidden subjects and unexplained 
                                world mysteries, Deep Down the Rabbit Hole:
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