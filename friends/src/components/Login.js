import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../actions';


const Login = props => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        props.login(data);
        props.history.push('/friends');
    };

    return (
        <div className='loging-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username:
                <input
                    type='text'
                    name='username'
                    ref={register}
                />
                </label>
                <label>Password:
                <input
                    type='password'
                    name='password'
                    ref={register}
                />
                </label>
                <input
                    type='submit'
                />
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, {login})(Login);