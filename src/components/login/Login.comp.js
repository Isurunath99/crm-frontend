import React from 'react'
import {Container,Row,Col,Form, Button} from "react-bootstrap";
import PropTypes from 'prop-types';


const LoginForm = ({handleOnChange ,handleOnSubmit, formSwitcher, email, pass}) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className='text-center'>Client Login</h1>
                <hr></hr>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder='Enter email'
                            required
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            value={pass}
                            onChange={handleOnChange}
                            placeholder='Enter password'
                            required
                            />
                    </Form.Group>
                    <br/>
                    <Button type='submit'>Login</Button>
                </Form>
                <hr></hr>
            </Col>
        </Row>

        <Row>
            <Col>
                <a href='#!' onClick={() =>formSwitcher('reset')}>Forgot Password?</a>
            </Col>
        </Row>
    </Container>
  )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

export default LoginForm;
