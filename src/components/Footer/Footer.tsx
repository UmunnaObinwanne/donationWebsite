import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-custom-brown text-white">
      {/* Top Bar */}
      <div className="w-full border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <p className="text-2xl font-bold">
                Stay informed about all latest news and developments:
              </p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-primary">
                  <Facebook size={40} />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Twitter size={40} />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Youtube size={40} />
                </Link>
                <Link href="#" className="hover:text-primary">
                  <Instagram size={40} />
                </Link>
              </div>
            </div>
            <Link href="#top" className="flex items-center gap-2 text-primary hover:text-gray-300">
              Back to top
              <ArrowUp size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full bg-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-md">
            <h4 className="mb-4 text-lg font-bold">Sign up for our E Newsletter</h4>
            <div className="flex flex-col gap-2 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded bg-gray-700 px-4 py-2 text-white"
              />
              <button className="whitespace-nowrap rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Our Work */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-primary">Our work</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Women's and children's health
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Emergencies and complex hospital care
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Mental health and psychosocial support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Disability
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Advocacy and campaigns
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-primary">Get involved</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Campaign with us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Challenge events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Ways to give
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Philanthropy
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-primary">Get in touch</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Media centre
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Job opportunities
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-300">
                  Feedback and complaints
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Company Info */}
        <div className="flex flex-col items-start justify-between gap-8 border-t border-gray-800 pt-8 text-left md:flex-row">
          <div>
            <p>
              <span className="font-bold">Medical Aid for Palestinians</span>
              {" · "}
              33a Islington Park Street, London, N1 1QB, United Kingdom
              {" · "}
              +44 (0)20 7226 4114
              {" · "}
              info@map.org.uk
              {" · "}
              <br className="hidden md:block" />
              <span className="text-sm text-gray-400">
                MAP is a Charitable Company Limited by Guarantee. Registered Number 3038352 England.
                Charity Registration No. 1045315.
              </span>
              {" · "}
              <br className="hidden md:block" />
              <Link href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              {" · "}
              <Link href="#" className="text-gray-400 hover:text-white">
                Website designed by Adept
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
