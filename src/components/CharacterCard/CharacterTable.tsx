import styles from "./CharacterTable.module.css";

interface CharacterTableProps {
  children: Array<React.ReactNode>;
}

const CharacterTable = ({ children }: CharacterTableProps) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {children?.map((node, index) => (
            <td key={index} className={styles.cell}>
              {node}
            </td>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default CharacterTable;
