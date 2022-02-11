import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} id={props.input.id} />
    </div>
  );
});

export default Input;
