import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read the Privacy Policy for Asamblor to learn how we collect, process, and protect your information, including your CCPA/CPRA data rights and choices.",
    alternates: { canonical: "https://www.asamblor.com/privacy" },
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
