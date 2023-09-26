import React from 'react';
import {useAuth} from "../../context/AuthProvider";
import {Link, useNavigate} from "react-router-dom";
import './style.css'

const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSingout = () => {
    auth.singOut(() => {
      navigate('/');
    })
  }

  if (auth?.user === null) {
    return <div className="welcome">
            <p>Вы не авторизованы</p>
            <Link to="/login">Войти</Link>
          </div>
  }

  return (
    <div className="welcome">
      <p>Добро пожаловать, {auth?.user?.login}</p>
      <button onClick={handleSingout}>Выйти</button>
    </div>
  );
};

export default AuthStatus;