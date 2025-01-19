import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t py-4 bg-gray-50 p-4">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Finance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/mian-mohid-mohid/"
              className="text-gray-600 hover:text-blue-600"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.github.com/nexcodes"
              className="text-gray-600 hover:text-blue-600"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
