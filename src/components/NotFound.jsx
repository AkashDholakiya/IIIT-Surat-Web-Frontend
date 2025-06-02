import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 bg-blue-100 rounded-full opacity-70"></div>
          </div>
          <h1 className="relative text-9xl font-bold text-custom-blue">404</h1>
        </div>
        
        <h2 className="text-3xl font-semibold text-custom-blue mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          We are sorry, the page you requested could not be found. 
          Please check the URL or navigate back to the homepage.
        </p>
        
        <Link 
          to="/" 
          className="inline-block bg-custom-blue text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
