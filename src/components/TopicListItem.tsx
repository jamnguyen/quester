import { Topic } from '@/types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';

export function TopicListItem({
  data,
  onPlay,
  onEdit,
}: {
  data: Topic;
  onEdit: (id: string) => void;
  onPlay: (id: string) => void;
}) {
  return (
    <Card sx={{ height: 120 }}>
      <CardHeader title={data.title} />
      <CardActions>
        <Button size="small" variant="text" onClick={() => onPlay(data.id)}>
          Play
        </Button>
        <Button size="small" variant="text" onClick={() => onEdit(data.id)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export function TopicNewItem({
  onSubmit,
}: {
  onSubmit: (newItem: Topic) => void;
}) {
  const [title, setTitle] = useState('');

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <Card sx={{ height: 120 }}>
      <CardContent>
        <TextField
          fullWidth
          label="Topic"
          value={title}
          onChange={onTitleChange}
        />
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          onClick={() =>
            onSubmit({
              id: '' + new Date().getTime(),
              title,
              questions: [],
            })
          }
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
