import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    //If loading is true, render the spinner component
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      //If not then load the component with props
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner; 