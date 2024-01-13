
import React from "react";

const defaultValues = {
  size: 24,
  color: "currentColor",
};
const FeatherIconContext = React.createContext(defaultValues);

const FeatherIconProvider = ({
  children,
  size = defaultValues.size,
  color = defaultValues.color,
}) => {
  return (
    <FeatherIconContext.Provider value={{ size, color }}>
      {children}
    </FeatherIconContext.Provider>
  );
};

export const useDefaultProps = () => {
  const { size, color } = React.useContext(FeatherIconContext) || defaultValues;
  return { size, color };
};

export default FeatherIconProvider;
