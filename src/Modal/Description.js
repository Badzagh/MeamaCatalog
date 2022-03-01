import { useEffect, useState } from "react";
import './Description.css';
import {ReactComponent as WorldWideLogo} from '../assets/Group 161.svg';
import {ReactComponent as BackLogo} from '../assets/Group 11454.svg';
const Description = ({product, setShowDescription, language}) => {

    setTimeout(()=> {
        window.scrollTo(0,0);
    }, 100)

    const [imgIndex, setImgIndex] = useState(0)

    return (
        <div className="Description-container">
            <header className="Description-header">
                <BackLogo onClick={() => {setShowDescription(false)}}/>
                <div>
                    <WorldWideLogo />
                    {language === "ka" &&
                        <span>ქა</span>
                    }
                    {language === "en" &&
                        <span>en</span>
                    }
                </div>
            </header>
            <div className="Description-product">
                <h3 className="Description-product-name">{product.name}</h3>
                <div className="Description-big-img-container">
                    <div className="Description-big-img">
                        <img src={product.imgUrls[imgIndex]} alt={product.name}></img>
                    </div>
                </div> 
            </div>
            <div className="Description-product-specifications">
                <span className="Description-product-specifications-price">{product.price}₾</span>
                <span className="Description-product-specifications-name">{product.specifications[0].name}</span>
                <span>{product.specifications[0].value}</span>
                <div className="Description-product-specifications-imgs">
                    <div className="Description-product-specifications-img-container" onClick={() => {setImgIndex(0)}}>
                        <div>    
                            <img src={product.imgUrls[0]} id="0" alt={product.name}></img>
                        </div>
                    </div>
                    {product.imgUrls.length === 2 &&
                        <div className="Description-product-specifications-img-container" onClick={() => {setImgIndex(1)}}>
                            <div>    
                                <img src={product.imgUrls[1]} id="1" alt={product.name}></img>
                            </div>
                        </div>
                    }
                </div>
                <span className="Description-product-specifications-title">{product.title}</span>
                <div className="Description-product-specifications-text"
                    dangerouslySetInnerHTML={{__html: product.description}}
                />
            </div> 
        </div>
    )
}

export default Description;