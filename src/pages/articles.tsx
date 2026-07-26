import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import Article from '../components/homepage/article';

import INFO from '../data/user';
import myArticles from '../data/articles';
import SEO from '../data/seo';

import './styles/projects.css';

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'articles');

  return (
    <>
      <Helmet>
        <title>{`Articles | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO?.description} />
        <meta name="keywords" content={currentSEO?.keywords.join(', ')} />
      </Helmet>

      <div className="page-content">
        <NavBar active="articles" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">{INFO.articles.title}</div>

            <div className="subtitle projects-subtitle">
              {INFO.articles.description}
            </div>

            <div style={{ paddingTop: '40px' }}>
              {myArticles.map((article) => (
                <Article key={article.title} {...article} />
              ))}
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
