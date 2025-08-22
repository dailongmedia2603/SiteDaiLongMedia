import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";

interface BrandCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
}

const BrandCard = ({ icon: Icon, name, description }: BrandCardProps) => {
  return (
    <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-500/30 text-white transition-all duration-300 hover:border-blue-400 hover:bg-gray-900/50 hover:shadow-2xl hover:shadow-blue-500/20">
      <CardHeader className="flex flex-row items-center gap-4">
        <Icon className="w-10 h-10 text-blue-400" />
        <div>
          <CardTitle className="text-2xl font-bold text-blue-300">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BrandCard;