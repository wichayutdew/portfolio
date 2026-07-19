import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';

import INFO from '../data/user';
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
            <div className="title projects-title">
              {/* TODO: Update with your articles heading */}
              I&apos;m passionate about pushing the boundaries of what&apos;s
              possible and inspiring the next generation of innovators.
            </div>

            <div className="subtitle projects-subtitle">
              {/* TODO: Update with your articles description */}
              Chronological collection of my long-form thoughts on programming,
              leadership, product design, and more.
            </div>

            <div style={{ paddingTop: '40px' }}>
              {/* TODO: Add your articles list here */}
              <p style={{ color: 'var(--secondary-color)' }}>
                No articles yet. Check back soon!
              </p>
              <Link
                to="/"
                style={{
                  color: 'var(--link-color)',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                ← Back to Home
              </Link>
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
