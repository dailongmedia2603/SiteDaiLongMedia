import ParticleBackground from "@/components/ParticleBackground";
import BrandCard from "@/components/BrandCard";

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
          <div className="mb-6 animate-fade-in-down">
            <img 
              src="/logodailong.png" 
              alt="DAILONG MEDIA Logo" 
              className="mx-auto h-24 md:h-32"
            />
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-12 animate-fade-in-up">
            CÔNG TY TNHH ĐẠI LONG MEDIA với mục tiêu xây dựng hệ sinh thái dịch vụ toàn diện giúp doanh nghiệp làm chủ truyền thông và số hoá cho doanh nghiệp siêu nhỏ. Giúp doanh nghiệp có sức khoẻ thương hiệu vững mạnh, bán hàng bền vững.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
           <h2 className="text-3xl font-bold text-center mb-8 text-[#2e3192] uppercase">Các Thương Hiệu Của Chúng Tôi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BrandCard
              logoSrc="/logovuaSeeding.png"
              name="Vua Seeding"
              description="Giải pháp Seeding giúp bạn truyền thông điều hướng cộng đồng hiệu quả, tăng uy tín cho thương hiệu / sản phẩm bền vững."
              href="https://vuaseeding.top/"
            />
            <BrandCard
              logoSrc="/logopowerbuzz.png"
              name="Power Buzz"
              description="Giải pháp làm chủ truyền thông Social với hệ thống kênh TikTok (KOC ảo) giúp doanh nghiệp sở hữu riêng hàng loạt KOC cho riêng mình."
              href="https://powerbuzzagency.com/"
            />
            <BrandCard
              logoSrc="/logocodev.png"
              name="CoDev"
              description="Giải pháp xây dựng phần mềm 'May đo' cho chính doanh nghiệp. Với sứ mệnh giúp cho doanh nghiệp siêu nhỏ với chi phí thấp. Doanh nghiệp không mất quá nhiều chi phí để xây dựng."
              href="https://codevsoftware.io.vn/"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;