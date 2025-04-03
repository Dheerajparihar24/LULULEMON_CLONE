import {
  Box,
  Button,
  Field,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import login_brand_Icon from "../../components/LogIn/login_brand_Icon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onShowRegister }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (user.email === "" || user.password === "") {
      alert("please fill the form first");
      return;
    }
    if (!foundUser) {
      alert("User not find please login first");
      return;
    }
    alert("Login successful!");

    dispatch(loginUser(user));
    navigate("/");
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="16px"
      width={{ md: "70%", lg: "60%" }}
      maxHeight="450px"
      height="100%"
      p={4}
    >
      <Image
        src={login_brand_Icon}
        width="50px"
        height="auto"
        maxWidth="200px"
        objectFit="contain"
      />
      <Heading as="h2">Sign in or create an account</Heading>

      <form style={{ display: "block" }} onSubmit={handleFormSubmit}>
        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input
            name="email"
            value={user.email}
            onChange={handleInputChange}
            p={{ base: "10px", lg: "20px" }}
            size={{ base: "lg", sm: "md", lg: "xl" }}
            placeholder="Email"
            id="emailInput"
          />
          <Field.ErrorText>Please enter your email address.</Field.ErrorText>

          <Field.Label>Password</Field.Label>
          <Input
            name="password"
            value={user.password}
            onChange={handleInputChange}
            p={{ base: "10px", lg: "20px" }}
            size={{ base: "lg", sm: "md", lg: "xl" }}
            placeholder="password"
            type="password"
            id="passwordInput"
          />
        </Field.Root>

        <Button
          variant="solid"
          colorPalette="red"
          color="white"
          width="100%"
          my={4}
          p="12px"
          fontSize="16px"
          size={{ base: "lg", sm: "md", lg: "xl" }}
          type="submit"
        >
          Login
        </Button>
      </form>

      <Box textAlign="center">
        <Button
          variant="link"
          color="blue"
          onClick={() => navigate("/account/register")}
        >
          Don’t have an account? Register here
        </Button>
      </Box>
    </Box>
  );
};
