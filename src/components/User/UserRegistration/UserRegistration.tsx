import React, {FC, useState} from 'react';
import {useForm} from 'react-hook-form';
import {IUser} from "../../../interfaces";
import {authService} from "../../../services/auth.service";

const UserRegistration: FC = () => {
    const {register, handleSubmit, reset} = useForm()
    const [state, setState] = useState({})
    const submit: any = async (data: IUser) => {
        let response = await authService.registration(data);
        setState(response)
    }
    console.log(state)
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className={'registration'}>
                    <div><input type="text" placeholder={'name'}{...register('name')}/></div>
                    <div><input type="text" placeholder={'email'}{...register('email')}/></div>
                    <div><input type="number" placeholder={'age'}{...register('age')}/></div>
                    <div><input type="text" placeholder={'city'}{...register('city')}/></div>
                    <div><input type="text" placeholder={'password'}{...register('password')}/></div>
                    <div>
                        {/*<Link to={'/user/id'}>*/}
                        <button>Registration</button>
                        {/*</Link>*/}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserRegistration;