import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import './styles/article.css';

interface ArticleProps {
  title: string;
  description: string;
  link: string;
}

const Article = ({ title, description, link }: ArticleProps) => {
  return (
    <div className="homepage-article">
      <div className="homepage-article-content">
        <div className="homepage-article-title">{title}</div>
        <div className="homepage-article-description">{description}</div>
        <div className="homepage-article-link">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Read guide: ${title}`}
          >
            Read guide{' '}
            <FontAwesomeIcon
              style={{ fontSize: '10px' }}
              icon={faChevronRight}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
