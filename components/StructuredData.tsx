import React from "react";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": "https://rehadispatch.com/#organization",
    "name": "Reha Dispatch",
    "alternateName": [
      "Reha Dispatch LLC",
      "Reha Freight Dispatching",
      "Reha Truck Dispatch Services",
      "Reha Logistics Orchestration"
    ],
    "url": "https://rehadispatch.com",
    "logo": "https://rehadispatch.com/icon.svg",
    "image": "https://rehadispatch.com/hero_truck.jpg",
    "description": "Reha Dispatch is a premier boutique US truck dispatch and freight management partner for owner-operators and fleet owners. Specializing in high-RPM lane strategy, rate con protection, broker credit checks, and 24/7 dispatching across all 48 lower states.",
    "telephone": "+1-925-504-0101",
    "email": "contact@rehadispatch.com",
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "ACH, Wire, Factoring Direct, Credit Card",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1900 Victory Park Lane, Suite 1400",
      "addressLocality": "Dallas",
      "addressRegion": "TX",
      "postalCode": "75201",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7885,
      "longitude": -96.8090
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "State",
        "name": "Texas"
      },
      {
        "@type": "State",
        "name": "Illinois"
      },
      {
        "@type": "State",
        "name": "Georgia"
      },
      {
        "@type": "State",
        "name": "Ohio"
      },
      {
        "@type": "State",
        "name": "Pennsylvania"
      },
      {
        "@type": "State",
        "name": "California"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "148",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Reha Dispatch Freight Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dry Van (53') Dedicated Dispatch",
            "description": "High-cube 53-foot dry van dispatching focusing on high-density freight corridors, backhaul guarantees, and rate-per-mile optimization ($3.10 - $3.80/mi average)."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reefer (Temperature-Controlled) Dispatch",
            "description": "Cold chain logistics, reefer temperature continuous monitoring, USDA & pharmaceutical high-yield loads with strict dwell-time minimization ($3.40 - $4.40/mi average)."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flatbed & Step Deck Dispatch",
            "description": "Specialized open deck, pipe, machinery, construction materials, and over-dimensional freight dispatch with secure tarp fee and accessorial protection."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Only & Drop-and-Hook Dispatch",
            "description": "Asset-light power only solutions partnering with premier mega-fleets and private trailer pools to maximize rolling hours and eliminate live loading delays."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Back-Office Invoicing & Factoring Liaison",
            "description": "Complete rate con processing, bill of lading (BOL) collection, NOA coordination, and same-day factoring submission to RTS, Apex, OTR, and Triumph."
          }
        }
      ]
    },
    "sameAs": [
      "https://github.com/ZeeshanHQ/rehadispatch"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Reha Dispatch and how does your truck dispatching service work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reha Dispatch is a premier US truck dispatch service representing owner-operators and motor carriers. We negotiate directly with direct shippers and top-tier brokers to secure top-dollar spot and contract freight, handle 100% of broker packets and rate cons, manage factoring invoicing, and protect drivers against unpaid detention or layovers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you practice forced dispatch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Never. Reha Dispatch operates under a strict 100% No Forced Dispatch policy. You have the ultimate authority to accept or reject any load based on rate per mile, destination lane, deadhead miles, or personal home-time preferences."
        }
      },
      {
        "@type": "Question",
        "name": "What is the fee structure for Reha Dispatch services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer transparent pricing starting at a low 5% flat percentage per load, or dedicated weekly packages for full fleet management. There are zero hidden setup fees, zero long-term lock-in contracts, and we never take a commission from your detention, TONU, or layover reimbursements."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can a carrier onboard and book their first load?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onboarding takes less than 15 minutes online. Once you submit your MC Authority letter, Certificate of Insurance (COI), W-9, and Notice of Assignment (NOA), your dedicated senior dispatcher verifies your paperwork and starts bidding on loads immediately."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Reha Dispatch support or dispatch hotline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach our active 24/7 command center toll-free at +1 925 504 0101 or by emailing contact@rehadispatch.com. Our central headquarters is located at 1900 Victory Park Lane, Suite 1400, Dallas, TX 75201."
        }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rehadispatch.com/#website",
    "url": "https://rehadispatch.com",
    "name": "Reha Dispatch",
    "description": "Premier US Freight Orchestration, Truck Dispatch, and High-RPM Logistics Partner",
    "publisher": {
      "@id": "https://rehadispatch.com/#organization"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rehadispatch.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://rehadispatch.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pricing",
        "item": "https://rehadispatch.com/pricing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Carrier Onboarding",
        "item": "https://rehadispatch.com/onboarding"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact Desk",
        "item": "https://rehadispatch.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
