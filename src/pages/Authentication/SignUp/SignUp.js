import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase.init';


const SignUp = () => {
    // const { register, handleSubmit } = useForm();

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword (auth);

    // const onSubmit = async (data) => {
    //     await createUserWithEmailAndPassword (Object.values(data));
    //     console.log(createUserWithEmailAndPassword);
    // };

    const {
        handleSubmit,
        formState: { errors },
        trigger,
        register,
        watch
        } = useForm();
    

        async function onhandleSubmit(data) {
            //console.log(data)
               try {
               await createUserWithEmailAndPassword(
               auth, data.email, data.password, data.name)
               alert ("User Created Successfully")
               } catch (error) {
               console.log(error)
               alert ("User created failed")
               alert(error);
             }
           }
    return (
        <div>
                <form onSubmit={handleSubmit(onhandleSubmit)}>
                    <h5>Create an account</h5>
                    <div>
                        <div>
                        <label>Your email address</label>
                        <input
                            id="email"
                            name="email"
                            type= 'email'
                            required={true}
                            {...register("email", {
                            required: "Email is Required!!!" ,
                            pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                            }})}
                            error={Boolean(errors.email)}
                            onKeyUp={() => {trigger("email")}}
                        ></input>
                        {errors.email && (
                        <small className="text-danger">{errors.email.message}</small>
                        )}
                        </div>
                    <div>
                        <label>Your password</label>
                        <input
                        name='password'
                        id="password"
                        type= 'password'
                        autoComplete='off'
                        className={`form-control ${errors.password && "invalid"}`}
                        required={true}
                        {...register("password", {
                        required: "You must specify a password",
                        pattern: {
                        value: '^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){    1,})(?!.*\s).{8,}$',
                        message: "Password should contain at least one number and one    special character"
                        },
                        minLength: {
                        value: 8,
                        message: "Password must be more than 8 characters"
                        },
                        maxLength: {
                        value: 20,
                        message: "Password must be less than 20 characters"
                        },
                        })}
                        onKeyUp={() => {trigger("password")}}
                        error={Boolean(errors.password)}
                        ></input>
                        {errors.password && (
                        <small className="text-danger">{errors.password.message}</small>
                        )}
                    </div>
                    <div>
                        <label>Confirm your password</label>
                        <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type='password'
                        {...register( 'confirmPassword', {
                        validate: value =>
                        value === watch("password", "") || "The passwords do not match"
                        })}
                        autoComplete='off'
                        onPaste={(e) =>{
                        e.preventDefault();
                        return false
                        }}
                        error={Boolean(errors.confirmPassword)}
                        className={`form-control ${errors.confirmPassword && "invalid"}`}
                        required={true}
                        onKeyUp={() => {trigger("confirmPassowrd")}}
                        />
                        {errors.confirmPassword && (
                        <small className="text-danger">{errors.confirmPassword.message}    </small>
                        )}
                    </div>
                    <div>
                        <label>Your full name</label>
                        <input
                        name='name'
                        type="name"
                        className={`form-control ${errors.name && "invalid"}`}
                        required={true}
                        defaultValue=""
                        {...register("name", { required: "Fullname is Required!!!" })}
                        onKeyUp={() => {trigger("name")}}/>
                        {errors.name && (
                        <small className="text-danger">Fullname is Required!!!</small>
                        )}
                        </div>
                        <div>
                        <button>Create an account</button>
                        </div>
                    </div>
                    </form>

        </div>
    );
};

export default SignUp;