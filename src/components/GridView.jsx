import React from "react";

const GridView = ({ data }) => {
  return (
    <section className="mx-auto px-6 max-w-[1342px] mb-16 mt-12">
      <h2
        className="font-semibold text-[28px] leading-[100%] uppercase text-[#887C68] mb-12 text-center pt-6"
        style={{
          fontFamily: "'Martel Sans', sans-serif",
          fontWeight: 600,
          letterSpacing: "0%",
          textTransform: "uppercase",
        }}
      >
        Communities we manage
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.ID}
            className="border overflow-hidden hover:shadow-lg transition-all rounded-none"
            style={{ boxShadow: "12px 17px 60px 0px #00000040" }}
          >
            <div className="relative w-full h-[480px] overflow-hidden">
              <img
                src={item.image_url}
                alt={item.post_title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180.16deg, rgba(255, 255, 255, 0) 50.13%, rgba(0, 0, 0, 0.6) 99.86%)",
                }}
              ></div>
            </div>

            <div className="p-4 pt-0 pb-0">
              <p className="text-gray-600 text-sm mb-2 pt-4">{item.post_excerpt}</p>
              <h2
                className="mb-0"
                style={{
                  backgroundColor: "#F8F8F8",
                  margin: "0 -1rem 0 -1rem",
                  padding: "0.5rem 1rem",
                  lineHeight: "100%",
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "22px",
                  letterSpacing: "0%",
                  color: "#887C68",
                  borderBottom: "1px solid transparent",
                }}
              >
                {item.post_title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridView;
