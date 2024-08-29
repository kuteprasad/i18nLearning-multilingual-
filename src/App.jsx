import React from 'react'
import {useTranslation} from 'react-i18next';
import { Trans } from 'react-i18next';
import LanguageSelector from './components/language-selector';
import './app.css';
import App2 from './App2';

function App() {
  
  const {t, i18n} = useTranslation();

  const {tast1, task2} = t('description');
  // console.log(des);
  
  // const {task1, task2} = t("description", {
  //   channel: "roadside",
  // });

  return (
    <>
       <LanguageSelector /> 
      <h1>{t("greeting")}</h1>
      {/* <p>{task1}</p> */}
      <p>{task2}</p>
      {/* <Trans >Welcome to <strong>React</strong></Trans> */}
      <br /><br />
      <Trans
                i18nKey="description.task1"
                values={{
                    channel: "India",
                }}
                components={[<b key="0" />]}
                // components={{
                //     0: <h1 />
                // }}

            />
      {/* <App2 /> */}
    </>
  )
}

export default App





