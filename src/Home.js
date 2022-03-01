import { useState, useEffect } from "react";
import './Home.css';
import './assets/georgiaer.svg'
import {makeRequestCatalog, makeRequestInfo, makeRequestLanguages} from './DataFetching.js';
import Description from './Modal/Description';
import Languages from './Modal/Languages';
import {ReactComponent as WorldWideLogo} from './assets/Group 161ds.svg';
import {ReactComponent as DwonArrowLogo} from './assets/Path 639.svg';
import {ReactComponent as SnowflakeLogo} from './assets/Path 11998vc.svg';
import {ReactComponent as HotLogo} from './assets/Path 12003fd.svg';
import {ReactComponent as MeamaLogo} from './assets/Group 6.svg';
import {ReactComponent as MeamaBakground} from './assets/201201-Meama-Op.svg';

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
  const [language, setLanguage] = useState('ka')
  
  useEffect(() => {
    console.log(dataCatalog)
    console.log(language)
    setTimeout(() => {
      makeRequestCatalog({setDataCatalog}, `https://cms.meamacollect.ge/meama-collect/api/client/${language}`)
      makeRequestInfo({setDataInfo}, `https://cms.meamacollect.ge/meama-collect/api/client/${language}/contact-info`)
      makeRequestLanguages({setDataLanguages}, 'https://cms.meamacollect.ge/meama-collect/api/client/languages')
    }, 1000)
  }, [language])

  const handleClickSubCategory = (e) => {
    //cocktail
    if(e.target.value === "15"){
      setSubcategoryCocktailIndex(0)
    }
    if(e.target.name === "ცხელი" || e.target.name === "Hot"){
      setSubcategoryCocktailIndex(1)
    }
    if(e.target.name === "ცივი"  || e.target.name === "Cold"){
      setSubcategoryCocktailIndex(2)
    }
    //tea
    if(e.target.value === "12"){
      setSubcategoryTeaIndex(0)
    }
    if(e.target.name === "შავი ჩაი" || e.target.name === "Black tea"){
      setSubcategoryTeaIndex(1)
    }
    if(e.target.name === "მწვანე ჩაი" || e.target.name === "Green tea"){
      setSubcategoryTeaIndex(2)
    }
  }

  return (
    <div>
      {showDescription && product.name === productName &&
        <Description product={product} setShowDescription={setShowDescription} language={language}/>
      }
      {showLanguages && 
        <Languages setShowLanguages={setShowLanguages} dataLanguages={dataLanguages} setLanguage={setLanguage}/>
      }
      <header className="home-header-container">
        <MeamaBakground className="home-header-container-backgorund-img"/>
          <div className="home-header">
            <MeamaLogo />
            <div className="icons">
              <WorldWideLogo />
              {language === "ka" &&
                <span>ქა</span>
              }
              {language === "en" &&
                <span>en</span>
              }
              <DwonArrowLogo onClick={() => setShowLanguages(true)}/>
            </div>
          </div>
      </header>
      {dataCatalog.map((item, itemIndex) => (
        <div key={item.id} className={"item-container-" + itemIndex}>
          <h2>{item.name}</h2>
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
                {itemIndex === 1 && index === subcategoryCocktailIndex &&
                  <div className="subcategory">
                    {subCategory.products.map((product) => (
                      <div key={product.id} className="subcategory-product" style={{ backgroundColor: product.bgColor }}>
                        {product.type === "HOT" &&
                          <HotLogo className="subcategory-product-type-img"/>
                        }
                        {product.type === "COLD" &&
                          <SnowflakeLogo className="subcategory-product-type-img"/>
                        }
                        <div className="imgs">
                          <img src={product.mainPhoto} name={product.name} onClick={(e) => {setProduct(product); setShowDescription(true); setProductName(e.target.name)}} alt={product.name}></img>
                        </div>
                        <div className="subcategory-product-name">{product.name}</div>  
                        <span className="subcategory-product-price">{product.price}₾</span>                  
                      </div>
                    ))}  
                  </div>
                }
                {itemIndex === 2 && index === subcategoryTeaIndex &&
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
