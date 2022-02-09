import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.querySelector('#overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
