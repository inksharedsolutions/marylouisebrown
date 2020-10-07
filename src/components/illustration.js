import React from 'react'
import FrontBook from '../../static/books/main_book.png'

const Illustration = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        

                        <div className="content-wraps">

                            <span className="italic-tag">Illustrations</span>

                            <h1>Illustrations</h1>
                            <span>Illustrations</span>
                            <p>
                                Illustration
                            </p>
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

export default Illustration