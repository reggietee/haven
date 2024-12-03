import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            Visit us for a tour or reach out to learn more about Haven.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label className="block text-dark mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-dark mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-dark mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <FiMapPin className="text-primary w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold text-dark">Location</h3>
              </div>
              <p className="text-dark">
                242 Mary St, Unit 8
                <br />
                Niagara-on-the-Lake, ON
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <FiPhone className="text-primary w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold text-dark">Phone</h3>
              </div>
              <p className="text-dark">(289) 272-5333</p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <FiMail className="text-primary w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold text-dark">Email</h3>
              </div>
              <p className="text-dark">reggie@havenworkspace.ca</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.4762459520313!2d-79.07427492345967!3d43.25497797112121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d35f66e81d3c37%3A0x5f32c54a0f6fc382!2s242%20Mary%20St%2C%20Niagara-on-the-Lake%2C%20ON%20L0S%201J0!5e0!3m2!1sen!2sca!4v1699000000000!5m2!1sen!2sca"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}