import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface BrandCardProps {
  logoSrc: string;
  name: string;
  description: string;
}

const BrandCard = ({ logoSrc, name, description }: BrandCardProps) => {
  return (
    <Card className="bg-white/60 backdrop-blur-sm border-gray-200/80 text-gray-800 transition-all duration-300 hover:border-blue-300 hover:bg-white/80 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
      <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
        <div className="h-16 w-full flex items-center justify-center mb-4">
          <img 
            src={logoSrc} 
            alt={`${name} logo`} 
            className="max-h-full max-w-full object-contain" 
          />
        </div>
        <CardTitle className="text-xl font-bold text-blue-700 mb-2">{name}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BrandCard;