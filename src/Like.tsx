import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  return (
    <BsFillHeartFill
      size={30}
      padding={5}
      color="#d10404"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
