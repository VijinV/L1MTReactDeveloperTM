import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { SocialIcons } from "../component/SocialIcons"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { LoginForm } from "../component/form/LoginForm";


export const SignIn = () => {

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const navigate = useNavigate();

    useEffect(() => {

        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100 text-primary px-3 px-md-5">
            <Row className="w-100">
                <Col xs={12} md={6} className="d-flex flex-column align-items-center justify-content-center mb-4 mb-md-0">
                    <div className="d-flex flex-column align-items-start gap-1 w-100" style={{ maxWidth: '350px' }}>
                        <h2 className="fw-bold fs-2">Sign In</h2>
                        <p className="fw-bold fs-6">
                            New user? <a href="#" className="text-primary">Create an account</a>
                        </p>
                        <LoginForm />
                    </div>

                    <div className="mt-4 text-center w-100" style={{ maxWidth: '350px' }}>
                        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                            <hr className="bg-primary opacity-75 flex-grow-1 m-0" style={{ height: '2px' }} />
                            <p className="fw-bold m-0">Or Sign In With</p>
                            <hr className="bg-primary opacity-75 flex-grow-1 m-0" style={{ height: '2px' }} />
                        </div>
                        <SocialIcons />
                    </div>
                </Col>

                <Col md={6} className="d-none d-md-flex align-items-center justify-content-center">
                    <img
                        src="login.svg"
                        alt="Login Illustration"
                        className="img-fluid"
                        style={{ maxHeight: '509px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
