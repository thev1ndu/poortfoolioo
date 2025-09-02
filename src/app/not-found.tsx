import { NotFound as PageNotFound } from "@/components/not-found";

export const metadata = {
  title: "404",
};

export default function NotFound() {
  return <PageNotFound className="h-screen" />;
}
