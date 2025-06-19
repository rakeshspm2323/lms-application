import { Link } from "react-router-dom";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-700">
        <div className="container-wrapper pt-5 md:pb-2 pb-3">
          <div className="grid md:grid-cols-4 lg:gap-6 md:gap-3 gap-5 mx-5">
            <div>
              <h3 className="text-md font-semibold mb-3">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:underline text-gray-500 hover:text-gray-700">Home</Link>
                </li>
                <li>
                  <Link to="/about-us" className="hover:underline text-gray-500 hover:text-gray-700">About</Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:underline text-gray-500 hover:text-gray-700">Contact</Link>
                </li>
              </ul>
            </div>
            {/* Useful Links */}
            <div>
              <h3 className="text-md font-semibold mb-3">Useful Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="#" className="hover:underline text-gray-500 hover:text-gray-700">Support</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline text-gray-500 hover:text-gray-700">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline text-gray-500 hover:text-gray-700">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            {/* Contact Us */}
            <div>
              <h3 className="text-md font-semibold mb-3">Contact Us</h3>
              <Link
                to="mailto:rakeshspm2323@gmail.com"
                className="flex space-x-2 items-center text-sm hover:underline text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <p>rakeshspm2323@gmail.com</p>
              </Link>
              <Link
                to="tel:+918084863546"
                className="flex space-x-2 items-center text-sm mt-3 hover:underline text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faPhone} />
                <p>+91 8084863546</p>
              </Link>
              <p className="text-sm flex items-center space-x-2 mt-3 text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Patna, Bihar, India</span>
              </p>
            </div>
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-2">
                <img
                  src="/src/assets/logo.png"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="w-10 h-10"
                />
                <h2 className="text-xl font-bold bg-[linear-gradient(90deg,#FC466B_0%,#3F5EFB_100%)] bg-clip-text text-transparent">
                  LMS Application
                </h2>
              </div>
              <p className="mt-2 font-medium">Keep learning all year round!</p>
              <p className="text-xs">
                Your trusted companion for exploring knowledge, enhancing skills, and mastering subjects at your own pace.
              </p>
              <div className="flex space-x-5 mt-2">
                <Link
                  to="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-wrapper">
          <hr />
          <div className="py-2">
            <p className="text-xs">
                *Caution: Beware of Fake Promotions or Offers *Please be cautious and do not engage with any promotional emails, 
                SMS, or web links that ask you to click on a link and provide your personal details. 
                All authorized communications from LMS Application Services will come exclusively from our registered domains: 
                @lmsapplication.com, or @lmsapplication.in. For any inquiries, you can also reach us through our official WhatsApp channel at 8084863546. 
                * LMS Application Services is not liable for any fraudulent or misleading communications that do not originate from our official domains.
            </p>
          </div>
          <hr />                  
          <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-2 py-2">
            <div className="flex lg:justify-center items-center">
              <span className="dark:text-gray-400 md:text-sm text-xs">
                © 2025 Copyright 1986. All Rights Reserved.
              </span>
              <span className="dark:text-gray-400 md:text-sm text-xs md:block hidden ml-1">
                | Country India
              </span>
              <img
                width={80}
                height={80}
                src="/src/assets/indian-circle.png"
                className="h-6 w-6 object-cover ml-2"
                alt="indian flag"
              />
              <img
                width={80}
                height={80}
                src="/src/assets/swastik.png"
                className="h-6 w-6 object-contain ml-2"
                alt="swastik"
              />
            </div>
            {/* <div className="flex lg:justify-center items-center md:gap-2 gap-3">
              <img
                src="/assets/Affiliation 1.png"
                width={80}
                height={80}
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 1"
              />
              <img
                width={80}
                height={80}
                src="/assets/Affiliation 2.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 2"
              />
              <img
                width={80}
                height={80}
                src="/assets/Affiliation 3.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 3"
              />
              <img
                width={80}
                height={80}
                src="/assets/Affiliation 4.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 4"
              />
              <img
                width={80}
                height={80}
                src="/assets/Affiliation 5.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 5"
              />
              <img
                width={80}
                height={80}
                src="/assets/Affiliation 6.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 6"
              />
              <img
                width={80}
                height={80}
                src="/assets/Affiliation 1.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 1"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
