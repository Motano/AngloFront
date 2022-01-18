import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { API_URL } from "../utils/api-data.js";
// import isLogin
import UsuarioContext from "../context/Usuario/UsuarioContext.js";
import {
  setUsuarioSessionStorage,
  removeSessionStorage,
  removeLocalStorage,
} from "../utils/Storage.js";
import logo from "../assets/img/logo.png";
// Componente para el Login y autenticación del usuario
const Auth = () => {
  const history = useHistory();
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const [errorLogin, setErrorLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [datosUsuario, setDatosUsuario] = useState({});

  const handleInput = (event) => {
    event.preventDefault();
    setDatosUsuario({
      ...datosUsuario,
      [event.target.name]: event.target.value,
    });
  };

  const iniciarSesion = (event) => {
    event.preventDefault();
    const submit = axios.post(`${API_URL}/auth/login`, datosUsuario).then(
      (response) => {
        if (response.status != 400) {
          history.push(`/auth`);
        }
        if (response.status === 200) {
          const { id_usuario, nombre, correo } = response.data.usuario;
          const token = response.data.token;
          setUsuario({
            isLoged: true,
            id_usuario,
            nombre,
            correo,
          });
          setUsuarioSessionStorage(
            token,
            JSON.stringify(response.data.usuario)
          );
          history.push(`/admin/dashboard`);
        }
      },
      (error) => {
        console.log(error);
        setErrorLogin(!errorLogin);
        setInterval(() => {
          setErrorLogin(false);
        }, 4000);
      }
    );
  };

  useEffect(() => {
    removeSessionStorage();
    removeLocalStorage();
  }, []);

  return (
    <body className = "fondoAnglo">
    <div className="container-fluid">
      <div className="row b-flex justify-content-start">
        <div className="col-md-3 offset-md-5 mt-5">
          <div className="bg-white h-100 shadow">
            <div className="px-3 h-100 ">
              <div className="d-flex justify-content-center py-5 ">
                <div>
                  <p className="text-sm text-muted text-center">Bienvenido a</p>
                  <div className = "row">
                    <div className = "col-4">
                      <img
                        src = {logo}
                        alt = ""
                        className="img-fluid mt-5"
                      />
                    </div>
                    <div className = "col-8">
                      <h2
                      className="font-angloAmerican my-4 text-blue"
                      style={{ fontSize: "58px" }}
                    >
                      Anglo <span className="text-blue">American</span>
                    </h2>
                  </div>
            
                  </div>
                  
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-10">
                  <form action="" onSubmit={iniciarSesion}>
                    <div className="mb-4">
                      <label className="text-sm">Correo</label>
                      <input
                        type="email"
                        name="correo"
                        className="form-control text-sm"
                        placeholder="ejemplo@angloamerican.com"
                        onChange={handleInput}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-sm">Contraseña</label>
                      <div className="position-relative">
                        <span
                          type="button"
                          className="position-absolute end-0 text-secondary mx-3 p-1"
                          onClick={() => setShowPass(!showPass)}
                        >
                          {showPass ? (
                            <i className="far fa-eye fa-md"></i>
                          ) : (
                            <i className="far fa-eye-slash fa-md"></i>
                          )}
                        </span>
                        <input
                          type={showPass ? "text" : "password"}
                          name="password"
                          className="form-control text-sm"
                          placeholder="Contraseña"
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                      <button
                        type="submit"
                        className="btn btn-sm btn-blue w-75 text-white"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Alerta de error */}
              {errorLogin && (
                <div className="row mx-4 pt-3">
                  <div className="alert alert-danger fade-in py-3" role="alert">
                    Comprueba tu correo o tu contraseña !
                  </div>
                </div>
              )}
              <div className={"row" + errorLogin ? "h-25" : "h-25"}>
                <div className="d-flex align-items-center align-items-sm-end">
                  <div className="d-flex justify-content-center w-100">
                    <p className="text-xs text-muted">
                      Copyright <i class="far fa-copyright fa-sm"></i> 2022{" "}
                      <a
                        href="https://www.creative-tim.com/campaign"
                        className="text-muted"
                      >
                        Creative Tim
                      </a>{" "}
                      y{" "}
                      <a
                        href="https://github.com/Motano"
                        className="text-muted"
                      >
                        Motano
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
};
export default Auth;
