import { Metadata } from "next";
import BookClient from "./BookClient";

export const metadata: Metadata = {
    title: "Book a Strategy Call | Asamblor",
    description: "Schedule a consultation with Asamblor experts to build your automated fleet recruitment engine.",
};

export default function BookPage() {
    return <BookClient />;
}
