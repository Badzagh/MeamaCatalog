import { useState } from "react";
import './Languages.css';

const Languages = ({setShowLanguages, dataLanguages}) => {

    setTimeout(()=> {
        window.scrollTo(0,0);
    }, 100)

    return (
        <div className="languages-section">
            <div className="languages-shadow"></div>
            <div className="languages-container">
                <h3>ენა</h3>
                <div>
                    {dataLanguages.map((dataLanguage) => (
                        <div key={dataLanguage.id} className="language">
                            <div>
                                <img src={dataLanguage.imageUrl} alt="country flag"></img>
                                <label>{dataLanguage.name}</label>
                            </div>
                            <input type="radio" value={dataLanguage.code} onClick={() => setShowLanguages(false)}></input>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Languages