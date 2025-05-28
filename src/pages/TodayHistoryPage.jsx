import { useEffect, useState } from 'react';
import { getTodayHistory } from '../api/history';
import { Link } from 'react-router-dom';

const TodayHistoryPage = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodayHistory();
      console.log("received data:", data);
      setEvent(data);
    };
    fetchData();
  }, []);

  if (!event) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-screen-xl mt-16 mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif text-[#1a1a1a]">
      <Link to="/" className="text-blue-600 hover:underline text-sm block mb-6">
        ← Back to Home
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Article Section */}
        <div className="lg:w-2/3">
          {/* Optional top images */}
          {event.images?.length > 0 && (
            <div className="mb-6">
              {event.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={`event-img-${idx}`}
                  className="w-full h-auto max-h-[400px] object-cover rounded-md shadow-md mb-4"
                />
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold leading-tight mb-2">{event.title}</h1>
          <p className="text-gray-500 italic text-lg mb-10">
            {new Date(event.createdAt).toLocaleDateString()}
          </p>

          {/* Renders content with embedded images (middle/bottom) */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </div>

        {/* Right: Sidebar Section */}
        <div className="lg:w-1/3 border-l border-gray-200 pl-6 mt-10 lg:mt-0 h-[calc(100vh-8rem)] overflow-y-auto sticky top-32 space-y-8">
        
          {/* Summary Card */}
          {event.summary && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Summary</h2>
              <p className="text-gray-700 text-sm leading-relaxed">{event.summary}</p>
            </div>
          )}
        
          {/* Related Articles */}
          {event.relatedArticles?.length > 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Related Articles</h2>
              <ul className="space-y-3">
                {event.relatedArticles.map((article) => (
                  <li key={article.id}>
                    <Link
                      to={`/history/${article.id}`}
                      className="text-blue-600 hover:underline block"
                    >
                      {article.title}
                    </Link>
                    <p className="text-xs text-gray-500">
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-gray-600 text-sm italic pr-4">
              <p>This space is reserved for future content such as:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Related Articles</li>
                <li>Sources & References</li>
                <li>Infographics</li>
                <li>More on this Topic</li>
              </ul>
            </div>
          )}
        
        </div>

      </div>
    </div>
  );
};

export default TodayHistoryPage;
