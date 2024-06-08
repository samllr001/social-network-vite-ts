
import AppButton from "../../components/UI/AppButton/AppButton";
import AppLink from "../../components/UI/AppLink/AppLink";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppRegistration from "../../components/UI/AppRegistration/AppRegistration"
import "./LoginPage.scss";
import { SCLoginPage } from "./LoginPage.style";
import { Controller } from "react-hook-form";
import {useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginUserMutation } from "../../store/Api/authApi";
import { useEffect } from "react";




export const LoginPage = () => {
  const [loginUser, {data:userData}]= useLoginUserMutation()

  const loginFormSchema = yup.object({
    useremail: yup
    .string()
    .email()
    .required("Обязательное поле!"),
    userpassword: yup
    .string()
    .min(4,"Пароль должен содержать как минимум 4 символа")
    .required("Обязательное поле!")
  })
  
  const navigate = useNavigate()

  interface ILoginForm {
    useremail: string,
    userpassword: string
  }

  const onLoginSubmit = (data: ILoginForm) => {
    loginUser({email: data.useremail, password: data.userpassword})
    console.log(data);
    
  }

  const {
    control,
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    defaultValues: {
      useremail:"",
      userpassword:"",
    },
    resolver: yupResolver(loginFormSchema),
  });

  useEffect(()=>{
    if (userData?.user_id){
      navigate("/profile-page")
    }
    console.log(userData);

  },[userData,navigate])
  
  return (
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <Controller
       control={control} 
       name="useremail" 
       render={({field})=>(
         <AppInput 
         isRequired={false}
         inputType="email" 
         inputPlaceholder="Введите свой email" 
         isError={errors.useremail ? true : false}
         errorText={errors.useremail?.message} 
         {...field}
         />
       )}
        />
        <Controller
       control={control} 
       name="userpassword" 
       render={({field})=>(
         <AppInput 
         isRequired={false}
         inputType="password" 
         inputPlaceholder="Пароль"
         isError={errors.userpassword ? true : false}
         errorText={errors.userpassword?.message} 
         {...field}
         />
       )}
        />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
      </form>
      <AppLink linkText="Забыли пароль?"/>
      <AppRegistration/>
    </SCLoginPage>
  );
};
