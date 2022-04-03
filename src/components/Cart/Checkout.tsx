import styles from './Checkout.module.scss';

const Checkout = (props: any) => {
  const confirmHandler = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>

      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>

      <div className={styles.control}>
        <label htmlFor="post">Postal Code</label>
        <input type="text" id="post" />
      </div>

      <div className={styles.control}>
        <label htmlFor="post">Postal Code</label>
        <input type="text" id="post" />
      </div>

      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
