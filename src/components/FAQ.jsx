import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is a coworking space, and how is it different from working from home or a coffee shop?',
      answer: 'A coworking space is a shared workspace designed for productivity, collaboration, and networking. Unlike working from home, you'll have access to professional amenities like private offices, high-speed internet, and meeting rooms. And unlike coffee shops, you'll find a quiet, dedicated environment with a community of like-minded professionals.'
    },
    {
      question: 'When will the coworking space officially open?',
      answer: 'We're planning to launch our initial membership sale via Indiegogo mid December. Sign up for the early access sale to be first to join. By signing up for our pre-launch list, you'll receive updates, exclusive perks, and early access to membership offers.'
    },
    {
      question: 'How much will it cost to join, and what membership options will you offer?',
      answer: 'We'll have flexible membership options to fit your needs, including daily passes, part-time access, and monthly memberships. Pricing details will be announced mid December, but early supporters will enjoy discounted rates and exclusive perks.'
    },
    {
      question: 'What kinds of people work in a coworking space? Will it be a good fit for me?',
      answer: 'Our coworking space is perfect for freelancers, remote workers, entrepreneurs, and small business teams. Whether you need a quiet desk, a meeting space, or a chance to network with other professionals, you'll find it here.'
    },
    {
      question: 'Where will the coworking space be located, and will parking or public transport be available?',
      answer: 'We're located at 242 Mary St, Unit 8, in Niagara-on-the-Lake, chosen for its accessibility and proximity to great amenities. Parking is free for members in the plaza, and public transportation stops are just a short walk away.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            Everything you need to know about Haven Workspace
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Disclosure key={faq.question}>
                {({ open }) => (
                  <div className="bg-gray-50 rounded-lg">
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
                      <span className="font-semibold text-dark">{faq.question}</span>
                      <FiChevronDown
                        className={`w-5 h-5 text-primary ${
                          open ? 'transform rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-dark">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}