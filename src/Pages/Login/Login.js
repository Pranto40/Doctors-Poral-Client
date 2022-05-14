import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    let loginError;
    if (error || googleError) {
        loginError= <span className='text-red-500 block mb-2'>{error?.message || googleError?.message}</span>
    }
    
    if (loading || googleLoading) {
        return <Loading />
    }
    
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input 
                    type="email" 
                    placeholder="Your Email" 
                    class="input input-bordered w-full max-w-xs" 
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is Required"
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Provide a valid Email'
                        }
                      })}
                    />
                    <label class="label">
                    {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                    </div>
                  <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input 
                    type="password" 
                    placeholder="password" 
                    class="input input-bordered w-full max-w-xs" 
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is Required"
                        },
                        minLength: {
                          value: 6,
                          message: 'must be 6 characters or longer'
                        }
                      })}
                    />
                    <label class="label">
                    {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                    </div>
                    {loginError}
                    <input className='btn w-full text-white' value="Login" type="submit" />
                </form>
                    <p>New to Doctors Portal <Link className='text-primary' to="/signup">Creacte New Account</Link></p>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Contiue With Google</button>
            </div>
        </div>
        </div>
    );
};

export default Login;