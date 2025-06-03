import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProfessionCard from "@/components/ProfessionCard";
import { professionsData } from "@/data/professionsData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            💬 Интернет-сленг профессий
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Изучайте профессиональный сленг и английские термины в разных
            областях. Проверяйте свои знания с помощью интерактивных тестов!
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {professionsData.length}
              </div>
              <div className="text-gray-600">Профессий</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                {professionsData.reduce(
                  (sum, prof) => sum + prof.slang.length,
                  0,
                )}
              </div>
              <div className="text-gray-600">Сленговых терминов</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                {professionsData.reduce(
                  (sum, prof) => sum + prof.englishTerms.length,
                  0,
                )}
              </div>
              <div className="text-gray-600">Английских терминов</div>
            </CardContent>
          </Card>
        </div>

        {/* Сетка профессий */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Выберите профессию
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {professionsData.map((profession) => (
                <ProfessionCard
                  key={profession.id}
                  id={profession.id}
                  name={profession.name}
                  description={profession.description}
                  icon={profession.icon}
                  color={profession.color}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Призыв к действию */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Начните изучение прямо сейчас!
              </h3>
              <p className="text-lg opacity-90">
                Выберите интересующую вас профессию и погрузитесь в мир
                профессионального сленга и терминологии
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
