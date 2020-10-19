import React, { useState, useEffect } from 'react';
import SkeltonElemnt from '../skeletons/SkeletonElemet';

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await result.json();
      setArticles(data);
    }, 5000);
  }, []);

  return (
    <div className='articles'>
      <h2>Articles</h2>

      <SkeltonElemnt type='title' />
      <SkeltonElemnt type='text' />
      <SkeltonElemnt type='thumbnail' />
      <SkeltonElemnt type='avatar' />
      {articles &&
        articles.map((article) => (
          <div className='article' key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </div>
        ))}
      {!articles && <div>Loading...</div>}
    </div>
  );
};

export default Articles;
