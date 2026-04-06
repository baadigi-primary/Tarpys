import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tarpy's Monterey CA",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
