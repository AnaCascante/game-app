import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color: string;
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <button type="button" className="btn btn-success" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
