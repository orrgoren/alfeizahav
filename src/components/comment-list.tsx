'use client';

import type { Comment } from '@/lib/interface';
import { useSession } from 'next-auth/react';
import { formatDistanceToNowStrict } from 'date-fns';
import { he } from 'date-fns/locale';
import SingleComment from '@/components/single-comment';

function distanceToNow(dateTime: number | Date) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
    locale: he,
  });
}

type CommentListProps = {
  comments?: Comment[];
  onDelete: (comment: Comment) => Promise<void>;
};

const CommentList = ({ comments, onDelete }: CommentListProps) => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="my-10 flex w-full flex-col items-center space-y-6">
      <h3 className="text-3xl font-bold">רשימת תגובות</h3>
      {comments && comments?.length > 0 ? (
        comments.map((comment) => {
          const isAuthor = user && user.sub === comment.user.sub;
          const isAdmin = user && user.email === process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL;

          return (
            <SingleComment
              key={comment.id}
              comment={comment}
              avatarSrc={comment.user.picture}
              name={comment.user?.name}
              commentText={comment.text}
              timestamp={distanceToNow(comment.created_at)}
              isAdmin={isAdmin}
              isAuthor={isAuthor}
              onDelete={onDelete}
            />
          );
        })
      ) : (
        <div>לא נמצאו תגובות לפוסט זה. אתם תוכלו להיות הראשונים :)</div>
      )}
    </div>
  );
};

export default CommentList;
