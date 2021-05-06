import styled from "styled-components";

const AuthContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Credentials = styled.input`
  margin-bottom: 10px;
  padding: 0.3em;
  line-height: 20px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

`;

const AuthButton = styled.input`
  background: ${(props) => props.theme.queenblue};
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

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin: 5px 0px;
  font-weight: 700px;

`;

const Error = styled.span`
  margin-bottom: 10px;
  color: ${(props) => props.theme.fieryrose};
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
        <StyledLabel>Email:</StyledLabel>
        <Credentials
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          required
          autoFocus
          placeholder="Email"
          pattern="^.{8,75}$"
        />
        <Error>{emailError}</Error>
        <StyledLabel>Password:</StyledLabel>
        <Credentials
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          pattern="^[a-zA-Z0-9]{3,24}$"
        />
        <Error>{passwordError}</Error>
        <AuthButton type="submit" defaultValue="Login" />
        <AuthButton
          type="button"
          defaultValue="Register"
          onClick={() => {
            handleRegister();
          }}
        />
      </LoginContainer>
    </AuthContainer>
  );
};
