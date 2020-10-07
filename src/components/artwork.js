import React from 'react'

/* Artwork Images */
import Img1 from '../../static/illustration/1.png'
import Img2 from '../../static/illustration/2.jpg'
import Img3 from '../../static/illustration/3.jpg'
import Img4 from '../../static/illustration/4.jpg'
import Img5 from '../../static/illustration/5.jpg'
import Img6 from '../../static/illustration/6.jpg'
import Img7 from '../../static/illustration/7.jpg';
import Img8 from '../../static/illustration/8.jpg';
import Img9 from '../../static/illustration/9.jpg';
import Img10 from '../../static/illustration/10.jpg';
import Img11 from '../../static/illustration/11.jpg';
import Img12 from '../../static/illustration/12.jpg';
import Img13 from '../../static/illustration/13.jpg';
import Img14 from '../../static/illustration/14.jpg';
import Img15 from '../../static/illustration/15.jpg';
import Img16 from '../../static/illustration/16.jpg';
import Img17 from '../../static/illustration/17.jpg';
import Img18 from '../../static/illustration/18.jpg';
import Img19 from '../../static/illustration/19.jpg';
import Img20 from '../../static/illustration/20.jpg';

const Artwork = () =>{
    
    const art = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20];

    return (
        <>
            <section className="artworks-section">
                <h1><a href="#">Illustrations</a></h1>
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
                <div className="art-row">
                
                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img7} />
                    </div>

                    <div className="art-columns">
                        <div className="two-columns">
                            <img 
                            alt={`artwork-img`} 
                            src={Img8} />
                            <img 
                            alt={`artwork-img`} 
                            src={Img9} />
                        </div>                
                        <img 
                        alt={`artwork-img`} 
                        src={Img10} />
                    </div>

                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img11} />
                        <img 
                        alt={`artwork-img`} 
                        src={Img12} />
                    </div>
                </div>
                <div className="art-row">
                
                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img13} />
                    </div>

                    <div className="art-columns">
                        <div className="two-columns">
                            <img 
                            alt={`artwork-img`} 
                            src={Img14} />
                            <img 
                            alt={`artwork-img`} 
                            src={Img15} />
                        </div>                
                        <img 
                        alt={`artwork-img`} 
                        src={Img16} />
                    </div>

                    <div className="art-columns">
                        <img 
                        alt={`artwork-img`} 
                        src={Img17} />
                        <img 
                        alt={`artwork-img`} 
                        src={Img18} />
                    </div>
                </div>
            </section>        
        </>
    )
}

export default Artwork