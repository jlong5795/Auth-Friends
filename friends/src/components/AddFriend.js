import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';



const AddFriend = props => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        //Push
        props.history.push('/friends');
    };

    return (
        <div className='newfriend-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:
                <input
                    type='text'
                    name='name'
                    ref={register}
                />
                </label>
                <label>Age:
                <input
                    type='number'
                    name='age'
                    ref={register}
                />
                </label>
                <label>Email:
                <input
                    type='email'
                    name='email'
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

export default connect(mapStateToProps, {})(AddFriend);