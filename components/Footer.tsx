export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Ora. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 