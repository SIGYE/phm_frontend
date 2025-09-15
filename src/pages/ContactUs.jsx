import React from 'react'
import Layout from '../components/Layout';
import { FiMail, FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import nav from '../assets/nav.jpg';

const ContactUs = () => {
  return (
    <Layout>
      <section className="relative h-[50vh] w-full">
        <img
          src={nav}
          alt="Church background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-6 left-6 z-10 text-white ml-6 mb-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-sm">HOME | CONTACT</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-[40px] font-bold text-gray-900">Connect With Us</h3>
              <p className="text-gray-600 mt-2 text-[17px]">
                Have questions about our ministries or need prayer and support?
                Fill out the form below and our pastoral team will respond promptly.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <span className= "text-lg"><CiLocationOn/></span>
                Kigali, Rwanda
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg"><FiMail/></span>
                info@phm.com
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg"><FiPhone/></span>
                0788998999
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 text-[23px]">Prayer & Support</h4>
                <p className="text-gray-600 mt-1 text-[17px]">
                  Our pastoral team is available to provide spiritual guidance,
                  prayer support, and care for any concerns or needs you may have.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-[23px]">Share Your Heart</h4>
                <p className="text-gray-600 mt-1 text-[17px]">
                  We value your thoughts and are continually seeking ways
                  to better serve our church family. Your input helps us
                  grow together in faith and community.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
     <div className="bg-[#F9F9F9] shadow-lg rounded-2xl p-8 max-w-2xl mx-auto">
  <h2 className="text-xl font-semibold text-gray-800 mb-2">
    We’d Love to Hear From You
  </h2>
  <p className="text-gray-500 mb-6">You can reach us anytime</p>

  <form className="space-y-6">
    {/* Row 1: Name + Email */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Email Address</label>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"
        />
      </div>
    </div>

    {/* Row 2: Phone + Subject */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 mb-2">Phone Number</label>
        <div className="flex">
          <select className="border border-gray-300 rounded-l-lg px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:outline-none">
            <option>+250</option>
            <option>+254</option>
            <option>+255</option>
          </select>
          <input
            type="tel"
            placeholder="Phone number"
            className="w-full border border-gray-300 rounded-r-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Subject</label>
        <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:outline-none">
          <option>Select a subject</option>
          <option>General Inquiry</option>
          <option>Prayer Request</option>
          <option>Event Info</option>
        </select>
      </div>
    </div>

    {/* Message */}
    <div>
      <label className="block text-gray-700 mb-2">How can we help?</label>
      <textarea
        rows="5"
        maxLength="1000"
        placeholder="Your message..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:outline-none"
      ></textarea>
      <div className="text-right text-sm text-gray-500 mt-1">0/200</div>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
    >
      Submit
    </button>
  </form>
</div>

        </div>

        {/* Map */}
        <div className="mt-16">
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.858498144591!2d30.0586!3d-1.9579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f4f5faaaaa%3A0x7bc64e96df22f7e3!2sKigali%20Rwanda!5e0!3m2!1sen!2srw!4v1697038859835"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}

export default ContactUs
