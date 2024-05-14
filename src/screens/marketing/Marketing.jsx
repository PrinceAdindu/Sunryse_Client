import Directory from './directory/Directory';
import styles from './Marketing.module.scss';
const Marketing = () => {
  return (
    <div className={styles.screen}>
      <h1>Marketing</h1>
      <Directory />
    </div>
  );
};

export default Marketing;
