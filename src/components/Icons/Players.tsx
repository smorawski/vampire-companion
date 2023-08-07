interface PlayersIconProps {
  width?: string;
  height?: string;
  color?: string;
}

const PlayersIcon = ({ color, width, height }: PlayersIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20}
      height={height || 20}
      viewBox="0 0 512 512"
    >
      <path
        id="Selection"
        fill={color || "block"}
        stroke={color || "block"}
        strokeWidth="1"
        d="M 120.00,40.42
           C 156.17,36.01 191.44,59.78 200.85,95.00
             201.98,99.23 204.11,113.08 203.57,117.00
             202.89,121.99 198.34,124.78 195.01,128.04
             190.50,132.48 186.50,137.73 183.00,143.00
             178.74,149.44 174.55,157.64 172.19,165.00
             171.16,168.24 169.14,177.55 167.42,179.61
             165.44,181.97 158.99,184.79 156.00,185.94
             143.43,190.75 137.15,191.15 124.00,191.00
             114.95,190.89 105.25,188.33 97.00,184.72
             67.93,171.97 54.45,147.59 52.51,117.00
             52.04,109.53 54.17,97.09 56.70,90.00
             67.21,60.56 90.00,44.95 120.00,40.42 Z
           M 308.00,115.00
           C 308.00,115.00 310.65,97.00 310.65,97.00
             313.16,86.38 318.94,75.54 325.67,67.00
             338.51,50.70 361.32,40.24 382.00,40.00
             394.35,39.86 406.89,42.25 418.00,47.81
             463.03,70.32 473.80,131.69 438.96,168.00
             431.09,176.20 424.38,180.70 414.00,185.15
             406.16,188.50 396.54,190.90 388.00,191.00
             379.65,191.09 359.65,189.99 353.43,184.30
             350.78,181.87 350.57,176.48 349.77,173.00
             348.28,166.59 346.15,160.94 343.36,155.00
             335.01,137.18 323.86,126.23 308.00,115.00 Z
           M 248.00,118.44
           C 279.99,114.34 311.03,127.88 326.51,157.00
             350.11,201.39 324.21,260.14 273.00,267.70
             249.98,271.10 226.63,265.59 209.00,249.83
             173.15,217.78 176.65,158.88 216.00,131.21
             226.20,124.04 235.86,120.68 248.00,118.44 Z
           M 0.00,372.00
           C 0.00,372.00 0.00,312.00 0.00,312.00
             0.00,282.82 -1.98,266.31 14.42,240.00
             19.44,231.96 23.14,227.59 30.00,221.04
             56.08,196.12 84.37,195.00 118.00,195.00
             118.00,195.00 155.00,195.00 155.00,195.00
             158.21,195.01 164.87,194.72 166.98,197.56
             168.03,198.98 168.38,205.71 168.75,208.00
             169.91,215.09 171.56,220.34 174.20,227.00
             176.97,233.97 180.70,241.01 185.24,247.00
             188.79,251.69 193.48,255.66 196.00,261.00
             160.37,272.90 130.76,299.36 119.72,336.00
             113.62,356.24 114.00,373.25 114.00,394.00
             114.00,394.00 91.00,391.83 91.00,391.83
             91.00,391.83 63.00,387.58 63.00,387.58
             63.00,387.58 28.00,379.85 28.00,379.85
             28.00,379.85 0.00,372.00 0.00,372.00 Z
           M 352.00,195.00
           C 352.00,195.00 393.00,195.00 393.00,195.00
             426.14,195.00 453.55,195.56 480.00,219.17
             495.10,232.66 506.17,251.12 510.34,271.00
             512.77,282.63 512.00,295.14 512.00,307.00
             512.00,307.00 512.00,363.00 512.00,363.00
             512.00,365.13 512.25,368.59 511.01,370.36
             509.69,372.24 506.08,373.53 504.00,374.42
             504.00,374.42 487.00,380.72 487.00,380.72
             464.51,387.66 442.44,391.48 419.00,393.09
             419.00,393.09 405.00,394.00 405.00,394.00
             405.00,375.64 406.15,360.06 401.52,342.00
             391.47,302.75 361.97,273.68 324.00,261.00
             324.00,261.00 338.94,240.00 338.94,240.00
             346.94,227.03 351.95,210.26 352.00,195.00 Z
           M 217.00,273.14
           C 217.00,273.14 261.00,273.14 261.00,273.14
             261.00,273.14 296.00,273.14 296.00,273.14
             334.24,273.18 369.57,300.67 382.41,336.00
             385.88,345.55 387.98,355.83 388.00,366.00
             388.00,366.00 388.00,440.00 388.00,440.00
             388.00,442.26 388.22,445.68 386.98,447.61
             385.52,449.88 381.45,451.22 379.00,452.28
             371.07,455.71 366.18,457.27 358.00,459.72
             341.27,464.74 310.23,470.79 293.00,471.00
             293.00,471.00 275.00,472.00 275.00,472.00
             275.00,472.00 257.00,472.00 257.00,472.00
             257.00,472.00 246.00,471.04 246.00,471.04
             216.93,469.77 188.21,464.77 160.00,457.63
             160.00,457.63 140.00,451.86 140.00,451.86
             137.78,451.22 133.40,450.18 131.99,448.30
             130.74,446.63 131.00,443.04 131.00,441.00
             131.00,441.00 131.00,395.00 131.00,395.00
             131.00,363.47 130.09,337.56 150.66,311.00
             154.38,306.20 158.36,301.37 163.00,297.44
             169.75,291.71 176.07,287.21 184.00,283.25
             196.34,277.08 203.61,275.62 217.00,273.14 Z"
      />
    </svg>
  );
};

export default PlayersIcon;
