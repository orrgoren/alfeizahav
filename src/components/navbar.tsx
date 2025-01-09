import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-4xl mx-auto px-4 py-5">
      <div className="flex items-center gap-2">
        <Image
          src="/alfeizahav.png"
          alt="Alfei Zahav Logo"
          width={45}
          height={45}
        />
        <Link href="/" className="font-bold text-4xl">
          אלפי<span className="text-primary">זהב</span>
        </Link>
      </div>

      <ModeToggle />
    </nav>
  );
}
