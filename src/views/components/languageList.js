import styled from "styled-components";

// Language list componet. Displays languages to translate from

const StyledSelect = styled.select`
  width: 180px;
  border-radius: 8px;

  height: 30px;
  padding: 3px;
  border: none;
  font-weight: 600;
  margin: 0px;
`;

const LanguageList = (props) => {
  return (
    <StyledSelect
      className="select-language"
      value={props.language}
      onChange={(e) => {
        props.setLanguage(e.target.value);
      }}
    >
      {props.languageCodes.map((lang) => (
        <option key={lang.language} value={lang.language}>
          {lang.name}
        </option>
      ))}
    </StyledSelect>
  );
};

export default LanguageList;
