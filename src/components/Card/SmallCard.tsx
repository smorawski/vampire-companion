import styles from "./SmallCard.module.css";

interface CardProps {
  children?: React.ReactNode;
  empty?: boolean;
  onClick?: () => void;
}

export enum CardSize {
  small = "small",
  normal = "normal",
}

const Card = ({ children, empty, onClick }: CardProps) => {
  const className = `${styles.container}${empty ? ` ${styles.empty}` : ""}`;
  return (
    <div onClick={onClick} className={className} role="button">
      {children}
    </div>
  );
};

export default Card;
