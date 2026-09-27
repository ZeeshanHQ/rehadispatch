import type { Metadata } from "next";
import CareersClientView from "@/components/CareersClientView";

export const metadata: Metadata = {
  title: "Careers & Open Roles | Reha Dispatch",
  description:
    "Explore high-growth careers at Reha Dispatch. Now hiring Senior Freight Dispatchers, Carrier Sales Executives, and Emergency Operations Leads. Competitive base, uncapped commissions, remote & Dallas HQ.",
  alternates: {
    canonical: "https://rehadispatch.com/careers",
  },
  openGraph: {
    title: "Careers & Open Positions | Reha Dispatch Logistics",
    description:
      "Join an elite US truck dispatching firm. Hiring Freight Dispatchers and Carrier Sales Executives. Uncapped commissions, DAT One Enterprise tooling, 100% remote flexibility.",
    url: "https://rehadispatch.com/careers",
    siteName: "Reha Dispatch",
    images: [
      {
        url: "/hero_truck.jpg",
        width: 1200,
        height: 630,
        alt: "Reha Dispatch Careers - Join Our Elite Logistics Team",
      },
    ],
  },
};

export default function CareersPage() {
  const jobPostingsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "JobPosting",
        "title": "Senior Freight Dispatcher (Dry Van & Reefer)",
        "description": "Manage a dedicated fleet of 4-6 owner-operators. Leverage DAT One & Truckstop Enterprise to negotiate top-dollar spot rates ($3.40+/mi) with zero forced dispatch.",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Reha Dispatch",
          "value": "REHA-DISP-01"
        },
        "datePosted": "2026-09-25",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Reha Dispatch LLC",
          "sameAs": "https://rehadispatch.com",
          "logo": "https://rehadispatch.com/icon.svg"
        },
        "jobLocationType": "TELECOMMUTE",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "United States"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 65000,
            "maxValue": 115000,
            "unitText": "YEAR"
          }
        }
      },
      {
        "@type": "JobPosting",
        "title": "Carrier Sales & Fleet Account Executive",
        "description": "Drive enterprise carrier acquisition. Pitch owner-operators and small fleet owners on Reha Dispatch's no-forced-dispatch model and sign active trucks.",
        "identifier": {
          "@type": "PropertyValue",
          "name": "Reha Dispatch",
          "value": "REHA-SALES-02"
        },
        "datePosted": "2026-09-25",
        "validThrough": "2026-12-31",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Reha Dispatch LLC",
          "sameAs": "https://rehadispatch.com",
          "logo": "https://rehadispatch.com/icon.svg"
        },
        "jobLocationType": "TELECOMMUTE",
        "applicantLocationRequirements": {
          "@type": "Country",
          "name": "United States"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": {
            "@type": "QuantitativeValue",
            "minValue": 70000,
            "maxValue": 130000,
            "unitText": "YEAR"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />
      <CareersClientView />
    </>
  );
}
