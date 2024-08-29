import React from 'react'
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import LanguageSelector from './components/language-selector';
import './app.css';
function App2() {

    const { t, i18n } = useTranslation();

    
    return (
        <>
           
            <Trans
                i18nKey={"description.task1"}
                values={{
                    channel: "India",
                }}
                components={{
                    0: <strong />
                }}

            />
        </>
    )
}

export default App2





