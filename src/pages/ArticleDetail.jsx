import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ArticleDetail() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`/api/articles/slug/${slug}`);
        setArticle(res.data.article || res.data);
      } catch (err) {
        console.error('Error fetching article:', err);
      }
    };
    fetchArticle();
  }, [slug]);

  if (!article) return <p className="p-6 text-center text-lg">Loading...</p>;

  return (
    <div className="max-w-screen-xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif text-[#1a1a1a]">
      {/* Back to Home Link */}
      <Link to="/" className="text-blue-600 hover:underline text-sm block mb-6">
        ← Back to Home
      </Link>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Article Section */}
        <div className="lg:w-2/3">
          {/* Image */}
          {article.imageUrl && (
            <div className="w-full mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto max-h-[400px] object-cover rounded-md shadow-md"
              />
              {article.imageCaption && (
                <p className="text-sm text-gray-500 italic text-center mt-2">{article.imageCaption}</p>
              )}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight mb-2">{article.title}</h1>

          {/* Author and Date */}
          <p className="text-gray-500 italic text-lg mb-10">
            {article.author ? `By ${article.author}` : 'By Unknown'} | {new Date(article.createdAt).toLocaleDateString()}
          </p>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>

        {/* Sidebar Section */}
        <div className="lg:w-1/3 border-l border-gray-200 pl-6 mt-10 lg:mt-0">
          <div className="text-gray-600 text-sm italic">
            <p>This space is reserved for future content such as:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Related Articles</li>
              <li>Sources & References</li>
              <li>Infographics</li>
              <li>More on this Topic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
