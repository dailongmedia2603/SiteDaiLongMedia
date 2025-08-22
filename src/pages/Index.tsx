import ParticleBackground from "@/components/ParticleBackground";
import BrandCard from "@/components/BrandCard";
import { Building, Factory, Store } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full text-gray-800 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-[-2]" />
      <div 
        className="absolute inset-0 bg-[url('/background.jpg')] bg-bottom bg-no-repeat bg-cover opacity-10 z-[-1]"
      />
      
      <ParticleBackground />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700 mb-4 animate-fade-in-down">
            DAILONG MEDIA
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12 animate-fade-in-up">
            Kiến tạo tương lai, định hình giá trị. Chúng tôi tự hào là ngôi nhà chung của những thương hiệu tiên phong.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Các Thương Hiệu Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BrandCard
              icon={Building}
              name="Thương Hiệu A"
              description="Chuyên về các giải pháp công nghệ và phần mềm doanh nghiệp, mang lại hiệu quả tối ưu cho khách hàng."
            />
            <BrandCard
              icon={Factory}
              name="Thương Hiệu B"
              description="Đi đầu trong lĩnh vực sản xuất và tự động hóa, cung cấp sản phẩm chất lượng cao và bền vững."
            />
            <BrandCard
              icon={Store}
              name="Thương Hiệu C"
              description="Tập trung vào thị trường bán lẻ và tiêu dùng, mang đến những trải nghiệm mua sắm độc đáo và tiện lợi."
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;