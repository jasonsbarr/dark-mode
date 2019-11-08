import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = isDarkMode => {
  const [dark, setDark] = useLocalStorage("dark-mode", isDarkMode);

  useEffect(() => {
    dark
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [dark]);

  return [dark, setDark];
};

export default useDarkMode;
