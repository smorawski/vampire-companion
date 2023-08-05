interface PlusIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const PlusIcon = ({ color, width, height }: PlusIconProps) => {
  return (
    <svg
      style={{
        width: width || "1em",
        height: height || "1em",
        verticalAlign: "middle",
        fill: color || "currentColor",
        overflow: "hidden",
      }}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke="black"
        strokeWidth="50px"
        d="M911.232 420.565333l0 109.717333q0 22.848-16 38.848t-38.848 16l-237.717333 0 0 237.717333q0 22.848-16 38.848t-38.848 16l-109.717333 0q-22.848 0-38.848-16t-16-38.848l0-237.717333-237.717333 0q-22.848 0-38.848-16t-16-38.848l0-109.717333q0-22.848 16-38.848t38.848-16l237.717333 0 0-237.717333q0-22.848 16-38.848t38.848-16l109.717333 0q22.848 0 38.848 16t16 38.848l0 237.717333 237.717333 0q22.848 0 38.848 16t16 38.848z"
      />
    </svg>
  );
};

export default PlusIcon;
