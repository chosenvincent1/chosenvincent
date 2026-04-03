import HeroSection from "../../components/Dev/HeroSection";
import AboutSection from "../../components/Dev/AboutSection";
import ProjectsSection from "../../components/Dev/ProjectsSection";
import CompaniesSection from "../../components/Dev/CompaniesSection";
import ContactSection from "../../components/Dev/ContactSection";
import FooterSection from "../../components/Shared/FooterSection";

import { Helmet } from 'react-helmet-async'

const DevPage = () => {
  return (
    <>
        <Helmet>
          <title>Chosen Vincent | Frontend Developer</title>
          <meta name="description" content="Frontend developer with 3+ years building production web applications with React, TypeScript, and Tailwind CSS." />
          <meta name="keywords" content="Chosen Vincent, frontend developer, React developer, TypeScript, Nigeria, web developer" />
          <meta property="og:title" content="Chosen Vincent | Frontend Developer" />
          <meta property="og:description" content="Frontend developer with 3+ years building production web applications with React, TypeScript, and Tailwind CSS." />
          <meta property="og:image" content="https://chosenvincent.vercel.app/images/Chosen_DP.jpeg" />
          <meta property="og:url" content="https://chosenvincent.vercel.app/development" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chosen Vincent | Frontend Developer" />
          <meta name="twitter:description" content="Frontend developer with 3+ years building production web applications with React, TypeScript, and Tailwind CSS." />
          <meta name="twitter:image" content="https://chosenvincent.vercel.app/images/Chosen_DP.jpeg" />
          <link rel="canonical" href="https://chosenvincent.vercel.app/development" />
        </Helmet>

        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CompaniesSection />
        <ContactSection />
        <FooterSection />
    </>
  )
}

export default DevPage