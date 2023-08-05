import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <div className={styles.container} onClick={onClick || undefined}>
      {children}
    </div>
  );
};

export default Card;
