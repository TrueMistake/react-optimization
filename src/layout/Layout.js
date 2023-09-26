import React, {Suspense} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import AuthStatus from "../components/Auth/AuthStatus";

const Layout = () => {
  return (
    <div className="wrapper">
      <div className="">
        <AuthStatus />
        <ul>
          <li>
            <NavLink
              to="/"
              className={({isActive}) => isActive ? 'red' : null}
            >Главная</NavLink>
          </li>
          <li>
            <NavLink
              to="/characters"
              className={({isActive}) => isActive ? 'red' : null}
            >Герои</NavLink>
          </li>
          <li>
            <NavLink
              to="/location"
              className={({isActive}) => isActive ? 'red' : null}
            >Локации</NavLink>
          </li>
          <li>
            <NavLink
              to="/episode"
              className={({isActive}) => isActive ? 'red' : null}
            >Эпизоды</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={"Загрузка..."}>
        <Outlet/>
      </Suspense>
    </div>
  );
};

export default Layout;