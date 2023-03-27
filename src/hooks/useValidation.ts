import { useState } from "react";

import { validationInput } from "../utils/helper";

const useValidation = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const validation = (value1: string | null, value2: string | null): void => {
    if (!validationInput(value1) || !validationInput(value2)) {
      setErrorMsg("All fields must be filled!");
    } else {
      setIsValid(true);
    }
  };

  return {
    isValid,
    errorMsg,
    validation,
  };
};

export default useValidation;
