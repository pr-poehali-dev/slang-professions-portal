import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface ProfessionCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

const ProfessionCard = ({
  id,
  name,
  description,
  icon,
  color,
}: ProfessionCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/profession/${id}`);
  };

  return (
    <Card
      className="cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div
          className={`bg-gradient-to-br ${color} rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto`}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2 text-gray-800">
          {name}
        </h3>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProfessionCard;
