import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For IT Directors",
  description: "Seamless integration and control for your university. Manage identity, institutional domains, and technical support on a trusted video platform.",
};

export default function ITDirectorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
