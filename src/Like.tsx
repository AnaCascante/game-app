import React from "react";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

interface Props {
  onClick: () => void;
  size?: number;
  color?: string;
}

const Like = ({ onClick, size, color }: Props) => {
  const [status, setStatus] = React.useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return <BsFillHeartFill size={30} color="red" onClick={toggle} />;
  }
  return <BsHeart size={30} color="pink" onClick={toggle} />;
};

export default Like;
