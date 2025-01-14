'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@/components/ui/button';

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>שלום, {session.user?.name}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <MenubarShortcut>⌘P</MenubarShortcut> פרופיל
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={() => signOut()}>התנתק</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }
  return (
    <div>
      <Button onClick={() => signIn('google')} variant="outline">
        התחבר לחשבונך
      </Button>
    </div>
  );
}
