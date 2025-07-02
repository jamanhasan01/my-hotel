import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import logo from '../../../public/logo.png'
const Footer = () => (
  <footer className="bg-[var(--main)] text-white mt-16 py-12">
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <Image className="mb-5" src={logo} width={100} height={200}></Image>
        <p className="">Your perfect destination for hotel bookings worldwide.</p>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><Link href="/" className="">Home</Link></li>
          <li><Link href="/hotels" className="">Hotels</Link></li>
          <li><Link href="/about" className="">About Us</Link></li>
          <li><Link href="/contact" className="">Contact Us</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><Link href="/faq" className="">FAQ</Link></li>
          <li><Link href="/terms-of-service" className="">Terms of Service</Link></li>
          <li><Link href="/privacy-policy" className="">Privacy Policy</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li className="flex items-center"><MapPin className="w-4 h-4 mr-2"/>123 Hotel St, Algiers</li>
          <li className="flex items-center"><Phone className="w-4 h-4 mr-2"/>+123 456 7890</li>
          <li className="flex items-center"><Mail className="w-4 h-4 mr-2"/>contact@dayf.com</li>
        </ul>
      </div>
    </div>
    <div className="container mx-auto px-4 sm:px-8 lg:px-16 text-center mt-8 border-t pt-6">
      <p className="">&copy; 2024 DAYF. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;