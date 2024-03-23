const CategoryList = () => {
  return (
    <div className="mb-32 w-[80%] mx-auto">

      <div className="category-details-container">
        <h2 className="text-[48px] text-[#1A1919] text-center">
          Job Category List!
        </h2>
        <p className="text-[16px] text-[#757575] mt-2 mb-[24px] text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

        <div className="card-container flex gap-[25px]">
        <div className="c-card-container  w-[311px] h-[243px] border rounded-[8px] p-[40px] bg-[#e8e9ee]">
           <div className="card">
           <div className="w-[70px] h-[70px] border">
           <img className="w-[40px] h-[40px]" src="../../../public/assets/icons/accounts.png" alt="" />
           </div>
            <h3 className="text-[20px] text-[#474747] mt-7">Account & Finance</h3>
            <span className="text-[16px] text-[#A3A3A3] mt-2">300 Jobs Available</span>
           </div>
        </div>
        <div className="c-card-container  w-[311px] h-[243px] border rounded-[8px] p-[40px] bg-[#e8e9ee]">
           <div className="card">
           <div className="w-[70px] h-[70px] border">
           <img className="w-[40px] h-[40px]" src="../../../public/assets/icons/creative.png" alt="" />
           </div>
            <h3 className="text-[20px] text-[#474747] mt-7">Creative Design</h3>
            <span className="text-[16px] text-[#A3A3A3] mt-2">100+ Jobs Available</span>
           </div>
        </div>
        <div className="c-card-container  w-[311px] h-[243px] border rounded-[8px] p-[40px] bg-[#e8e9ee]">
           <div className="card">
           <div className="w-[70px] h-[70px] border">
           <img className="w-[40px] h-[40px]" src="../../../public/assets/icons/marketing.png" alt="" />
           </div>
            <h3 className="text-[20px] text-[#474747] mt-7">Marketing & Sales</h3>
            <span className="text-[16px] text-[#A3A3A3] mt-2">150 Jobs Available</span>
           </div>
        </div>
        <div className="c-card-container  w-[311px] h-[243px] border rounded-[8px] p-[40px] bg-[#e8e9ee]">
           <div className="card">
           <div className="w-[70px] h-[70px] border">
           <img className="w-[40px] h-[40px]" src="../../../public/assets/icons/chip.png" alt="" />
           </div>
            <h3 className="text-[20px] text-[#474747] mt-7">Engineering Job</h3>
            <span className="text-[16px] text-[#A3A3A3] mt-2">224 Jobs Available</span>
           </div>
        </div>

 
        </div>

    </div>
  );
};

export default CategoryList;
