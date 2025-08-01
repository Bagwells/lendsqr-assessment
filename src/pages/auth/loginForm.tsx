import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

type loginProp = {
  email:string;
  password:string;
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const {isAuth, setIsAuth} = useAuth();
  const [login, setLogin] = useState<loginProp>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<loginProp>({ email: '', password: '' });
  const [info, setInfos] = useState({email:false,password:false});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = { email: '', password: '' };
    if (!emailRegex.test(login.email)) newErrors.email = 'Invalid email format';
    if (!passwordRegex.test(login.password)) newErrors.password = '';
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
        if (validate()) {
        setIsAuth(true);
        sessionStorage.setItem("authToken", JSON.stringify(isAuth))
        toast.success('Sign-In successful')
        navigate("/dashboard")
      } else {
        toast.info('Fill the fields, correctly')
      }
    } catch (err) {
      console.error('Sign In', err)
      toast.error('Sign-in failed, please try again')
    } finally {
      setIsSubmitting(false)
    }
    
  };

  return (
    <div className="flex flex-col w-full max-w-lg">
      <div className="space-y-1.5 lg:space-y-2.5 mb-[60px] text-center">
        <h1 className="text-bold text-10 title-color">Welcome!</h1>
        <p className="text-5 text-regular text-color">Enter details to login.</p>
      </div>
      <form className="w-full space-y-6" onSubmit={handleSubmit}>
        <div className='space-y-1'>
          <input
            type="email"
            name="email"
            value={login.email}
            onChange={handleChange}
            className="w-full h-[50px] p-4 Border rounded-[5px]"
            placeholder="Email"
            onFocus={()=> setInfos({...info, email:true})}
            onBlur={()=> setInfos({...info, email:false})}
          />
          {info.email && <p className="text-color text-2">Enter a valid email address.</p>}
          {errors.email && <p className="danger text-2">{errors.email}</p>}
        </div>
        <div className="pos-relative h-fit space-y-1">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={login.password}
            onChange={handleChange}
            className="w-full h-[50px] p-4 Border rounded-[5px]"
            placeholder="Password"
            onFocus={()=> setInfos({...info, password:true})}
            onBlur={()=> setInfos({...info, password:false})}
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="pos-absolute cursor-pointer text uppercase primary text-3 top-5 right-4 text-semibold"
          >
            {showPassword ? 'Hide' : 'Show'}
          </div>
          {info.password && (
            <p className="text-2 text-color">Password should be at least 8 characters, contain uppercase, lowercase, number, and special character</p>
          )}
          {errors.password && <p className="danger text-2">{errors.password}</p>}
        </div>
        <Link to="#" className="primary text-semibold text-3">
          FORGOT PASSWORD?
        </Link>
        <button type="submit" 
          disabled={login?.password.length < 8 || login?.email.length == 0 || isSubmitting}
          className="w-full flex items-center justify-center rounded-lg bg-primary h-12 text-white mt-[30px] disabled:opacity-60 disabled:cursor-not-allowed">
          {isSubmitting ? <span>Signing In... <div className='w-4 h-4 border-3 rounded-full border-white animate-spin'/> class</span> 
            :
            'LOG IN'
          }
        </button>
      </form>
    </div>
  );
};
