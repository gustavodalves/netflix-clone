/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { Context } from "../../context/AuthContext";

import TextInput from "../../components/TextInput";
import { InputRoot } from "../../components/TextInput/styles";
import Button from "../../components/Button";

import { Container, Form, FormCard, FormRoot, FormHeading } from "./styles";
import Loader from "../../styles/Loader";

import background from '../../assets/background.jpg'
import Logo from "../../components/Logo";

function Login() {
    const { register, handleSubmit } = useForm();
    const [isFetching, setIsFetching] = useState(false);
    const { login, isAuthenticated } = useContext(Context)
    const navigate = useNavigate()

    const onSubmit = async ({ email, password }) => {
      setIsFetching(true);
      const isLogged = await login({ email, password })
      setIsFetching(false)

      if(isLogged) {
        navigate('/')
      }
    }

    return (
      <>
          {
            isFetching ? <Loader /> :
            <Container src={background}>
              <Logo size="md"/>
              <FormRoot>
                <FormCard>
                  <FormHeading> Entrar </FormHeading>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputRoot>
                      <TextInput
                        label="Email"
                        type="email"
                        placeholder="johndoe@example.com.br"
                        register={register}
                        name="email" />

                      <TextInput
                        label="Password"
                        type="password"
                        placeholder="*******"
                        register={register}
                        name="password" />

                    </InputRoot>
                    <Button type="submit"> Entrar </Button>
                  </Form>
                  <div />
                </FormCard>
              </FormRoot>
          </Container>
          }
      </>
    )
}

export default Login;