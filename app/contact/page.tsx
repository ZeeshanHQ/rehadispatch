import type { Metadata } from "next";
import ContactClientView from "@/components/ContactClientView";

export const metadata: Metadata = {
  title: "24/7 Dispatch Desk & Direct Carrier Support",
  description:
    "Direct contact hotline for Reha Dispatch command center: +1 (573) 229-5394 | Email: contact@rehadispatch.com. 24/7 driver support, rate audit assistance, and broker escalation.",
  alternates: {
    canonical: "https://rehadispatch.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
