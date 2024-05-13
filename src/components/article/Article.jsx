import PropTypes from 'prop-types';
import styles from './Article.module.scss';
const Article = ({
  article,
  cardClass = '',
  titleClass = '',
  descClass = '',
  contentClass = '',
}) => {
  return (
    <article className={`${styles.card} ${cardClass}`}>
      <div className={`${styles.content} ${contentClass}`}>
        <h4 className={`${styles.title} ${titleClass}`}>{article.title}</h4>
        <p className={`${styles.description} ${descClass}`}>
          {article.description}
        </p>
      </div>
      <img src={article.img} />
    </article>
  );
};

Article.propTypes = {
  article: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string,
  }).isRequired,
  cardClass: PropTypes.string,
  titleClass: PropTypes.string,
  descClass: PropTypes.string,
  contentClass: PropTypes.string,
};

export default Article;
