import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Researchers",
  description: "Collaborate across borders on trusted infrastructure. Run project meetings, lab seminars and conferences with partners in Africa and beyond.",
};

export default function ResearchersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
