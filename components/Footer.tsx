import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Ora. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/jeff-soriano/ora"
              className="text-gray-400 hover:text-gray-500"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={"2rem"} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jeff-soriano/"
              className="text-gray-400 hover:text-gray-500"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={"2rem"} />
            </Link>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-gray-500"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-gray-500"
              aria-label="Terms of Service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
