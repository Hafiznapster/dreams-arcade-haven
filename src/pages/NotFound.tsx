
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-hotel-cream">
      <div className="text-center px-4 max-w-lg animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-hotel-green mb-4">404</h1>
        <p className="text-2xl md:text-3xl text-hotel-dark mb-6">Oops! Page not found</p>
        <p className="text-gray-600 mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <Link to="/" className="inline-flex items-center button-primary">
          <Home className="mr-2 w-4 h-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
