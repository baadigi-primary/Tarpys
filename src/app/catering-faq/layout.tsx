import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Tarpy's Monterey CA",
};

export default function CateringFaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
