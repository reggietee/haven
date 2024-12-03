import React from 'react';

export default function Founders() {
  const founders = [
    {
      name: 'Madaline Zannes',
      title: 'Co-Founder',
      description: 'Lawyer and founder of Zannes Law Firm',
      image: '/madaline.jpg'
    },
    {
      name: 'Reggie Tan',
      title: 'Co-Founder',
      description: 'Fractional Chief Marketing Officer and founder of Story Mode',
      image: '/reggie.jpg'
    }
  ];

  const pressLogos = [
    { name: 'CBC', image: '/press/cbc.svg' },
    { name: 'Forbes', image: '/press/forbes.svg' },
    { name: 'MIT Technology Review', image: '/press/mit.svg' },
    { name: 'Wired', image: '/press/wired.svg' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Meet the Founders
          </h2>
          <p className="text-lg text-dark max-w-2xl mx-auto">
            As Niagara-on-the-Lake residents, we're committed to creating a space that serves our local business community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder) => (
            <div key={founder.name} className="text-center">
              <div className="mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-dark mb-2">{founder.name}</h3>
              <p className="text-primary font-medium mb-2">{founder.title}</p>
              <p className="text-dark">{founder.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg">
          <p className="text-center text-lg text-dark/80 mb-8">Our founders have been featured in:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-2xl mx-auto">
            {pressLogos.map((press) => (
              <div key={press.name} className="grayscale hover:grayscale-0 transition-all">
                <img
                  src={press.image}
                  alt={`${press.name} logo`}
                  className="h-6 w-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}