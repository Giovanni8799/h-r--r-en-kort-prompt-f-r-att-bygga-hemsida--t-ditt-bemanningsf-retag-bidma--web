import React from 'react';
import { Award, Heart, Target, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Kvalitet',
      description: 'Vi levererar alltid högsta kvalitet i våra tjänster och kandidater'
    },
    {
      icon: Heart,
      title: 'Engagemang',
      description: 'Vi brinner för att skapa perfekta matchningar mellan företag och talanger'
    },
    {
      icon: Target,
      title: 'Resultat',
      description: 'Vi fokuserar på att leverera mätbara resultat för våra kunder'
    },
    {
      icon: Users,
      title: 'Partnerskap',
      description: 'Vi bygger långsiktiga relationer baserade på förtroende'
    }
  ];

  return (
    <section id="about" className="py-20 bg-bidma-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Om Bidma
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Sedan 2013 har Bidma varit en ledande aktör inom bemanning och rekrytering i Sverige. 
              Vi kombinerar djup branschkunskap med modern teknologi för att leverera de bästa lösningarna 
              för våra kunder.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Vårt team består av erfarna rekryterare och HR-specialister som förstår vikten av att 
              hitta rätt person för rätt position. Vi arbetar inom flera branscher och har byggt upp 
              ett omfattande nätverk av kvalificerade kandidater.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-bidma-blue mb-2">10+</div>
                <div className="text-gray-600">År av erfarenhet</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bidma-blue mb-2">15</div>
                <div className="text-gray-600">Dedikerade medarbetare</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Bidma team"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Våra värderingar</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="bg-bidma-light-blue/10 text-bidma-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;