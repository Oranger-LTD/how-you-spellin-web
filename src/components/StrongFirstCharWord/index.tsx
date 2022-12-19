import React from "react";

interface StrongFirstCharWordProps {
  text: string;
}

export const StrongFirstCharWord: React.FC<StrongFirstCharWordProps> = ({
  text,
}) => {
  const [first, ...rest] = text.trim().split("");
  return (
    <span>
      <strong>{first}</strong>
      <span>{rest}</span>
    </span>
  );
};
