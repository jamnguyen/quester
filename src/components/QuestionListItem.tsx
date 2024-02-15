import { Question } from '@/types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ChangeEvent, useState } from 'react';

const cardHeight = 240;

export function QuestionListItem({
  data,
  onDelete,
}: {
  data: Question;
  onDelete: () => void;
}) {
  return (
    <Card sx={{ height: cardHeight }}>
      <CardHeader title={data.title} />
      <CardContent>
        <Typography mb={1}>
          Ảnh gợi ý: {data.hintImgURL || 'Không cóa'}
        </Typography>
        <Stack direction="row" alignItems="center" gap={0.5}>
          {data.allowHopeStar ? (
            <StarIcon htmlColor="#027ffe" fontSize="medium" />
          ) : (
            <StarBorderIcon htmlColor="#aaa" fontSize="medium" />
          )}
          <Typography>
            {data.allowHopeStar ? 'Được dùng' : 'Không'} ngôi sao hy vọng
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="text" color="error" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export function QuestionNewItem({
  onSubmit,
}: {
  onSubmit: (newItem: Question) => void;
}) {
  const [title, setTitle] = useState('');
  const [hintImgURL, setHintImgURL] = useState('');
  const [allowHopeStar, setAllowHopeStar] = useState(false);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onHintChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHintImgURL(e.target.value);
  };

  return (
    <Card sx={{ height: cardHeight }}>
      <CardContent>
        <Box mb={2}>
          <TextField
            label="Nội dung câu hỏi"
            fullWidth
            value={title}
            onChange={onTitleChange}
          />
        </Box>
        <Box mb={1}>
          <TextField
            label="Link ảnh gợi ý (không bắt buộc)"
            fullWidth
            value={hintImgURL}
            onChange={onHintChange}
          />
        </Box>
        <Stack alignItems="center" direction="row" gap={0.5}>
          <IconButton
            disableRipple
            onClick={() => setAllowHopeStar(prev => !prev)}
          >
            {allowHopeStar ? (
              <StarIcon htmlColor="#027ffe" fontSize="medium" />
            ) : (
              <StarBorderIcon htmlColor="#aaa" fontSize="medium" />
            )}
          </IconButton>
          <Typography>
            {allowHopeStar ? 'Được dùng' : 'Không'} ngôi sao hy vọng
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          onClick={() => {
            setTitle('');
            setHintImgURL('');
            setAllowHopeStar(false);
            onSubmit({
              title,
              hintImgURL,
              allowHopeStar,
            });
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
