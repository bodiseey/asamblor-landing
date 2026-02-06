import { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
    title: "Terms of Service | Asamblor",
    description: "Terms and conditions for using Asamblor's autonomous fleet recruitment platform.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermsPage() {
    return <TermsClient />;
}
