import React from 'react';

// TODO: Add your articles here. Each article function returns an object with date, title, description, and body.
function article_1() {
  return {
    date: '7 May 2023',
    title: 'The Benefits of Cloud Computing',
    description:
      'Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.',
    style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		`,
    body: (
      <React.Fragment>
        <div className="article-content">
          <div className="paragraph">
            {/* TODO: Replace with your article content */}
            Content of article 1
          </div>
        </div>
      </React.Fragment>
    ),
  };
}

// TODO: Add more articles by creating new functions starting with article_
// function article_2() { ... }

const myArticles = [article_1];

export default myArticles;
