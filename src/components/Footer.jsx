import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    // TODO: Replace with your actual newsletter subscription logic, e.g. API call
    try {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setMessage("Subscription failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-300 text-[#1a1a1a] font-serif">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-3">Unscripted India</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Uncovering the rich tapestry of Indian history and culture through factual storytelling,
            visual narratives, and deep research. No myths. No bias. Just India — unscripted.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/history" className="hover:underline">History</Link></li>
            {/* <li><Link to="/fact-checks" className="hover:underline">Fact Checks</Link></li> */}
            {/* <li><Link to="/diversity" className="hover:underline">Know Indian Diversity</Link></li> */}
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-700 mb-2">
            Email: <a href="mailto:info@unscriptedindia.com" className="hover:underline">info@unscriptedindia.com</a>
          </p>
          <p className="text-sm text-gray-700">Location: Delhi, India</p>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm text-gray-600 mb-3">Subscribe to our newsletter for historical facts, cultural insights, and updates.</p>
           {/* Mailchimp Embed Form */}
           <form
             action="https://gmail.us11.list-manage.com/subscribe/post?u=2d3adb90b58a30d0ea8ef55fc&amp;id=83988ee032&amp;f_id=009691e0f0"
             method="post"
             target="_blank"
             noValidate
             className="flex flex-col sm:flex-row gap-2"
           >
             <input
               type="email"
               name="EMAIL"
               placeholder="Your email"
               required
               className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto"
             />
             <button
               type="submit"
               className="px-4 py-2 bg-[#1a1a1a] text-white text-sm rounded-md hover:bg-gray-800"
             >
               Subscribe
             </button>
           </form>
          {message && <p className="mt-2 text-sm text-red-600">{message}</p>}

          <div className="mt-5 flex gap-4">
            <a href="https://www.instagram.com/unscripted.india/" className="text-gray-600 hover:text-gray-900 text-sm" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.x.com/UnscriptedInd" className="text-gray-600 hover:text-gray-900 text-sm" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500 px-4">
        <p>&copy; {new Date().getFullYear()} Unscripted India. All rights reserved.</p>
        <div className="mt-1 space-x-3">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
