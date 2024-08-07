import React from 'react';
import Button from './Button';
import Features from './Features';
import ProgramCard from './ProgramCard';

const OurPrograms = () => {
  return (
    <section id="ourprograms" className="mt-12 mx-32 bg-white">
      <div className="text-center text-5xl font-serif font-normal text-primary pb-10">
        Our Programs
      </div>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0">
        <ProgramCard
          image="../src/assets/Waterfall.png"
          title="Preserving Waterfall Biodiversity: Our Commitment to Conservation"
          description="Preserving Waterfall Biodiversity: Our commitment to conservation for sustained beauty."
          buttonText="Join Us"
        />
        <ProgramCard
          image="../src/assets/Birds.png"
          title="Birds Conservation in Arun Valley: Safeguarding Avian Biodiversity"
          description="Surveying and safeguarding Arun Valley's birdlife for a thriving ecosystem."
          buttonText="Join Us"
        />
        <ProgramCard
          image="../src/assets/pythonsafari.png"
          title="Python Discovery: Navigating the Wild World of Snakes"
          description="Python Safari for an up-close look at the fascinating lives of these elegant snakes in the wild."
          buttonText="Join Us"
        />
      </div>
      <div className="flex justify-center items-center m-6">
        <Button variant="secondary">Explore More</Button>
      </div>
      <Features />
    </section>
  );
};

export default OurPrograms;
