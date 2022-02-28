import { useState, useEffect } from "react";
import './Home.css';
import './assets/georgiaer.svg'
import {makeRequestCatalog, makeRequestInfo, makeRequestLanguages} from './DataFetching.js';
import Description from './Modal/Description';
import Languages from './Modal/Languages';
import {ReactComponent as WorldWideLogo} from './assets/Group 161ds.svg';


const Home = () => {

  const [dataCatalog, setDataCatalog] = useState([])
  const [dataInfo, setDataInfo] = useState([])
  const [dataLanguages, setDataLanguages] = useState([])
  //
  const [subcategoryCocktailIndex, setSubcategoryCocktailIndex] = useState(0)
  const [subcategoryTeaIndex, setSubcategoryTeaIndex] = useState(0)
  //
  const [showDescription, setShowDescription] = useState(false)
  const [showLanguages, setShowLanguages] = useState(false)
  //
  const [productName, setProductName] = useState("")
  const [product, setProduct] = useState([])
  
  useEffect(() => {
    setTimeout(() => {
      makeRequestCatalog({setDataCatalog})
      makeRequestInfo({setDataInfo})
      makeRequestLanguages({setDataLanguages})
    }, 1000)
  }, [])

  const handleClickSubCategory = (e) => {
    //cocktail
    if(e.target.value === "15"){
      setSubcategoryCocktailIndex(0)
    }
    if(e.target.name === "ცხელი"){
      setSubcategoryCocktailIndex(1)
    }
    if(e.target.name === "ცივი"){
      setSubcategoryCocktailIndex(2)
    }
    //tea
    if(e.target.value === "12"){
      setSubcategoryTeaIndex(0)
    }
    if(e.target.name === "შავი ჩაი"){
      setSubcategoryTeaIndex(1)
    }
    if(e.target.name === "მწვანე ჩაი"){
      setSubcategoryTeaIndex(2)
    }
  }

  return (
    <div>
      {showDescription && product.name === productName &&
        <Description product={product} setShowDescription={setShowDescription}/>
      }
      {showLanguages && 
        <Languages setShowLanguages={setShowLanguages} dataLanguages={dataLanguages}/>
      }
      <header className="home-header-container">
        <div className="home-header">
          <a><img src="https://meama.ge/assets/img/logo-dark-small.svg" alt="logo"></img></a>
          <div className="icons">
            <WorldWideLogo />
            <span>ქა</span>
            <a><img className="downArrow" src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="down arrow" onClick={() => setShowLanguages(true)}></img></a>
          </div>
        </div>
      </header>
      {dataCatalog.map((item, itemIndex) => (
        <div key={item.id} className={"item-container-" + itemIndex}>
          <h3>{item.name}</h3>
          <div className={"product-container-" + itemIndex}>
            {item.products.map((product) => (
              <div key={product.id} className={"product-" + itemIndex} style={{ backgroundColor: product.bgColor }}>
                <div className="imgs">
                  <img src={product.mainPhoto} name={product.name} onClick={(e) => {setProduct(product); setShowDescription(true); setProductName(e.target.name)}} alt={product.name}></img>
                </div>
                <div className="product-name">{product.name}</div>
                <span className={"product-price-" + itemIndex}>{product.price}₾</span>
              </div>
            ))}
           {item.subCategories.map((subCategory, index) => (
              <div key={subCategory.id} className="subcategory-container">
                <button className="button" onClick={handleClickSubCategory} name={subCategory.name} value={subCategory.parentCategoryId}>{subCategory.name}</button>
                {item.name === "მეამას კოქტეილები" && index === subcategoryCocktailIndex &&
                  <div className="subcategory">
                    {subCategory.products.map((product) => (
                      <div key={product.id} className="subcategory-product" style={{ backgroundColor: product.bgColor }}>
                        <div className="imgs">
                          <img src={product.mainPhoto} name={product.name} onClick={(e) => {setProduct(product); setShowDescription(true); setProductName(e.target.name)}} alt={product.name}></img>
                        </div>
                        <div className="subcategory-product-name">{product.name}</div>  
                        <span className="subcategory-product-price">{product.price}₾</span>                  
                      </div>
                    ))}  
                  </div>
                }
                {item.name === "ჩაი" && index === subcategoryTeaIndex &&
                  <div className="subcategory">
                    {subCategory.products.map((product) => (
                      <div key={product.id} className="subcategory-product" style={{ backgroundColor: product.bgColor }}>
                      <div className="imgs">  
                        <img src={product.imgUrls[1]} name={product.name} onClick={(e) => {setProduct(product); setShowDescription(true); setProductName(e.target.name)}} alt={product.name}></img>
                      </div>  
                        <div className="subcategory-product-name">{product.name}</div> 
                        <span className="subcategory-product-price">{product.price}₾</span>                    
                      </div>
                    ))}  
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
      ))}
      <footer>
        <nav className="Info">
          <a className="Info-name">{dataInfo.name}</a>
          <a className="Info-value">{dataInfo.value}</a>
        </nav>
        <nav className="socialLinks">
          {dataInfo.socialLinks?.map((socialLink, index) => (
            <div key={index}>
              <a href={socialLink.link}><img src={socialLink.imageUrl} alt="social link"></img></a>
            </div>
          ))}
        </nav>
      </footer>
    </div>
  );
}


export default Home;
