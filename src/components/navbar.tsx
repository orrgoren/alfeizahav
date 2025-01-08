import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      <Link href="/" className="font-bold text-4xl">
        אלפי<span className="text-primary">זהב</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
