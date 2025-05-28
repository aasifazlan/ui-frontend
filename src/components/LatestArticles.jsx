import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [visibleArticlesCount, setVisibleArticlesCount] = useState(6);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('/api/articles');
        const fetchedArticles = Array.isArray(res.data) ? res.data : res.data.articles;
        console.log(fetchedArticles.map(a => a.createdAt));

        // Sort by latest date
        const sortedArticles = fetchedArticles.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setArticles(sortedArticles);
        setError(null);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setArticles([]);
        setError('Failed to fetch articles. Please try again later.');
      }
    };

    fetchArticles();
  }, []);

  const loadMoreArticles = () => {
    setVisibleArticlesCount(prev => prev + 6);
  };

  const loadFewerArticles = () => {
    setVisibleArticlesCount(prev => Math.max(prev - 6, 6));
  };

  return (
    <div className="max-w-screen-xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      <section className="my-12">
        <h3 className="text-3xl font-bold text-center mb-8">📰 Latest Articles</h3>

        {error && (
          <p className="text-center text-red-500 font-medium mb-6">{error}</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.length > 0 ? (
            articles.slice(0, visibleArticlesCount).map(article => (
              <Link
                key={article._id || article.id}
                to={article.slug ? `/article/${article.slug}` : '#'}
                className={`bg-white rounded-2xl shadow-lg transition-transform transform ${
                  article.slug ? 'hover:shadow-xl hover:scale-105' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <img
                  src={article?.images?.[0]?.url || '/fallback-image.jpg'}
                  alt={article.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2">{article.title}</h4>
                  {article.excerpt && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                  )}
                  <span className="text-blue-600 hover:underline text-sm inline-block">Read more</span>
                </div>
              </Link>
            ))
          ) : (
            !error && (
              <p className="text-center text-gray-500 col-span-full">No articles found.</p>
            )
          )}
        </div>

        <div className="text-center mt-6">
          {visibleArticlesCount < articles.length && (
            <button
              onClick={loadMoreArticles}
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition mr-4"
            >
              More
            </button>
          )}
          {visibleArticlesCount > 6 && (
            <button
              onClick={loadFewerArticles}
              className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition"
            >
              Less
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default LatestArticles;
