interface FrenchFlagIconProps {
  width?: string;
  height?: string;
}

const FrenchFlagIcon = ({ width, height }: FrenchFlagIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 60"
      width={width || "30"}
      height={height || "18"}
    >
      <path d="m0,0h90v60H0" fill="#ED2939"/>
      <path d="m0,0h60v60H0" fill="#FFF"/>
      <path d="m0,0h30v60H0" fill="#002395"/>
    </svg>
  );
};

export default FrenchFlagIcon;
