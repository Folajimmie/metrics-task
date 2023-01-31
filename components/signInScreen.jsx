import Link from 'next/link';
import Image from "next/image";
import { Input } from './inputField';
import Logo from "../assets/logo.png";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { DefaultButton } from './button';
import { getApiResponseErrorMessage } from '../utils/objects';
import { useMutation } from '@tanstack/react-query';
import { setAuthToken, setUser } from '../config/axios';
import { signin } from '../services/api/queries/authentication';
import { toast } from 'react-toastify';





const SignIn = () => {
    const router = useRouter();

    const schema = yup.object().shape({
        email: yup.string().email().required('Input a valid email address'),
        password: yup.string().min(6).required()
      });

      const {
        register,
        handleSubmit,
        formState: { errors, ...others },
        getValues
      } = useForm({
        resolver: yupResolver(schema)
      });

      const {
        data,
        mutate: mutateSignin,
        isLoading
      } = useMutation(signin, {
        mutationKey: 'signin',
        onSuccess: (data) => onSigninSuccess(data),
        onError: (error) => onSigninError(error)
      });

      const onSigninSuccess = (data) => {
        const { email } = getValues();
        const { accessToken } = data.data;
        setAuthToken(accessToken);
        setUser(email);
        router.push('/global');
      };
 
      
      const onSigninError = (error) => {
        const errorMessage = getApiResponseErrorMessage(error);
        toast.error(errorMessage);
      };

      const onSubmit = (data) => {
        mutateSignin(data);
      };

    return ( 
        <div className="h-screen p-[1.25rem]">
            <div className='flex justify-center items-center'>
                <Image src={Logo}  alt='Onlypass Logo'/>
            </div>
            <div className='flex justify-center items-center h-3/4'>
                <form name="userInfo" noValidate={true} onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-heading text-whiteText text-center mt-[7.4rem] mb-[2.8rem]'>Admin Sign in</h2>
                    <div className='flex flex-col gap-[1.43rem] mb-2'>
                        <Input
                            inputProps={{
                                type: 'email',
                                placeholder: 'Email Address',
                                name: 'email',
                                ...register('email')
                            }}
                            error={errors.email?.message}
                        />
                       
                       <Input
                        inputProps={{
                            type: 'password',
                            placeholder: 'Password',
                            name: 'password',
                            ...register('password')
                          }}
                          error={errors.password?.message}
                       />
                    </div>
                        <DefaultButton className="!mt-[1.49rem]" disabled={Object.keys(errors).length > 0}>
                            Sign in
                        </DefaultButton>

                        <Link href="/passwordReset">
                            <p className="text-caption text-whiteText cursor-pointer mt-[2.1rem]">Forgot password?</p>
                        </Link>
                </form>
                
            </div>
        </div>
     );
}
 
export default SignIn;