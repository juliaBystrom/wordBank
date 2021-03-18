import styled from "styled-components";

const AuthContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Credentials = styled.input`
  margin-bottom: 10px;
  width: 275px;
  padding: 5px;
  line-height: 20px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
`;

const AuthButton = styled.input`
  background: #7fa650;
  font-size: 20px;
  margin: 5px 0px;
  padding: 10px 0px;
  font-weight: 600;
  line-height: 1.2;
  color: white;
  width: 200px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 5px;
  font-weight: 700px;
`;

const Error = styled.span`
  margin-bottom: 10px;
  color: red;
  font-weight: 800px;
`;

export const AuthView = ({
  setEmail,
  setPassword,
  handleLogIn,
  handleRegister,
  emailError,
  passwordError,
}) => {
  return (
    <AuthContainer>
      <Title>Authenticate</Title>
      <div className="signInStatus"></div>

      <LoginContainer
        onSubmit={(event) => {
          event.preventDefault();
          handleLogIn();
        }}
      >
        <Text>Email:</Text>
        <Credentials
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
          autoFocus
          placeholder="Email"
          pattern="^.{10,75}$"
        />
        <Error>{emailError}</Error>
        <Text>Password:</Text>
        <Credentials
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          pattern="^[a-zA-Z0-9]{3,24}$"
        />
        <Error>{passwordError}</Error>
        <AuthButton type="submit" value="Login" />
      </LoginContainer>

      <AuthButton
        type="button"
        value="Register"
        onClick={() => {
          handleRegister();
        }}
      />
    </AuthContainer>
  );
};
