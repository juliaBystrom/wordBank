import React from "react";
import styled from "styled-components";

export default function isLoading(loading, color) {
  if (!loading) {
    return false;
  } else {
    return (
      <LoadingImgDiv>
        <img
          /* className="spinner" */
          alt="loading data sspinner"
          src={"http://www.csc.kth.se/~cristi/loading.gif"}
        />
      </LoadingImgDiv>
    );
  }
}

const LoadingImgDiv = styled.div`
  width: 100%;
  // background-color: ${(props) => props.col};

  img {
    margin: 0px 40%;
  }
  // margin: 50px 40%;
`;
