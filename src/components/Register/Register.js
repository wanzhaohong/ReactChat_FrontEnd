import React, {useRef} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import './Register.css';

const Register = () => {
    const name = useRef();
    const password = useRef();
    const passwordagain = useRef();

    //redirect user to previous page or other pages
    const history = useHistory();

    const handleClick = async (event) => {
        event.preventDefault();
        if (passwordagain.current.value !== password.current.value) {
            passwordagain.current.setCustomValidity("Passwords don't match.");
        }else{
            const user = {
                username: name.current.value,
                password: password.current.value,
            };

            try {
                await axios.post('/api/auth/register/', user);
                history.push('/');
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="registerOutterContainer">
            <Container className="registerInnerContainer">
                
                <Row>
                    <Col md={6}>
                        <div className="register-info">
                            <h4><strong>RULE 1</strong>: username should be 3 to 20 characters.</h4>
                            <h4><strong>RULE 2</strong>: password needs to be more than 5 characters.</h4>
                        </div>
                    </Col>

                    <Col md={1}></Col>

                    <Col md={5}>
                        <div className="register-bar">
                            <h4 className="heading">Please enter...</h4>
                            <form onSubmit={handleClick}>
                                <div><input placeholder="Name" className="registerInut" type="text" ref={name} required /></div>
                                <div><input placeholder="Password" className="registerInut mt-20" type="password" ref={password} required minLength="6"/></div>
                                <div><input placeholder="Confirm Password" className="registerInut mt-20" type="password" ref={passwordagain} required minLength="6" /></div>

                                <button className="button-sign-up mt-20" type="submit">Sign up</button>
                            </form>

                            <Link to={'/'}>
                                <button className="button mt-20">Back</button>
                            </Link>

                        </div>
                    </Col>
                </Row>
                    
            </Container>
        </div>
    );
}

export default Register;