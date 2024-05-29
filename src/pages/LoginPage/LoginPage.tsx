import { Controller, useForm } from "react-hook-form";
import AppButton from "../../components/UI/AppButton/AppButton";
import AppLink from "../../components/UI/AppLink/AppLink";
import AppInput from "../../components/UI/AppInput/AppInput";
import AppRegistration from "../../components/UI/AppRegistration/AppRegistration"
import "./LoginPage.scss";
import { SCLoginPage } from "./LoginPage.style";
import { yupResolver } from "@hookform/resolvers/yup";
import AppInput from "../../components/UI/AppInput/AppInput";


const LoginFormSchema = yup.object({
  usermail: yup.string().email().required("Обязатльное поле!"),
  userpassword: yup
  .string()
  .min(4, "Пароль должен содержать как минимум 4 символа!")
  .required("Обязательное поле!"),
})

const {control,handleSubmit}= useForm({
  resolver: yupResolver(LoginFormSchema),
  defaultValues:{
    usermail:"",
    userpassword:""
  }
})

export const LoginPage = () => {
  return (
    <SCLoginPage className="LoginPage">
      <h1>Авторизация</h1>
      <form action="#">
        <Controller name="usermail" render={({ field })=>{
      <AppInput inputType="email" inputPlaceholder="Введите свой email" {...field}/>
        }}/>
        
        <AppInput inputType="password" inputPlaceholder="Пароль" />
        <AppButton buttonText="Войти" buttonType="submit" isDisabled={false}/>
      </form>
      <AppLink linkText="Забыли пароль?"/>
      <AppRegistration/>
    </SCLoginPage>
    
  );
};
