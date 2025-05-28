import React from 'react';

const VisionSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-black mb-6">Our Vision</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
        At Unscripted India, our vision is to uncover the hidden narratives of India — its people, culture, history, and everyday heroes. We aim to bridge the gap between forgotten truths and modern perspectives through authentic storytelling.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-black mb-2">🎥 Documentary Excellence</h2>
          <p className="text-gray-700">
            We aspire to produce documentary content that captures real voices, untold stories, and socio-cultural truths of the Indian landscape.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-black mb-2">📜 Reviving History</h2>
          <p className="text-gray-700">
            By diving into archives and oral traditions, we aim to correct narratives, revive forgotten histories, and spark interest in India’s rich past.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-black mb-2">🌈 Celebrating Diversity</h2>
          <p className="text-gray-700">
            From languages to festivals, food to fashion — we strive to showcase the beauty of India's regional and cultural diversity without bias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionSection;
