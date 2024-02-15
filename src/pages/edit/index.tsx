import { QuestionListItem, QuestionNewItem } from '@/components';
import { ROUTE } from '@/constants';
import { useAppDispatch } from '@/redux';
import { deleteTopic, updateTopic } from '@/redux/game';
import { selectTopic } from '@/redux/game/selectors';
import { Question } from '@/types';
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

export function EditPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const topic = useSelector(selectTopic(id));

  const [isEditing, setEditing] = useState(false);
  const [topicTitle, setTopicTitle] = useState(topic?.title || '');

  const deleteQuestion = useCallback(
    (index: number) => {
      if (!topic || !id) return;

      const newQuestions = [...topic.questions];
      newQuestions.splice(index, 1);

      dispatch(
        updateTopic({
          id,
          questions: newQuestions,
        }),
      );
    },
    [dispatch, id, topic],
  );

  const addQuestion = useCallback(
    (payload: Question) => {
      if (!topic || !id) return;

      dispatch(
        updateTopic({
          id,
          questions: [...topic.questions, payload],
        }),
      );
    },
    [dispatch, id, topic],
  );

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTopicTitle(e.target.value);
  };

  if (!topic) {
    return (
      <Container>
        <Typography mb={2}>Topic not found.</Typography>
        <Button variant="text" onClick={() => navigate(ROUTE.HOME)}>
          Back home
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        mb={4}
        gap={2}
      >
        {isEditing ? (
          <TextField
            label="Chủ đề"
            fullWidth
            value={topicTitle}
            onChange={onTitleChange}
          />
        ) : (
          <Typography variant="h2" fontWeight={600}>
            {topic.title}
          </Typography>
        )}
        <Stack direction="row" gap={1} alignItems="center">
          {isEditing ? (
            <Button
              variant="text"
              onClick={() => {
                dispatch(
                  updateTopic({
                    id,
                    title: topicTitle,
                  }),
                );
                setEditing(false);
              }}
            >
              Save
            </Button>
          ) : (
            <>
              <Button variant="text" onClick={() => setEditing(true)}>
                Edit
              </Button>
              <Button
                variant="text"
                color="error"
                onClick={() => {
                  if (id) {
                    dispatch(deleteTopic(id));
                  }
                  navigate(ROUTE.HOME);
                }}
              >
                Delete
              </Button>
            </>
          )}
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {topic.questions.map((question, index) => (
          <Grid key={question.title + index} item xs={6}>
            <QuestionListItem
              data={question}
              onDelete={() => deleteQuestion(index)}
            />
          </Grid>
        ))}
        <Grid item xs={6}>
          <QuestionNewItem onSubmit={addQuestion} />
        </Grid>
      </Grid>
    </Container>
  );
}
