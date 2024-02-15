import { TopicListItem, TopicNewItem } from '@/components';
import { ROUTE } from '@/constants';
import { useAppDispatch } from '@/redux';
import { createTopic, selectTopics } from '@/redux/game';
import { Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const dispatch = useAppDispatch();
  const topics = useSelector(selectTopics);

  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h2" fontWeight={600}>
        Quiz timeee
      </Typography>
      <Grid container spacing={2} mt={4}>
        {topics.map(topic => (
          <Grid key={`topic-${topic.id}`} item xs={6} md={4}>
            <TopicListItem
              key={topic.id}
              data={topic}
              onPlay={id => navigate(`${ROUTE.PRESENT}/${id}`)}
              onEdit={id => navigate(`${ROUTE.EDIT}/${id}`)}
            />
          </Grid>
        ))}
        <Grid item xs={6} md={4}>
          <TopicNewItem
            onSubmit={newTopic => dispatch(createTopic(newTopic))}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
