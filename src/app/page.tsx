'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ImpactStats } from '@/components/home/ImpactStats';
import { AboutSection } from '@/components/home/AboutSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { FeaturedStory } from '@/components/home/FeaturedStory';
import { HowWeWork } from '@/components/home/HowWeWork';
import { EventsPreview } from '@/components/home/EventsPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { Transparency } from '@/components/home/Transparency';
import { VolunteerCTA } from '@/components/home/VolunteerCTA';
import { DonationCTA } from '@/components/home/DonationCTA';
import { StoriesPreview } from '@/components/home/StoriesPreview';
import { GalleryPreview } from '@/components/home/GalleryPreview';
import { Newsletter } from '@/components/home/Newsletter';
import { DonationModal } from '@/components/shared/DonationModal';

export default function HomePage() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [donatePurpose, setDonatePurpose] = useState('General Community Impact');
  const [donateAmount, setDonateAmount] = useState(1000);

  const handleOpenDonate = (purpose = 'General Community Impact', amount = 1000) => {
    setDonatePurpose(purpose);
    setDonateAmount(amount);
    setDonateModalOpen(true);
  };

  return (
    <main className="flex-1">
      {/* 2. Hero */}
      <HeroSection onOpenDonateModal={() => handleOpenDonate()} />

      {/* 3. Impact Statistics */}
      <ImpactStats />

      {/* 4. About */}
      <AboutSection />

      {/* 5. Programs */}
      <ProgramsSection onDonateToCause={(cause) => handleOpenDonate(cause)} />

      {/* 6. Featured Impact Story */}
      <FeaturedStory />

      {/* 7. How We Create Impact */}
      <HowWeWork />

      {/* 8. Events */}
      <EventsPreview />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. Transparency */}
      <Transparency />

      {/* 11. Volunteer CTA */}
      <VolunteerCTA />

      {/* 12. Donation CTA */}
      <DonationCTA />

      {/* 13. Stories */}
      <StoriesPreview />

      {/* 14. Gallery */}
      <GalleryPreview />

      {/* 15. Newsletter */}
      <Newsletter />

      {/* Global Donation Modal */}
      <DonationModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        initialAmount={donateAmount}
        initialPurpose={donatePurpose}
      />
    </main>
  );
}
