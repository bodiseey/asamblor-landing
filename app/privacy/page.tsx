import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How CarrieX Labs LLC (Asamblor) collects, uses, and protects information — CCPA/CPRA rights, processor roles, opt-outs, and contact details.",
    alternates: { canonical: "https://www.asamblor.com/privacy" },
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
