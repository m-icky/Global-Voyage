import React from 'react';
import HeroSection from '../components/HeroSection';
import { TrustStrip, UniqueSection } from '../components/TrustStrip';
import StatsSection from '../components/StatsSection';
import ScrollyTelling from '../components/ScrollyTelling';
import { BlogPreview, GalleryPreview } from '../components/BlogPreview';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <StatsSection />
      <ScrollyTelling />
      <UniqueSection />
      <BlogPreview />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
