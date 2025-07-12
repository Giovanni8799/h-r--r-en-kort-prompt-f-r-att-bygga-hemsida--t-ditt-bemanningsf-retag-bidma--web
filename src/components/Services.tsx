import React from 'react';
import { Users, Search, Lightbulb, Clock, Shield, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Personaluthyrning',
      description: 'Flexibel bemanning för kortare eller längre uppdrag. Vi matchar rätt kompetens med era behov.',
      features: ['Snabb process', 'Kvalitetssäkrad personal', 'Flexibla lösningar']
    },
    {
      icon: Search,
      title: 'Rekrytering',
      description: 'Vi hjälper er hitta och rekrytera de bästa talangerna för permanenta tjänster.',
      features: ['Omfattande kandidatnätverk', 'Noggrann screening', 'Garanti på rekryteringar']
    },
    {
      icon: Lightbulb,
      title: 'HR-konsulting',
      description: 'Strategisk rådgivning och stöd inom HR för att optimera er organisation.',
      features: ['Kompetensanalys', 'Organisationsutveckling', 'HR-strategier']
    }
  ];

  const benefits = [
    { icon: Clock, text: 'Snabb och effektiv process' },
    { icon: Shield, text: 'Kvalitetssäkrade kandidater' },
    { icon: TrendingUp, text: 'Branschexpertis' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vi erbjuder skräddarsydda lösningar inom bemanning och rekrytering för att möta just era behov
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-bidma-gray rounded-xl p-8 hover:shadow-xl transition-shadow">
              <div className="bg-bidma-blue text-white w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-bidma-blue rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-bidma-blue text-white rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Därför väljer företag Bidma</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <benefit.icon size={32} className="flex-shrink-0" />
                <span className="text-lg">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;