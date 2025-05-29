import { useEffect, useState } from 'react';
import { getTodayHistory } from '../api/history';
import { Link } from 'react-router-dom';

const HistoryOfTheDay = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodayHistory();
      console.log('HOD Component Data', data);
      setEvent(data);
    };

    fetchData();
  }, []);

  if (!event) {
    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-white/90 p-6 rounded-xl shadow-lg">
        <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-lg"></div>
        <div className="flex-1 space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="h-20 bg-gray-100 rounded w-full"></div>
          <div className="h-10 bg-blue-300 rounded w-40"></div>
        </div>
      </div>
    </div>
    );
  }

  const eventContent = event.content ? event.content.split('\n') : [];
  const previewText = eventContent.slice(0, 3).join(' ');

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      {/* <h2 className="text-5xl font-bold text-center mb-10">On This Day</h2> */}

      <div className="flex flex-col md:flex-row gap-8 items-center bg-white/90 p-6 rounded-xl shadow-lg">
        {event.images && event.images.length > 0 && (
          <img
            src={event.images[0].url}
            alt="Historical event"
            className="w-full md:w-1/2 max-h-[400px] object-cover rounded-lg shadow-md"
          />
        )}

        <div className="flex-1 space-y-4 overflow-hidden">
          <h3 className="text-3xl font-semibold">{event.title}</h3>
          <p className="text-gray-500">{event.date}</p>

          <div
            className="relative h-32 overflow-hidden group"
          >
            <div
              className="absolute top-0 animate-scroll-text group-hover:pause-scroll text-gray-700 pr-4"
              dangerouslySetInnerHTML={{ __html: previewText }}
            />
          </div>

          <Link
            to="/today-history"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Read Full Article →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HistoryOfTheDay;
