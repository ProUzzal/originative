import React from "react";
import Header from "./layout/Header";

export default function Hero() {
  return (
    <div className="container bg-hero-bg">
      <Header />

      <div className="py-20 text-center">
        <h1 className="text-[96px] font-bold ">
          We Build{" "}
          <img
            className="inline relative before:absolute before:left-0 before:bg-black before:w-[250px] before:h-[80px]"
            src="/image/MacBook.png"
            alt=""
          />
          Digital Experiences that Work{" "}
        </h1>
        <p>
          Driven by a talented team of professionals, Originative Lab aims to
          empower businesses of all sizes, from startups to established
          enterprises. We tailor our services to meet the unique needs and goals
          of each client, ensuring unparalleled success and growth.
        </p>
      </div>
    </div>
  );
}
