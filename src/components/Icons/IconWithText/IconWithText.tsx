import React from "react";
import styles from "./IconWithText.module.css";

interface IconWithProps {
  children: React.ReactNode;
  text: string | React.ReactNode;
}

const IconWithText = ({ children, text }: IconWithProps) => {
  return (
    <div className={styles.container}>
      {children}
      &nbsp;
      {text}
    </div>
  );
};

export default IconWithText;
