import ReactModal from "react-modal";

import styles from "./Modal.module.css";
import CrossIcon from "../Icons/Cross";

interface ModalProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  onClose: () => void;
}

ReactModal.setAppElement("#root");

const Modal = ({ children, header, onClose }: ModalProps) => {
  return (
    <ReactModal
      isOpen={true}
      style={{
        content: {
          width: "400px",
          padding: 0,
          position: "fixed",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      onRequestClose={onClose}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          {header && <div className={styles.headerContent}>{header}</div>}
          <div className={styles.headerClose} onClick={onClose} role="button">
            <CrossIcon />
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
