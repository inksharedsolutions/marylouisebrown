import React from 'react';
import { MDBGallery, MDBGalleryList} from 'mdbreact';
/* Artwork Images */
import Img1 from '../../static/illustration/1.png';
import Img2 from '../../static/illustration/2.jpg';
import Img3 from '../../static/illustration/3.jpg';
import Img4 from '../../static/illustration/4.jpg';
import Img5 from '../../static/illustration/5.jpg';
import Img6 from '../../static/illustration/6.jpg';
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
import Img21 from '../../static/illustration/21.jpg';
import Img22 from '../../static/illustration/22.jpg';
import Img23 from '../../static/illustration/23.jpg';
import Img24 from '../../static/illustration/24.jpg';
import Img25 from '../../static/illustration/25.jpg';
import Img26 from '../../static/illustration/26.jpg';
import Img27 from '../../static/illustration/27.jpg';
import Img28 from '../../static/illustration/28.jpg';
import Img29 from '../../static/illustration/29.jpg';
import Img30 from '../../static/illustration/30.jpg';
import Img31 from '../../static/illustration/31.jpg';
import Img32 from '../../static/illustration/32.jpg';
import Img33 from '../../static/illustration/33.jpg';
import Img34 from '../../static/illustration/34.jpg';
import Img35 from '../../static/illustration/35.jpg';
import Img36 from '../../static/illustration/36.jpg';
import Img37 from '../../static/illustration/37.jpg';
import Img38 from '../../static/illustration/38.jpg';

const Illustration =()=>{
  const dataImg = [
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 2,
        title: 'image'
    },
    {
        img: '../../static/illustration/1.png',
        cols: 1,
        title: 'image'
    },
];

  return (
    <MDBGallery cols={4}>
      {dataImg.map(({ cols, img, title }, i) => {
        return (
          <MDBGalleryList
            key={i}
            cols={cols || 1}
            titleClasses='rounded'
            styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
          >
            <img src={img} alt={title} />
          </MDBGalleryList>
        );
      })}
    </MDBGallery>
  );
}

export default Illustration;;