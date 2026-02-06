import { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
    title: "Privacy Policy | Asamblor",
    description: "Asamblor privacy policy. How we collect, use, and protect your fleet and driver data.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPage() {
    return <PrivacyClient />;
}
