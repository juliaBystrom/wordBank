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
  padding-top: 1.5rem;
  text-align: center;
`;

const Intro = styled.h3`
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

const AuthicationButton = styled.button`
  background: ${(props) => props.theme.button};
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
      <Title>Welcome to WordBank!</Title>
      <Intro>
        Create an account or log in to access your WordBank! <br></br>
        <br></br>
        WordBank enables you to:<br></br>
        <br></br>
        1. save your translations in boards<br></br>
        2. tag translations to navigate through the bank<br></br>
        3. add comments to translations
      </Intro>

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
          pattern="^.{4,75}$"
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
        <AuthicationButton
          onClick={() => {
            handleLogIn();
          }}
        >
          Log in
        </AuthicationButton>
        <AuthicationButton
          onClick={() => {
            handleRegister();
          }}
        >
          Register
        </AuthicationButton>
      </LoginContainer>
    </AuthContainer>
  );
};
