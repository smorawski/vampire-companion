import styles from "./SmallCard.module.css";

interface CardProps {
  children?: React.ReactNode;
  empty?: boolean;
}

export enum CardSize {
  small = "small",
  normal = "normal",
}

const Card = ({ children, empty }: CardProps) => {
  const className = `${styles.container}${empty ? ` ${styles.empty}` : ""}`;
  return <div className={className}>{children}</div>;
};

export default Card;
