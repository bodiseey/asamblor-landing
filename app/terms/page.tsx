import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for Asamblor, a done-for-you acquisition infrastructure service operated by CarrieX Labs LLC.",
    alternates: { canonical: "https://www.asamblor.com/terms" },
};

export default function TermsPage() {
    return <TermsClient />;
}
