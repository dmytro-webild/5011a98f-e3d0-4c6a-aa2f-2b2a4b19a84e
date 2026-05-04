"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextAbout from '@/components/sections/about/TextAbout';
import { Shield, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="large"
        background="grid"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Sulaiman Trading"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "rotated-rays-animated-grid",
      }}
      title="Sulaiman Trading: The Future of 3D Markets"
      description="Experience unparalleled precision, real-time analytics, and immersive 3D visualizations. Elevate your portfolio with Sulaiman's professional trading tools."
      buttons={[
        {
          text: "Get Started",
          href: "#pricing",
        },
        {
          text: "Explore Features",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/futuristic-digital-user-interface-dashboard_53876-115874.jpg?_wi=1"
      imageAlt="Sulaiman Trading Platform Interface"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Empowering Traders Worldwide"
      buttons={[
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Ultra-Fast Execution",
          description: "Execute trades in milliseconds with our low-latency infrastructure.",
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-small-fiber-optic-lights_23-2148241394.jpg?_wi=1",
          imageAlt: "Execution speed icon",
        },
        {
          title: "Institutional Security",
          description: "Multi-layered encryption ensures your assets remain safe around the clock.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-robot-with-shield_1048-5702.jpg",
          imageAlt: "Security shield icon",
        },
        {
          title: "Advanced Analytics",
          description: "Deep data processing to give you the edge in competitive markets.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-graphs-figures-laptop-left-open-desk-empty-office_482257-84546.jpg",
          imageAlt: "Data analytics icon",
        },
      ]}
      title="Built for Precision"
      description="Our platform is engineered for speed, security, and analytical depth."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Essential Tier",
          price: "Basic Access",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-hands-laptop-credit-card-shopping-online-payment_1301-3467.jpg",
        },
        {
          id: "p2",
          name: "Gold Member",
          price: "Intermediate Access",
          imageSrc: "http://img.b2bpic.net/free-photo/hand-using-card-buy-online-with-laptop_24972-1222.jpg",
        },
        {
          id: "p3",
          name: "Premium Tier",
          price: "Advanced Access",
          imageSrc: "http://img.b2bpic.net/free-photo/proud-woman-holding-card-with-left-hand_1149-133.jpg",
        },
        {
          id: "p4",
          name: "Portfolio Mgmt",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-fintech-cards_24908-56731.jpg",
        },
        {
          id: "p5",
          name: "Algo Engine",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-office-ready-stock-trading_482257-121465.jpg",
        },
        {
          id: "p6",
          name: "Analytics Pro",
          price: "Custom Pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-accounting-sales-statistics-computer-display_482257-122982.jpg",
        },
      ]}
      title="Our Trading Tiers"
      description="Select the plan that aligns with your trading goals and capital requirements."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          title: "Standard",
          price: "$49",
          period: "/mo",
          features: [
            "Real-time Data",
            "Mobile Access",
            "24/7 Support",
          ],
          button: {
            text: "Choose Standard",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/conceptual-image-showcasing-businessman-digital-environment_482257-126562.jpg",
          imageAlt: "professional trading station analytics",
        },
        {
          id: "pro",
          title: "Pro",
          price: "$129",
          period: "/mo",
          features: [
            "Advanced Charts",
            "Algo Bots",
            "Custom Indicators",
          ],
          button: {
            text: "Choose Pro",
          },
          imageSrc: "http://img.b2bpic.net/free-vector/futuristic-digital-user-interface-dashboard_53876-115874.jpg?_wi=2",
          imageAlt: "professional trading station analytics",
        },
        {
          id: "enterprise",
          title: "Enterprise",
          price: "$299",
          period: "/mo",
          features: [
            "Dedicated Server",
            "VIP Manager",
            "API Access",
          ],
          button: {
            text: "Choose Enterprise",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/blurred-small-fiber-optic-lights_23-2148241394.jpg?_wi=2",
          imageAlt: "professional trading station analytics",
        },
      ]}
      title="Transparent Pricing"
      description="No hidden fees, just pure professional trading power."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "99.9%",
          title: "Uptime",
          description: "Guaranteed platform reliability.",
          icon: Shield,
        },
        {
          id: "m2",
          value: "2.5M+",
          title: "Trades",
          description: "Executed monthly without fail.",
          icon: Zap,
        },
        {
          id: "m3",
          value: "500k",
          title: "Users",
          description: "Global active trading community.",
          icon: Users,
        },
      ]}
      title="Platform Excellence"
      description="Metrics that define Sulaiman Trading's industry standing."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          date: "Jan 2025",
          title: "Professional Trader",
          quote: "Sulaiman Trading redefined how I view market analytics.",
          tag: "Investor",
          avatarSrc: "http://img.b2bpic.net/free-photo/remote-worker-organizing-project-data-reviewing-his-handwritten-notes_482257-126448.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/accounting-manager-reviewing-budget-numbers-after-monthly-costs_482257-90786.jpg",
        },
        {
          id: "2",
          name: "Michael C.",
          date: "Feb 2025",
          title: "Day Trader",
          quote: "The 3D visualizations are a game-changer for speed.",
          tag: "Expert",
          avatarSrc: "http://img.b2bpic.net/free-photo/blond-businessman-surprised-expression_1194-3809.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-planning-financial-investment-report_482257-77714.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          date: "Mar 2025",
          title: "Equity Analyst",
          quote: "The most professional platform I have used to date.",
          tag: "Analyst",
          avatarSrc: "http://img.b2bpic.net/free-photo/female-employee-black-suit-holding-contract-gets-surprized_114579-15854.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/confident-young-businesswoman-with-folded-arms_1262-1775.jpg",
        },
        {
          id: "4",
          name: "David K.",
          date: "Apr 2025",
          title: "Portfolio Mgr",
          quote: "Reliable, secure, and incredibly efficient execution.",
          tag: "Pro",
          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-senior-man-drinking-coffee-cafe-senior-man-using-smart-laptop-cafe_496169-355.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-business-woman-with-executive-job-working-with-management-marketing-statistics-computer-office-worker-analyzing-research-charts-data-reports_482257-41126.jpg",
        },
        {
          id: "5",
          name: "Jenny L.",
          date: "May 2025",
          title: "Crypto Trader",
          quote: "I love the algorithmic trading tools integrated here.",
          tag: "Trader",
          avatarSrc: "http://img.b2bpic.net/free-photo/no-minute-without-my-laptop-handsome-young-man-working-laptop-while-enjoying-coffee-cafe_639032-2899.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-handsome-bearded-african-american-businessman-brown-classic-jacket-isolated-dark-background_613910-6626.jpg",
        },
      ]}
      title="Trader Success Stories"
      description="Hear how Sulaiman Trading transformed their portfolios."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Platform",
          items: [
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="Sulaiman Trading"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
