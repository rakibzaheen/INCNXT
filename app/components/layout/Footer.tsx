import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Entity Types</h3>
            <ul>
              <li className="mb-2"><Link href="#" className="hover:text-white">LLC</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">S Corporation</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">C Corporation</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Nonprofit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Resources</h3>
            <ul>
              <li className="mb-2"><Link href="#" className="hover:text-white">Renew Registered Agent</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Filing Times</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Why Choose Us</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Testimonials</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Entity Comparison Chart</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">LLC State Info</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Corporate State Info</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Corporate/LLC Kit</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Services</h3>
            <ul>
              <li className="mb-2"><Link href="#" className="hover:text-white">Registered Agent</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Annual Report</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Certificate Of Good Standing</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Change Of Registered Agent</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Foreign Qualification</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Amendment</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Dissolution</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Business License Search</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">File Business Taxes</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Fictitious Business Name</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">File S Corp Tax Election</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Review Entity Types</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Manage Your Company</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Check Order Status</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Learn More</Link></li>
              <li className="mb-2"><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Blog</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-white">About</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Careers</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Bizee for Professionals</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Partnerships</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Affiliates</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white uppercase mb-4">Support</h3>
            <p className="mb-2">Support is available</p>
            <p className="mb-4">Monday - Friday from 9 a.m. to 6 p.m. CST</p>
            <p className="font-bold text-lg text-white">1 (888) 462-3453</p>
            <p className="text-lg text-white">support@bizee.com</p>
            <ul className="mt-4">
              <li className="mb-2"><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Sitemap</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Cancellation Policy</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Legal Disclaimer</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Glossary</Link></li>
              <li className="mb-2"><Link href="#" className="hover:text-white">Cookie Settings</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <p>Follow us</p>
              <Link href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.58-." /></svg></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.2,8.3c-0.3-1.2-1.2-2.2-2.4-2.4C17.6,5.6,12,5.6,12,5.6s-5.6,0-6.8,0.3c-1.2,0.3-2.2,1.2-2.4,2.4C2.4,9.5,2.4,12,2.4,12 s0,2.5,0.3,3.7c0.3,1.2,1.2,2.2,2.4,2.4C6.4,18.4,12,18.4,12,18.4s5.6,0,6.8-0.3c1.2-0.3,2.2-1.2,2.4-2.4c0.3-1.2,0.3-3.7,0.3-3.7 S21.6,9.5,21.2,8.3z M9.6,14.4V9.6l4.8,2.4L9.6,14.4z" /></svg></Link>
            </div>
            <div className="text-sm text-gray-400">
              <p>incnx is NOT a law firm and does NOT provide legal advice. Use of our products and services is governed by our <Link href="#" className="underline hover:text-white">Terms of Service</Link> and <Link href="#" className="underline hover:text-white">Privacy Policy</Link>. The information you provide to bizee is NOT protected by attorney-client privilege.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mt-4 md:mt-0">
              <p>&copy; 2025 Bizee All Rights Reserved</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">incnx</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;