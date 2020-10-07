import React from 'react'

/* Artwork Images */
import Img1 from '../../static/illustration/1.png'
import Img2 from '../../static/illustration/2.jpg'
import Img3 from '../../static/illustration/3.jpg'
import Img4 from '../../static/illustration/4.jpg'
import Img5 from '../../static/illustration/5.jpg'
import Img6 from '../../static/illustration/6.jpg'

const Artwork = () =>{
    
    const art = [Img1, Img2, Img3, Img4, Img5, Img6];

    return (
        <>
            <section className="artworks-section">
                <h1><a href="/illustration">Artworks</a></h1>
                <div className="art-row">
                
                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img1} />
                    </div>

                    <div className="art-columns">
                        <div className="two-columns">
                            <img 
                            alt={`artwork-img`} 
                            src={Img2} />
                            <img 
                            alt={`artwork-img`} 
                            src={Img4} />
                        </div>                
                        <img 
                        alt={`artwork-img`} 
                        src={Img3} />
                    </div>

                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img6} />
                        <img 
                        alt={`artwork-img`} 
                        src={Img5} />
                    </div>
                </div>
            </section>        
        </>
    )
}

export default Artwork