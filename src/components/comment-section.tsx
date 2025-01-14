'use client';

import CommentBox from '@/components/comment-box';
import CommentList from '@/components/comment-list';
import useComment from '@/hooks/use-comment';

export default function CommentSection() {
  const { text, setText, comments, onSubmit, onDelete } = useComment();

  return (
    <>
      <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </>
  );
}
