// import { useNavigate } from 'react-router-dom';
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import SetupGuide from './setupGuide/SetupGuide';

import styles from './Home.module.scss';

export default function Home() {
  // const navigate = useNavigate();
  // const axios = useAxiosPrivate();

  // const test = async () => {
  //   try {
  //     await axios.get('/test');
  //     navigate('/setup');
  //   } catch (err) {
  //     console.log(err);
  //     console.log(err?.response?.status);
  //   }
  // };

  return (
    <div className={styles.screen}>
      <div className={styles.setupContainer}>
        <SetupGuide />
      </div>
    </div>
    // <article style={{ padding: '100px', marginLeft: '15%' }}>
    //   <h1>This is the home page!</h1>
    //   <div className="flexGrow">
    //     <button onClick={() => test()}>Tell me your secrets </button>
    //   </div>
    // </article>
  );
}
