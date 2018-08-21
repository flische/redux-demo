import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTheme } from '../actions';

class SetTheme extends Component{
    componentDidMount(){
        const theme = localStorage.getItem('theme');
        // const theme = localStorage.themeName;

        this.props.setTheme(theme);
        
    }
    render(){
        console.log('Theme:', this.props.theme);

        const nextTheme = this.props.theme === 'light' ? 'dark' : 'light';

        return <button onClick={ () => this.props.setTheme(nextTheme)} className="btn white indigo-text">{nextTheme} Theme</button>
    }
}

function mapStateToProps(state){
    console.log("State: ", state);
    return {
        theme: state.theme.themeName
    }
}

export default connect(mapStateToProps, {setTheme: setTheme} )(SetTheme);