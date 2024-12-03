import React from 'react';
import Countdown from 'react-countdown';

export default function Pricing() {
  const launchDate = new Date('2024-12-11T17:00:00.000Z'); // 12pm EST

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Launching December 2024
          </h2>
          <div className="text-lg text-dark max-w-2xl mx-auto space-y-4">
            <p>
              Sign up for early access to be first in line for our membership sale.
              Limited spots available!
            </p>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Early Access Membership Sale Countdown</h3>
              <Countdown
                date={launchDate}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary">{days}</div>
                      <div className="text-sm text-dark">Days</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary">{hours}</div>
                      <div className="text-sm text-dark">Hours</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary">{minutes}</div>
                      <div className="text-sm text-dark">Minutes</div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-primary">{seconds}</div>
                      <div className="text-sm text-dark">Seconds</div>
                    </div>
                  </div>
                )}
              />
            </div>
            <div className="mt-8">
              <a
                href="https://www.indiegogo.com/projects/haven-workspace-coworking-in-niagara-on-the-lake/coming_soon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 font-semibold inline-block"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}