import React from "react";
import styled from "styled-components";

/* 
  Will return false if loading is false otherwise an div with a spinner. Indicating loading of data
*/

export default function isLoading(loading) {
  if (!loading) {
    return false;
  } else {
    return (
      <LoadingImgDiv>
        <img
          /* className="spinner" */
          alt="loading data spinner"
          src={"http://www.csc.kth.se/~cristi/loading.gif"}
        />
      </LoadingImgDiv>
    );
  }
}

const LoadingImgDiv = styled.div`
  width: 100%;
  img {
    margin: 0px 40%;
  }
`;
