import React from 'react';
import { MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

const Jobs = () => {
  const jobs = [
    {
      title: 'Projektledare IT',
      company: 'Tech Solutions AB',
      location: 'Stockholm',
      type: 'Heltid',
      category: 'IT & Tech',
      description: 'Spännande roll som projektledare inom IT-branschen med fokus på agila metoder.'
    },
    {
      title: 'Ekonomiassistent',
      company: 'Finance Group',
      location: 'Göteborg',
      type: 'Deltid',
      category: 'Ekonomi',
      description: 'Vi söker en noggrann ekonomiassistent för löpande bokföring och fakturering.'
    },
    {
      title: 'Säljare B2B',
      company: 'Sales Partners',
      location: 'Malmö',
      type: 'Heltid',
      category: 'Försäljning',
      description: 'Driven säljare sökes för att expandera vår kundbas inom B2B-segmentet.'
    },
    {
      title: 'HR-specialist',
      company: 'People First AB',
      location: 'Uppsala',
      type: 'Heltid',
      category: 'HR',
      description: 'Erfaren HR-specialist för att driva och utveckla våra HR-processer.'
    }
  ];

  const categories = ['Alla', 'IT & Tech', 'Ekonomi', 'Försäljning', 'HR', 'Industri', 'Vård'];

  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lediga jobb
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Utforska våra aktuella tjänster och hitta din nästa karriärmöjlighet
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-gray-300 hover:border-bidma-blue hover:bg-bidma-blue hover:text-white transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {jobs.map((job, index) => (
            <div key={index} className="bg-bidma-gray rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 font-medium">{job.company}</p>
                </div>
                <span className="bg-bidma-blue text-white px-3 py-1 rounded-full text-sm">
                  {job.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{job.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {job.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {job.type}
                </div>
              </div>
              
              <a href="#" className="text-bidma-blue font-medium hover:text-blue-700 inline-flex items-center gap-2">
                Läs mer
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="btn-primary inline-flex items-center gap-2">
            Se alla lediga jobb
            <Briefcase size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Jobs;