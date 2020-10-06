import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/Stormie.jpg'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="banner-text">
                                <span className="first-title">Deep Down the</span>
                                <h1>
                                    <span>R</span>
                                    <span>A</span>
                                    <span>B</span>
                                    <span>B</span>
                                    <span>I</span>
                                    <span>T </span>
                                    <span>H</span>
                                    <span>O</span>
                                    <span>L</span>
                                    <span>E</span>
                                </h1>
                                <p>The World is not what you Think</p>
                            </div>
                            {/* <img src={ImgBanner}/> */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;