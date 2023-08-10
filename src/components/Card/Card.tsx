import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
