import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
import './accordion.scss'
const { Panel } = Collapse
const { Option } = Select



const text = `
  Reality is Not What You Think, challenges established beliefs, 
  views, norms and current structures on a journey unveiling the 
  hidden mysteries of mankind: past, present and reality itself.
`;



class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

   iconChanger = ()=>{
    
    console.log('clicks')

   }


   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                onClick={event => {
                    event.stopPropagation();
                }}
            />
            )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
}

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel
            className="panel" 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
          className="panel"
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton : 'https://www.stratton-press.com/books/deep-down-the-rabbit-hole-the-world-is-not-what-you-think/',
                          barnes: 'https://www.barnesandnoble.com/w/deep-down-the-rabbit-hole-adin-kachisi/1126392436?ean=9781643455211',
                          amazon :'https://www.amazon.com/Deep-Down-Rabbit-Hole-World-ebook/dp/B07SVJCVYQ/ref=sr_1_1?dchild=1&keywords=9781643455211&qid=1601364815&s=books&sr=1-1', 
                        },
                        reviews:{},
                        isNonfront:false,
                        paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
          className="panel"
            header="Purschase PaperBack" 
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                        data={{
                            ebooks:{},
                            isNonfront:false,
                            reviews:{},
                            paperback:{
                              amazon:'https://www.amazon.com/Deep-Down-Rabbit-Hole-World/dp/1948654253/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1601364851&sr=1-1',
                              barnes:'https://www.barnesandnoble.com/w/deep-down-the-rabbit-hole-adin-kachisi/1126392436?ean=9781948654258',
                              booksamillion:'https://www.booksamillion.com/p/Deep-Down-Rabbit-Hole/Adin-Kachisi/9781948654258?id=8009965417365&_ga=2.150596287.884073673.1601364975-1770015116.1600996550',
                          }
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions