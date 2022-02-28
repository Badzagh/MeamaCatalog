import { useEffect, useState } from "react";
import './Description.css';

const Description = ({product, setShowDescription}) => {

    setTimeout(()=> {
        window.scrollTo(0,0);
    }, 100)

    const [imgIndex, setImgIndex] = useState(0)

    return (
        <div className="Description-container">
            <header className="Description-header">
                <a onClick={() => {setShowDescription(false)}}><img src="https://cdn-icons.flaticon.com/png/512/3114/premium/3114883.png?token=exp=1646026219~hmac=32f4fbe835b928c53dfced5c70837586" alt="back"></img></a>
                <div>
                    <a><img src="https://cdn-icons.flaticon.com/png/512/2767/premium/2767210.png?token=exp=1646025806~hmac=017799f3df848944d965f8ddd91883e0" alt="worldwide"></img></a>
                    <span>en</span>
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
                <p>Lorem ipsum dollare</p> 
            </div> 
        </div>
    )
}

export default Description;