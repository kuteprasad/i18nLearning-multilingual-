import { changeLanguage } from 'i18next'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
    { code: 'en', lang: "English" },
    { code: 'ur', lang: "Urdu" },
    { code: 'mr', lang: "Marathi" }
]


const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (code) => { 
        i18n.changeLanguage(code);
    };

    // for changing LTR to RTL
    useEffect(() => {
        // console.log( i18n.dir());
        
      return () => {
        document.body.dir = i18n.dir();
      };
    }, [ i18n.language]);

    return (
        <>
            <div className='container'>
                {
                    languages.map((lng) => {
                        return (
                            <button className={lng.code == i18n.language ? "selected" : ""}
                                key={lng.code}
                                onClick={() => changeLanguage(lng.code)}>
                                {lng.lang}
                            </button>
                        );
                    })
                }
            </div>
        </>
    )
}

export default LanguageSelector
