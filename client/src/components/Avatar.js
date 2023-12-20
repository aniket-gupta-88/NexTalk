import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Avatar = ({ src, size }) => {
  const { theme } = useSelector((state) => state);
  return (
    <img
      className={size}
      src={src}
      alt="avatar"
      style={{ filter: `${theme ? "invert(1)" : "invert(0)"}` }}
    />
  );
};

export default Avatar;
