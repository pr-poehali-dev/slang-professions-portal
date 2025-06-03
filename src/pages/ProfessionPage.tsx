import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { professionsData } from "@/data/professionsData";
import QuizComponent from "@/components/QuizComponent";
import Icon from "@/components/ui/icon";

const ProfessionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const profession = professionsData.find((p) => p.id === id);

  if (!profession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Профессия не найдена</h1>
          <Button onClick={() => navigate("/")}>На главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Button>

          <div className="text-center mb-8">
            <div
              className={`bg-gradient-to-br ${profession.color} rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-4xl">{profession.icon}</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">{profession.name}</h1>
            <p className="text-xl text-gray-600">{profession.description}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Сленг */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>💬</span>
                Профессиональный сленг
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profession.slang.map((term, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-purple-500 pl-4"
                  >
                    <h4 className="font-semibold text-lg">{term.term}</h4>
                    <p className="text-gray-700 mb-2">{term.definition}</p>
                    {term.example && (
                      <p className="text-sm text-gray-500 italic">
                        Пример: "{term.example}"
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Английские термины */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>🇬🇧</span>
                Английские термины
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profession.englishTerms.map((term, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-lg">
                      {term.english} — {term.russian}
                    </h4>
                    <p className="text-gray-700">{term.definition}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Тест */}
        <QuizComponent
          slangTerms={profession.slang}
          englishTerms={profession.englishTerms}
          professionName={profession.name}
        />
      </div>
    </div>
  );
};

export default ProfessionPage;
