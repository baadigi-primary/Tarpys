import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catering Inquiry | Tarpy's Monterey CA",
};

export default function CateringInquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
