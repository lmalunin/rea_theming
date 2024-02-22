import React, { useContext, useEffect, useState, useTransition } from 'react';
import { Button } from 'primereact/button';

import styles from './App.module.scss';
import { ThemeSelectorContext } from './themes/ThemeProvider';
import { setCSSVariables } from './themes/set-css-variables';
import { themes } from './themes/themes';
import { Calendar } from 'primereact/calendar';
import { PrimeReactContext } from 'primereact/api';
import { Trans, useTranslation } from 'react-i18next';
import {
  locale,
  addLocale,
  updateLocaleOption,
  updateLocaleOptions,
  localeOption,
  localeOptions
} from 'primereact/api';

function App() {
  
  const { themeName, toggleTheme } = useContext(ThemeSelectorContext);
  
  useEffect(() => {
    setCSSVariables(themes.light)
  }, [])
  
  function setDate(value: any) {
    console.log(value)
  }
  
  const onToggleTheme = () => {
    toggleTheme();
  }
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    locale(language);
  }
  
  addLocale('ru',
      {
        firstDayOfWeek: 1,
        dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesShort: ['Воск', 'Пон', 'Вт', 'Ср', 'Четв', 'Пят', 'Суб'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
      });
  
  return (
      <div className="App">
        {/*Translate*/}
        <Trans i18nKey="title"></Trans>
        <br/>
        <Trans i18nKey="description.part1"></Trans>
        <h1>{t('Welcome to React')}</h1>
        <br/>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ru')}>RU</button>
        <br/>
        <div>{t('description.part2')}</div>
        <br/>
        <hr/>
        
        
        {/*Theme*/}
        <div className={styles.title}>{themeName}</div>
        <br/>
        <Button className={styles.title} label={t('submit')} icon="pi pi-check" iconPos="right"/>
        <br/>
        <br/>
        <Calendar value={new Date()} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy"
                  pt={{
                    input: {
                      root: { className: styles.title }
                    },
                    container: {
                      root: { className: styles.title }
                    }
                  }}
        />
        <br/>
        <br/>
        
        <button onClick={onToggleTheme}>Toggle theme</button>
      </div>
  );
}

export default App;
