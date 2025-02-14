import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../store/admin/adminAuthSlice";
import axios from "axios";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { cilLockLocked, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state) => state.adminAuth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/login`,
        {
          username,
          password,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        const { adminToken, adminUser } = response.data;
        dispatch(login({ adminToken, adminUser }));

        toast.success("Login successful!");
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials");
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
      toast.error(err.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Container fluid className="d-flex align-items-center vh-100 bg-light">
        <Row className="w-100 justify-content-center px-2 px-md-0">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <h1 className="text-center">Login</h1>
                  <p className="text-center text-muted">Sign In to Dashboard</p>
                  {error && (
                    <div className="text-danger text-center mb-2">{error}</div>
                  )}
                  <InputGroup className="mb-3">
                    <InputGroup.Text>
                      <CIcon icon={cilUser} />
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      autoComplete="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroup.Text>
                      <CIcon icon={cilLockLocked} />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputGroup.Text
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </InputGroup.Text>
                  </InputGroup>
                  <Row>
                    <Col className="d-flex justify-content-center">
                      <Button
                        type="submit"
                        variant="primary"
                        className="px-4"
                        disabled={loading}
                      >
                        {loading ? "Logging in..." : "Login"}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
