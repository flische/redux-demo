import types from '../actions/types';

const DEFAULT_STATE = {
    themeName: '',
    theme: {}
};

// the action creator returns the below action to reducer //
// action!
// {
//       type: types.SET_THEME, // 'set_theme'
//       themeName: themeName, // 'light'
//       theme: theme // theme object
// }



export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SET_THEME:
            return { themeName: action.themeName, theme: action.theme };
        // we have to be careful what we return state above b/c this will override the previous state! //
        // this is why we use "...state" to pass in the old data that was not changed //
        // example: return { ...state, themeName: action.themeName, theme: action.theme };
        default:
            return state;
    }
}
