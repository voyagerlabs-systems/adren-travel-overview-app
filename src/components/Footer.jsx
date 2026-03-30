import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
              <span className="material-symbols-outlined !text-sm">travel_explore</span>
            </div>
            <span className="font-extrabold text-lg">ADREN</span>
          </Link>
          <p className="text-sm text-gray-500 mb-6">
            Empowering travel businesses with AI-driven intelligence and global supply network.
          </p>
          <div className="flex gap-4">
            <a className="text-gray-400 hover:text-primary transition-colors" href="#" aria-label="Share">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a className="text-gray-400 hover:text-primary transition-colors" href="#" aria-label="Website">
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Product</h6>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link className="hover:text-primary transition-colors" to="/products">Supply Ecosystem</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/solutions">AI Engine</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/solutions">Travel CRM</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/products">Integrations</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Company</h6>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/careers">Careers</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">Sustainability</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h6>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a className="hover:text-primary transition-colors" href="#">Developer Docs</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">API Status</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Trust Center</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-medium">
        <p>&copy; {new Date().getFullYear()} ADREN Travel. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
