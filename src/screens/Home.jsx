import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <article style={{ padding: '100px' }}>
      <h1>This is the home page!</h1>
      <div className="flexGrow">
        <Link to="/">Visit Our Homepage</Link>
      </div>
    </article>
  );
};

export default Missing;
