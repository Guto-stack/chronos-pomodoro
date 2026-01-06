import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon} from 'lucide-react'
import style from './style.module.css'
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';


export function Menu(){
    const [theme, setTheme ] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleThemeChange( event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault();

        setTheme(prevTheme => { 
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
         });

    
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
    <nav className={style.menu}>
        <a className={style.menuLink}href='#' aria-label='Ir para a Home' title='Home'>
            <HouseIcon />
        </a>
        <a className={style.menuLink}href='#' aria-label='Ver Histórico' title='Histórico'>
            <HistoryIcon />
        </a>
        <a className={style.menuLink}href='#' aria-label='Ir para configurações' title='Configurações'>
            <SettingsIcon />
        </a>
        <a className={style.menuLink}href='#' aria-label='Mudar Tema' title='Tema' onClick={handleThemeChange}>
            {nextThemeIcon[theme]}
        </a>
    </nav>
    );
}
