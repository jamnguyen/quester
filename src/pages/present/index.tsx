import { selectTopic } from '@/redux/game/selectors';
import { Box, Typography, keyframes, styled } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Question } from '@/types';
import { ROUTE } from '@/constants';

const backgrounds = [
  ['#027ffe', '#004b80'],
  ['#e11e04', '#7a0e00'],
  ['#02fe24', '#007b10'],
  ['#bf02fe', '#5c007b'],
  ['#fef102', '#7e7800'],
];

function randomInteger(min: number, max: number) {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedStar = styled(StarIcon)({
  transformOrigin: 'center',
  animation: `${scale} 1s infinite ease`,
});

export function PresentPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const topic = useSelector(selectTopic(id));

  const [questions, setQuestions] = useState(topic?.questions || []);
  const [question, setQuestion] = useState<Question>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgColors, setBgColors] = useState<string[]>(['#fff', '#fff']);

  useEffect(() => {
    containerRef.current?.focus();

    const bgIndex = randomInteger(0, backgrounds.length - 1);
    setBgColors([backgrounds[bgIndex][0], backgrounds[bgIndex][1]]);
  }, []);

  const onNext = () => {
    if (!questions.length) navigate(ROUTE.HOME);

    const newQuestions = [...questions];
    const nextIndex = randomInteger(0, newQuestions.length - 1);
    const nextQuestion = newQuestions[nextIndex];
    newQuestions.splice(nextIndex, 1);
    setQuestions(newQuestions);
    setQuestion(nextQuestion);
  };

  if (!topic) return null;

  return (
    <div ref={containerRef} onClick={onNext}>
      <Box
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '100vw',
          background: `linear-gradient(to right bottom, ${bgColors[0]}, ${bgColors[1]})`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        {question ? (
          <>
            <Typography
              variant="h1"
              fontWeight={700}
              fontSize={32}
              color="white"
            >
              {question.title}
            </Typography>
            {question.hintImgURL && (
              <img src={question.hintImgURL} style={{ maxWidth: 800 }} />
            )}
            {question.allowHopeStar && (
              <AnimatedStar htmlColor="#fff" sx={{ fontSize: 80 }} />
            )}
          </>
        ) : (
          <Typography variant="h1" fontWeight={700} fontSize={32} color="white">
            {topic.title}
          </Typography>
        )}
      </Box>
    </div>
  );
}
