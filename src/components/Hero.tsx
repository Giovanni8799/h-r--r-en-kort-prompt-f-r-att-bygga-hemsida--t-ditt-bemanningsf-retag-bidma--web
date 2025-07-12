import React from 'react';
import { ArrowRight, Users, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-bidma-gray to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Din partner inom <span className="text-bidma-blue">bemanning</span> och{' '}
              <span className="text-bidma-blue">rekrytering</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Vi hjälper företag att hitta rätt kompetens och kandidater att hitta sitt drömjobb. 
              Med över 10 års erfarenhet är vi din pålitliga partner på arbetsmarknaden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Hitta personal
                <ArrowRight size={20} />
              </a>
              <a href="#jobs" className="btn-secondary inline-flex items-center gap-2">
                Sök jobb
                <Briefcase size={20} />
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="flex items-center gap-3">
                <div className="bg-bidma-blue text-white p-3 rounded-lg">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Nöjda företag</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-bidma-blue text-white p-3 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2000+</div>
                  <div className="text-gray-600">Lyckade placeringar</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Team meeting"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-bidma-blue mb-1">98%</div>
              <div className="text-gray-600">Kundnöjdhet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;