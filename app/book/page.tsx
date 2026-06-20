import { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
    title: "Book a Discovery Call",
    description: "Book a 30-minute discovery call to scope your custom owner-operator acquisition pipeline. Get a live preview of CarrieX trucking data matching your exact ICP.",
    alternates: { canonical: "https://www.asamblor.com/book" },
};

export default function BookPage() {
    return <BookClient />;
}
