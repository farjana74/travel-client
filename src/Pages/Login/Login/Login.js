import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import login from '../../../images/p-1.png'
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle, processLogin, setIsLoading } =
        useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logInError, setLogInError] = useState("");

    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));
    };

    

    const handleEmailLogIn = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordLogIn = (e) => {
        setPassword(e.target.value);
    };

    const handleLogIn = (e) => {
        e.preventDefault();
        processLogin(email, password)
            .then((result) => {
                history.push(redirect_url);
                setLogInError("");
            })
            .catch((error) => {
                setLogInError(error.message);
            });
    };

    return (
        <>
            <Container className="py-4">
                <Row>
                    <Col xs={12} md={6} className="mb-5">
                        <h1 className="text-center fw-bold">Dicin Hospital</h1>
                        <img
                            className="logo"
                            src={login}
                            alt=""
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <h1 className="text-center fw-bold">SIGN IN</h1>
                        <Form
                            className="mx-auto pt-4 pb-5 w-75"
                            onSubmit={handleLogIn}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>EMAIL</Form.Label>
                                <Form.Control
                                    type="email"
                                    onBlur={handleEmailLogIn}
                                    placeholder="Email Address"
                                    required
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="BasicPassword"
                            >
                                <Form.Label>PASSWORD</Form.Label>
                                <Form.Control
                                    type="password"
                                    onBlur={handlePasswordLogIn}
                                    placeholder="..........."
                                    required
                                />
                            </Form.Group>
                            <span>{logInError}</span>
                            <div className="d-grid gap-2 my-4">
                                <Button variant="secondary" type="submit">
                                    Sign In
                                </Button>
                            </div>
                            <div>
                                <span>Don't have an account?</span>
                                <Link to="/register"> Sign Up</Link>
                            </div>
                        </Form>
                        <div className="text-center">
                            <Button
                                className="btn-regular me-3"
                                onClick={handleGoogleSignIn}
                            >
                                Google Sign In
                            </Button>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;












































































































































































































































































































































































































// import React, { useState } from 'react';
// import { Link ,useLocation,useHistory} from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import './Login.css'
// const Login = () => {
//   const { signInUsingGoogle,  processLogin, setIsLoading } =
//       useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [logInError, setLogInError] = useState("");

//   const history = useHistory();
//   const location = useLocation();
//   const redirect_url = location.state?.from || "/";

//   const handleGoogleSignIn = () => {
//       signInUsingGoogle()
//           .then(() => {
//               history.push(redirect_url);
//           })
//           .finally(() => setIsLoading(false));
//   };

  

//   const handleEmailLogIn = (e) => {
//       setEmail(e.target.value);
//   };
//   const handlePasswordLogIn = (e) => {
//       setPassword(e.target.value);
//   };

//   const handleLogIn = (e) => {
//       e.preventDefault();
//       processLogin(email, password)
//           .then((result) => {
//               history.push(redirect_url);
//               setLogInError("");
//           })
//           .catch((error) => {
//               setLogInError(error.message);
//           });
//   };








//     return (
// <div>
// <h4 className="text-primary text-center my-4 fs-3">Please login</h4>
// <form  onSubmit={handleLogIn} className="w-25 mx-auto login my-5 border bg-light rounded shadow-lg p-4">
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input  onBlur={handleEmailLogIn} type="email" class="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input  onBlur={handlePasswordLogIn} type="password" class="form-control" id="inputPassword3"/>
//     </div>
//   </div>
// <div class="row mb-3">
//     <div class="col-sm-10 offset-sm-2">
//       <div class="form-check">
//         <input class="form-check-input" type="checkbox" id="gridCheck1"/>
//         <label class="form-check-label" for="gridCheck1">
//           Example checkbox
//         </label>
//       </div>
//     </div>
//   </div>
//   <span>{logInError}</span>
//   <input  type="submit" value="submit" />
//   <br />
//   <br />
//   <button onClick={handleGoogleSignIn} className="btn-primary text-white">Google Sign in</button>
//         <p className="text-white">New to Dicin Hospital<Link className="text-primary" to="/register"> Create an Account</Link></p>

// </form>



// </div>





//     );
// };

// export default Login;

















































// import React, { useState } from 'react';
// import { Link ,useLocation,useHistory} from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import './Login.css'
// const Login = () => {
//   const { signInUsingGoogle,  processLogin, setIsLoading } =
//       useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [logInError, setLogInError] = useState("");

//   const history = useHistory();
//   const location = useLocation();
//   const redirect_url = location.state?.from || "/";

//   const handleGoogleSignIn = () => {
//       signInUsingGoogle()
//           .then(() => {
//               history.push(redirect_url);
//           })
//           .finally(() => setIsLoading(false));
//   };

  

//   const handleEmailLogIn = (e) => {
//       setEmail(e.target.value);
//   };
//   const handlePasswordLogIn = (e) => {
//       setPassword(e.target.value);
//   };

//   const handleLogIn = (e) => {
//       e.preventDefault();
//       processLogin(email, password)
//           .then((result) => {
//               history.push(redirect_url);
//               setLogInError("");
//           })
//           .catch((error) => {
//               setLogInError(error.message);
//           });
//   };








//     return (
// <div>
// <h4 className="text-primary text-center my-4 fs-3">Please login</h4>
// <form  onSubmit={handleLogIn} className="w-25 mx-auto login my-5 border bg-light rounded shadow-lg p-4">
//   <div class="row mb-3">
//     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
//     <div class="col-sm-10">
//       <input  onBlur={handleEmailLogIn} type="email" class="form-control" id="inputEmail3"/>
//     </div>
//   </div>
//   <div class="row mb-3">
//     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
//     <div class="col-sm-10">
//       <input  onBlur={handlePasswordLogIn} type="password" class="form-control" id="inputPassword3"/>
//     </div>
//   </div>
// <div class="row mb-3">
//     <div class="col-sm-10 offset-sm-2">
//       <div class="form-check">
//         <input class="form-check-input" type="checkbox" id="gridCheck1"/>
//         <label class="form-check-label" for="gridCheck1">
//           Example checkbox
//         </label>
//       </div>
//     </div>
//   </div>
//   <span>{logInError}</span>
//   <input  type="submit" value="submit" />
//   <br />
//   <br />
//   <button onClick={handleGoogleSignIn} className="btn-primary text-white">Google Sign in</button>
//         <p className="text-white">New to Dicin Hospital<Link className="text-primary" to="/register"> Create an Account</Link></p>

// </form>



// </div>





//     );
// };

// export default Login;
