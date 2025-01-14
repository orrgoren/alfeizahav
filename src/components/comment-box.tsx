'use client';

import { useSession, signIn } from 'next-auth/react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function CommentBox({ text, setText, onSubmit }: CommentFormProps) {
  const { data: session } = useSession();

  if (session) {
    return (
      <form onSubmit={onSubmit}>
        <div className="mt-10 flex flex-col items-start">
          <Textarea
            placeholder="כתיבת תגובה לפוסט זה..."
            onChange={(e) => setText(() => e.target.value)}
            value={text}
            name="message"
            required
          ></Textarea>
          <div className="mt-4 flex flex-row items-center justify-center gap-2">
            <Button variant="default">פרסום</Button>
            <div className="text-sm text-muted-foreground">
              משתמש.ת מחוברים: {session.user?.name}
            </div>
          </div>
        </div>
      </form>
    );
  }
  return (
    <div className="mt-10 flex flex-col items-start">
      <Textarea placeholder="אנא התחבר על מנת להגיב לפוסט זה" disabled></Textarea>
      <Button className="mt-4" variant="secondary" onClick={() => signIn('google')}>
        התחבר
      </Button>
    </div>
  );
}
