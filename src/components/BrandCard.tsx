import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface BrandCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

const BrandCard = ({ icon: Icon, name, description }: BrandCardProps) => {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-gray-200/80 text-gray-800 transition-all duration-300 hover:border-blue-300 hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10">
      <CardHeader className="flex flex-row items-center gap-4">
        <Icon className="w-10 h-10 text-blue-500" />
        <div>
          <CardTitle className="text-2xl font-bold text-blue-700">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BrandCard;