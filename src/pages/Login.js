import React, {useRef} from 'react';
import Input from "../components/Input/Input";
import {useAuth} from "../context/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const formRef = useRef({
    login: '',
    password: ''
  });

  const from = location.state?.from || '/';

  const handleChange = (event) => {
    formRef.current = {
      ...formRef.current,
      [event.target.name]: event.target.value
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    auth.singIn(formRef.current, () => {
      navigate(from, {
        replace: true
      });
    })
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <Input name="login" label="Введите имя" placeholder="Имя" type="text" radius="20px" size="16px"/>
      <Input name="password" label="Введите пароль" placeholder="Пароль" type="password" radius="20px" size="16px"/>
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;