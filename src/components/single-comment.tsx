import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, Trash2 } from 'lucide-react';
import type { Comment } from '@/lib/interface';

interface CommentProps {
  comment: Comment;
  avatarSrc: string;
  name: string;
  commentText: string;
  timestamp: string;
  isAdmin?: boolean;
  isAuthor?: boolean;
  onDelete?: (comment: Comment) => Promise<void>;
}

export default function SingleComment({
  comment,
  avatarSrc,
  name,
  commentText,
  timestamp,
  isAuthor,
  isAdmin,
  onDelete,
}: CommentProps) {
  const handleDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onDelete) {
      await onDelete(comment);
    }
  };

  return (
    <Card className="mx-auto w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-14 w-14">
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <time className="text-sm text-muted-foreground">{timestamp}</time>
        </div>
        {(isAdmin || isAuthor) && (
          <Button variant="ghost" size="icon" className="mr-auto" onClick={handleDelete}>
            <Trash2 className="h-4 w-4 text-red-600" />
            <span className="sr-only">מחק</span>
          </Button>
        )}
      </CardHeader>
      <CardContent>
        <p className="mb-2 text-base">{commentText}</p>
      </CardContent>
    </Card>
  );
}
