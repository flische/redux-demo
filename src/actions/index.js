import types from './types';
import themes from '../themes';

const defaultTheme = 'light';

//
export const setTheme = (themeName = defaultTheme) => {
    // theme = 'light'
    let theme = themes[themeName];


    // below - this is just a fail-safe in case someone passes us an invalid theme name
    if (!theme) {
        theme = themes[defaultTheme];
        themeName = defaultTheme;
    }

    // localStorage.setItem('theme', themeName); // this is the same as below
    localStorage.theme = themeName;

    return {
        type: types.SET_THEME,  // 'set_theme'
        themeName: themeName,   // 'light'
        theme: theme        // theme object ---> light: {text: 'black-text',nav: 'deep-purple lighten-5',accent:                                                                'deep-purple lighten-4',main:'deep-purple lighten-5'}
    }
};

