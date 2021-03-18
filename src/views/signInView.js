import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 5px;
  font-weight: 700px;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Credentials = styled.input`
  margin-bottom: 10px;
  width: 200px;
  padding: 5px;
  line-height: 20px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  border-radius: 5px;
`;

const LoginButton = styled.input`
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

export const SignInView = ({ handleLogIn }) => {
  return (
    <Background>
      <Title>Login </Title>
      <LoginContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleLogIn("Testing");
        }}
      >
        <Text>Username:</Text>
        <Credentials
          type="text"
          required
          autoFocus
          placeholder="Username"
          pattern="^[a-zA-Z0-9]{3,24}$"
        />
        <Text>Password:</Text>
        <Credentials
          type="password"
          required
          autoFocus
          placeholder="Password"
          pattern="^[a-zA-Z0-9]{3,24}$"
        />
        <LoginButton type="submit" value="Login" />
      </LoginContainer>
      <LoginButton type="button" value="Register" />
      <div className="signInStatus"></div>
    </Background>
  );
};
