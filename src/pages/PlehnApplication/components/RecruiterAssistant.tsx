import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { FaArrowRight, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import TerminalType from '../../../components/Motion/TerminalType';
import { findRecruiterAnswer, quickRecruiterQuestions, recruiterQuestions, unsupportedRecruiterAnswer } from '../recruiterQuestions';
import {
  AssistantForm,
  AssistantGrid,
  AssistantLabel,
  AssistantPanel,
  Conversation,
  Message,
  QuickButton,
  QuickQuestions,
  SourceRow,
  TrustCard,
  TrustStack,
} from '../PlehnApplication.styled';

const initialQuestion = recruiterQuestions.find(question => question.id === 'fit') ?? recruiterQuestions[0];

export const RecruiterAssistant: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(initialQuestion.id);
  const [askedQuestion, setAskedQuestion] = useState(initialQuestion.label);
  const [answer, setAnswer] = useState(initialQuestion.answer);
  const [sources, setSources] = useState<readonly string[]>(initialQuestion.sources);
  const [input, setInput] = useState('');

  const choose = (questionId: string) => {
    const question = recruiterQuestions.find(item => item.id === questionId);
    if (!question) return;
    setActiveId(question.id);
    setAskedQuestion(question.label);
    setAnswer(question.answer);
    setSources(question.sources);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = input.trim();
    if (!value) return;
    const match = findRecruiterAnswer(value);
    setAskedQuestion(value);
    setActiveId(match?.id ?? 'unsupported');
    setAnswer(match?.answer ?? unsupportedRecruiterAnswer);
    setSources(match?.sources ?? ['Freigegebene Wissensbasis']);
    setInput('');
  };

  return (
    <AssistantGrid>
      <AssistantPanel>
        <AssistantLabel>Vlad · Bewerbungsassistent</AssistantLabel>
        <Conversation aria-live='polite'>
          <Message $role='user'>Recruiter: {askedQuestion}</Message>
          <AnimatePresence mode='wait' initial={false}>
            <motion.div
              key={`${activeId}:${askedQuestion}`}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Message $role='assistant'>
                <TerminalType
                  text={answer}
                  durationMs={1300}
                  typeSpeedMs={28}
                  minIntervalMs={14}
                  persistInSession={false}
                  respectReducedMotion={false}
                />
                <SourceRow aria-label='Quellen'>
                  {sources.map(source => <span key={source}>{source}</span>)}
                </SourceRow>
              </Message>
            </motion.div>
          </AnimatePresence>
        </Conversation>

        <QuickQuestions aria-label='Häufige Recruiter-Fragen'>
          {quickRecruiterQuestions.map(question => (
            <QuickButton
              key={question.id}
              type='button'
              $active={activeId === question.id}
              onClick={() => choose(question.id)}
            >
              {question.label}
            </QuickButton>
          ))}
        </QuickQuestions>

        <AssistantForm onSubmit={submit}>
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder='Eigene Frage stellen …'
            aria-label='Eigene Frage an den Bewerbungsassistenten'
          />
          <button type='submit' aria-label='Frage absenden'><FaArrowRight /></button>
        </AssistantForm>
      </AssistantPanel>

      <TrustStack>
        <TrustCard>
          <FaShieldAlt aria-hidden='true' />
          <h3>Grounded by design</h3>
          <p>Antworten kommen nur aus freigegebenen Angaben, CV-/GitHub-Kontext und belegbaren Projekten. Keine erfundenen Skills.</p>
        </TrustCard>
        <TrustCard $gold>
          <FaDatabase aria-hidden='true' />
          <h3>Transparent</h3>
          <p>Die verwendete Grundlage steht direkt unter jeder Antwort. Fehlt ein Beleg, sagt der Assistent das offen.</p>
        </TrustCard>
      </TrustStack>
    </AssistantGrid>
  );
};
