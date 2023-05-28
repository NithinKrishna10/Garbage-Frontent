import React from "react";

const PageHeader = ({ title }) => {
  return (
    <div
      className="relative h-[15vh]"
      style={{
        backgroundImage:
          'url("http://layerdrops.com/wostin/main-html/assets/images/backgrounds/page-header-bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white font-cursive font-serif text-5xl">{title} Page</h1>
      </div>
    </div>
  );
};

export default PageHeader;
