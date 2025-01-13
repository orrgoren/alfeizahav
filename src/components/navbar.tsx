import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import LoginButton from './login-button';

export default function Navbar() {
  return (
    <nav className="relative mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-5">
      <div className="flex items-center gap-2">
        <Image src="/alfeizahav.png" alt="Alfei Zahav Logo" width={45} height={45} />
        <Link href="/" className="text-4xl font-bold">
          אלפי<span className="text-primary">זהב</span>
        </Link>
      </div>

      <div>
        <ModeToggle />
        <LoginButton />
      </div>
    </nav>
  );
}
