'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>שלום {session.user?.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuItem>
                <Link href="#" onClick={() => signOut()} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    התנתק
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  return (
    <div>
      <button onClick={() => signIn('google')}> התחבר</button>
    </div>
  );
}
