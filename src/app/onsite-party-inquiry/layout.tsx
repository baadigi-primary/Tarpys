import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onsite Party Inquiry | Tarpy's Monterey CA",
};

export default function OnsitePartyInquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
