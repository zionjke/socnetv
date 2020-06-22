import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from 'axios'
import {setAuthUserData} from "../../redux/auth-reducer";
import {api} from "../../dal/api";



class HeaderContainer extends React.Component {

    componentDidMount() {
        api.auth()
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id,email,login} = response.data.data;
                    this.props.setAuthUserData(id,email,login)
                }
            })
    }

    render() {
       return (
           <Header {...this.props}/>
       );
   }
};

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
};


export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)