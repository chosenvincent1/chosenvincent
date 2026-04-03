import HeroSection from "../../components/Writing/HeroSection";
import AboutSection from "../../components/Writing/AboutSection";
import SampleProjects from "../../components/Writing/SampleProjects";
import CompaniesSection from "../../components/Writing/CompaniesSection";
import ContactSection from "../../components/Writing/ContactSection";
import FooterSection from "../../components/Shared/FooterSection";
import { Helmet } from 'react-helmet-async'

const WritingPage = () => {
  return (
    <>
        <Helmet>
          <title>Chosen Vincent | Technical Writer for Developers</title>
          <meta name="description" content="Technical writer specializing in developer documentation, API docs, and tutorials. Published 100+ articles for B2B SaaS companies." />
          <meta name="keywords" content="Chosen Vincent, technical writer, developer documentation, API documentation, technical content writer, Nigeria, SaaS technical writer" />
          <meta property="og:title" content="Chosen Vincent | Technical Writer for Developers" />
          <meta property="og:description" content="Technical writer specializing in developer documentation, API docs, and tutorials. Published 100+ articles for B2B SaaS companies." />
          <meta property="og:image" content="https://chosenvincent.vercel.app/images/Chosen_DP.jpeg" />
          <meta property="og:url" content="https://chosenvincent.vercel.app/writing" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Chosen Vincent | Technical Writer for Developers" />
          <meta name="twitter:description" content="Technical writer specializing in developer documentation, API docs, and tutorials." />
          <meta name="twitter:image" content="https://chosenvincent.vercel.app/images/Chosen_DP.jpeg" />
          <link rel="canonical" href="https://chosenvincent.vercel.app/writing" />
        </Helmet>
        
        <HeroSection />
        <AboutSection />
        <SampleProjects />
        <CompaniesSection />
        <ContactSection />
        <FooterSection />
    </>
  )
}

export default WritingPage