import Link from "next/link";

export default function LandingPage() {
  return (
    <Link href="/login" className="">
      <button type="button">Get Started</button>
    </Link>
  );
}