import { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
    title: "Book a Discovery Call",
    description: "Scope your owner-operator acquisition infrastructure with Asamblor — 30-minute ICP review, live CarrieX data preview, and engine scope.",
    alternates: { canonical: "https://www.asamblor.com/book" },
};

export default function BookPage() {
    return <BookClient />;
}
