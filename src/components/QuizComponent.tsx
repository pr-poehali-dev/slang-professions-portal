import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlangTerm, EnglishTerm } from "@/data/professionsData";

interface QuizComponentProps {
  slangTerms: SlangTerm[];
  englishTerms: EnglishTerm[];
  professionName: string;
}

type QuizType = "slang" | "english";
type Question = {
  question: string;
  options: string[];
  correct: number;
  type: QuizType;
};

const QuizComponent = ({
  slangTerms,
  englishTerms,
  professionName,
}: QuizComponentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const generateQuestions = (): Question[] => {
    const questions: Question[] = [];

    // Вопросы по сленгу
    slangTerms.forEach((term, index) => {
      const otherDefinitions = slangTerms
        .filter((_, i) => i !== index)
        .map((t) => t.definition)
        .slice(0, 3);

      const options = [term.definition, ...otherDefinitions].sort(
        () => Math.random() - 0.5,
      );
      const correctIndex = options.indexOf(term.definition);

      questions.push({
        question: `Что означает "${term.term}"?`,
        options,
        correct: correctIndex,
        type: "slang",
      });
    });

    // Вопросы по английскому
    englishTerms.forEach((term, index) => {
      const otherTranslations = englishTerms
        .filter((_, i) => i !== index)
        .map((t) => t.russian)
        .slice(0, 3);

      const options = [term.russian, ...otherTranslations].sort(
        () => Math.random() - 0.5,
      );
      const correctIndex = options.indexOf(term.russian);

      questions.push({
        question: `Как переводится "${term.english}"?`,
        options,
        correct: correctIndex,
        type: "english",
      });
    });

    return questions.sort(() => Math.random() - 0.5).slice(0, 12);
  };

  const [questions] = useState<Question[]>(generateQuestions());

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);

    setTimeout(() => {
      if (answerIndex === questions[currentQuestion].correct) {
        setScore(score + 1);
      }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setQuizStarted(false);
  };

  if (!quizStarted) {
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-center">🎯 Тест знаний</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4">
            Проверьте свои знания сленга и английских терминов в области "
            {professionName}"
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Вопросов: {questions.length}
          </p>
          <Button
            onClick={() => setQuizStarted(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Начать тест
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="text-center">🎉 Результат теста</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-4xl font-bold mb-4">
            {score}/{questions.length}
          </div>
          <div className="text-2xl mb-4">{percentage}%</div>
          <div className="mb-6">
            {percentage >= 80
              ? "🏆 Отлично!"
              : percentage >= 60
                ? "👍 Хорошо!"
                : "📚 Нужно подучить!"}
          </div>
          <Button
            onClick={resetQuiz}
            className="bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Пройти еще раз
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-center">
          Вопрос {currentQuestion + 1} из {questions.length}
        </CardTitle>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold mb-6 text-center">
          {currentQ.question}
        </h3>
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={`w-full text-left justify-start h-auto p-4 ${
                selectedAnswer === index
                  ? index === currentQ.correct
                    ? "bg-green-100 border-green-500 text-green-700"
                    : "bg-red-100 border-red-500 text-red-700"
                  : selectedAnswer !== null && index === currentQ.correct
                    ? "bg-green-100 border-green-500 text-green-700"
                    : ""
              }`}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">
          Очки: {score}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizComponent;
