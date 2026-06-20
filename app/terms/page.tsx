import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Read the Terms of Service for Asamblor, covering user rights, licensing, liability, and compliance for our trucking acquisition infrastructure services.",
    alternates: { canonical: "https://www.asamblor.com/terms" },
};

export default function TermsPage() {
    return <TermsClient />;
}
