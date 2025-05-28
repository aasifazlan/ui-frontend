import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("analyticsConsent", "true");
    localStorage.setItem("personalizationConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    localStorage.setItem("analyticsConsent", "false");
    localStorage.setItem("personalizationConsent", "false");
    setShowBanner(false);
  };

  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
        <p className="mb-2 md:mb-0 text-sm max-w-md">
          We use cookies to personalize content and analyze traffic. Read our{" "}
          <Link to="/privacy-policy" className="underline text-yellow-400">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleDecline}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded text-sm"
          >
            Decline
          </button>
          <button
            onClick={handleAcceptAll}
            className="bg-yellow-400 text-gray-900 px-4 py-1 rounded hover:bg-yellow-300 text-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    )
  );
};

export default CookieConsentBanner;
