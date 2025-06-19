// 

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Correct Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll'; // ScrollLink for smooth scrolling
import "../styles/global.css";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState("contact");

  const contactSections = [
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <p className="mb-5 mt-3 md:text-base text-para">
          We are here to help! Whether you have questions, need assistance, or want to book your next
          unforgettable journey, feel free to get in touch with us. Our team is always ready to assist you.
        </p>
      ),
    },
    {
      id: "Address",
      title: "Office Address",
      content: (
        <p className="md:text-base text-para">
          <span className="font-semibold">BizarreXpedition™ Services Pvt. Ltd.</span>
          <br /> 13A/4, THDC Near Shivalik Mart,
          <br /> Near Ram Mandir, Ranipur, Haridwar
          <br /> Uttarakhand, India - 249407
        </p>
      ),
    },
    {
      id: "Numbers",
      title: "Phone Numbers",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li>
            <span className="font-semibold">Customer Support : </span>
            <Link to="tel:+919873152953" target="_blank" className="text-blue-600 md:text-base text-para ">
              +91-98731-52953
            </Link>
          </li>
          <li>
            <span className="font-semibold">Booking Assistance : </span>
            <Link to="tel:+917252885525" target="_blank" className="text-blue-600 md:text-base text-para ">
              +91-7252-885-525
            </Link>
          </li>
          <li>
            <span className="font-semibold">General Inquiries : </span>
            <Link to="tel:+919897581113" target="_blank" className="text-blue-600 md:text-base text-para ">
              +91-9897-581-113
            </Link>
          </li>
        </ul>
      ),
    },
    {
      id: "Email",
      title: "Email",
      content: (
        <p>
          <span className="font-semibold md:text-base text-para">General Inquiries : </span>
          <Link to="mailto: info@bizarexpedition.com" target="_blank" className="text-blue-600 md:text-base text-para underline underline-offset-2">
            info@bizarrexpedition.com
          </Link>
        </p>
      ),
    },
    {
      id: "WhatsApp",
      title: "WhatsApp",
      content: (
        <p>
          <span className="font-semibold md:text-base text-para">Chat with us directly on WhatsApp : </span>
          <Link to="https://api.whatsapp.com/send/?phone=919897581113" target="_blank" className="text-blue-600 md:text-base text-para">
            +91-9897-581-113
          </Link>
        </p>
      ),
    },
    {
      id: "SocialMedia",
      title: "Follow Us on Social Media",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li><span className="font-semibold">Instagram : </span>
            <Link to="https://www.instagram.com/bizarexpedition" target="_blank" className="text-blue-600">@bizarrexpedition</Link>
          </li>
          <li><span className="font-semibold">Facebook : </span>
            <Link to="https://www.facebook.com/bizareX" target="_blank" className="text-blue-600">BizareX</Link>
          </li>
          <li><span className="font-semibold">Twitter : </span>
            <Link to="https://twitter.com/bizarexpedition" target="_blank" className="text-blue-600">@BizareXpedition</Link>
          </li>
          <li><span className="font-semibold">LinkedIn : </span>
            <Link to="https://www.linkedin.com/company/13630320/" target="_blank" className="text-blue-600">BizareXpedition</Link>
          </li>
          <li><span className="font-semibold">YouTube : </span>
            <Link to="https://youtube.com" target="_blank" className="text-blue-600">@BizarexpeditionInn</Link>
          </li>
        </ul>
      ),
    },
    {
      id: "OfficeHours",
      title: "Office Hours",
      content: (
        <ul className="list-disc ml-8 md:text-base text-para">
          <li><span className="font-semibold">Monday to Saturday : </span> 9:00 AM – 7:00 PM</li>
          <li><span className="font-semibold">Sunday : </span> Closed</li>
        </ul>
      ),
    },
  ];

  return (
    <>
      {/* Hero section start */}
      <div className='md:block hidden'>
        <div className='w-full md:h-[480px] xl:h-[500px] flex relative'>
          <div className='w-[30%] h-full bg-black flex items-center justify-end'></div>
          <div className='relative w-[80%] h-full flex'>
            <img src="/src/assets/contact.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
            <div className="absolute w-full h-full bg-gradient-to-r from-black to-gray"></div>
          </div>
          <div className='w-full h-full absolute'>
            <div className='w-[60%] h-full flex items-center justify-end px-16'>
              <div className='w-full flex flex-col justify-center items-center'>
                <h2 className="xl:text-[55px] md:text-[35px] leading-tight uppercase font-bold text-[#D45426] text-center">
                  Contact us <br /> <span className='text-white'>We are here to help</span>
                </h2>
                <p className="my-5 text-base text-white text-center">
                  We are here to help! Whether you have a question about your booking, need assistance with your travel plans, or just want to know more about our services, feel free to get in touch with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small devices */}
      <div className='md:hidden'>
        <div className='w-full flex items-center justify-center bg-black p-5'>
          <div className='w-full flex flex-col justify-center items-center'>
            <h2 className="text-[24px] leading-tight uppercase font-bold text-[#D45426] text-center">
              Contact us <br /> <span className='text-white'>We are here to help</span>
            </h2>
            <p className="my-5 text-sm text-white text-center">
              We are here to help! Whether you have a question about your booking, need assistance with your travel plans, or just want to know more about our services, feel free to get in touch with us.
            </p>
          </div>
        </div>
        <div className='relative w-full h-52'>
          <img src="/src/assets/contact.jpg" width={200} height={100} alt="" className='relative w-full h-full' />
        </div>
      </div>
      {/* Hero section end */}

      {/* Content Section */}
      <div className="container-wrapper py-10">
        <div className="grid lg:grid-cols-3 gap-7">
          <div>
            <div className="sticky top-5 z-10 bg-white shadow-md rounded-md md:px-10 md:py-7 px-5 py-5">
              {contactSections.map((section) => (
                <ScrollLink
                  key={section.id}
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setActiveIndex(section.id)}
                >
                  <p
                    className={`pl-3 md:text-md text-base font-medium mb-4 hover:cursor-pointer ${activeIndex === section.id
                      ? "border-l-4 border-l-orange-500 text-black"
                      : "text-gray-400"
                      }`}
                  >
                    {section.title}
                  </p>
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="md:px-10 md:py-7 px-5 py-5 shadow-md rounded-md lg:col-span-2">
            {contactSections.map((section) => (
              <div key={section.id} id={section.id} className="mb-6">
                <h2 className="md:text-lg text-md font-semibold mb-1">{section.title}</h2>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
