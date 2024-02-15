import { Question } from '@/types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ChangeEvent, useState } from 'react';

const cardHeight = 300;

export function QuestionListItem({
  data,
  onDelete,
}: {
  data: Question;
  onDelete: () => void;
}) {
  return (
    <Card sx={{ height: cardHeight }}>
      <CardContent>
        <Typography fontWeight={600} mb={1}>
          {data.title}
        </Typography>
        <Typography mb={1}>{data.answer}</Typography>
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
  const [answer, setAnswer] = useState('');
  const [hintImgURL, setHintImgURL] = useState('');
  const [allowHopeStar, setAllowHopeStar] = useState(false);

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
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
        <Box mb={2}>
          <TextField
            label="Đáp án"
            fullWidth
            value={answer}
            onChange={onAnswerChange}
          />
        </Box>
        <Box mb={1}>
          <TextField
            label="Link ảnh gợi ý (optional)"
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
            setAnswer('');
            setHintImgURL('');
            setAllowHopeStar(false);
            onSubmit({
              title,
              answer,
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
