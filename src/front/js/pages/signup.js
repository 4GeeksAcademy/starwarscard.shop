import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import logoImg from "../../img/logo_swcs.jpg";
import "../../styles/signup.css";


export const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {store, actions} = useContext(Context);

    const handleClick = () => {
      actions.signUp(email, password, username);
    }

    useEffect(() => {
      if(store.isSignUpSuccessful) {
          navigate("/signin")
      }

    }, [store.isSignUpSuccessful])
    
    return (
        <>
       
       <section className="vh-100 bg-negro" style={{ backgroundColor: '#eeee' }}>
       <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black bg-blanco" style={{ borderRadius: '25px' }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

              <div className="signup-page">
                <div className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4-5">
                    <h1>Sign Up</h1>
                </div>
                {/* pause here to set up in layout.js */}
                <div>
                    {store.signupMessage  || ""}
                </div>
                

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">First Name</label>
                    </div>
                  </div> */}

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1c">Last Name</label>
                    </div>
                  </div> */}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input   
                        type="text" 
                        placeholder="Enter username" 
                        size="30"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="form-control" 
                        required />
                      <label className="form-label" htmlFor="form3Example1c"></label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input 
                        type="email" 
                        placeholder="Enter email" 
                        size="30"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control" 
                        required />
                      <label className="form-label" htmlFor="form3Example3c"></label>
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" 
                        placeholder="Enter password"
                        minLength="6"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" 
                        required  />
                      <label className="form-label" htmlFor="form3Example4c"></label>
                    </div>
                  </div>

                  {/* <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" />
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button
                        onClick={() => {handleClick()}}
                        className="btn btn-primary btn-lg"
                    >Sign Up</button>
                  </div>

                

              </div>
              
              {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src={logoImg} 
                  className="img-fluid" alt="Sample image"/>
              </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
        
        </>
    )
}

