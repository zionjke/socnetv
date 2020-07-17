import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginAuth} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder='Email'
                        name='email'
                        component={Input}
                        validate={[required]}/>
            </div>
            <div>
                <Field  placeholder='Password'
                        name='password'
                        component={Input}
                         validate={[required]}
                type='password'/>
            </div>
            <div>
                <Field type="checkbox"
                       name='rememberMe'
                       component={Input}/> Remember My
            </div>
            <div>
                <button>
                    Sign In
                </button>
            </div>
        </form>
    )
};



const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {

    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }

    const onSubmit = (formData) => {
        props.loginAuth(formData.email,
            formData.password,
            formData.rememberMe);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        message:state.auth.message
    }
};


export default connect(mapStateToProps,{loginAuth})(Login)