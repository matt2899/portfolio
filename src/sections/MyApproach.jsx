import React from "react";
import myApproachImage from "../assets/myApproach.JPG";

const MyApproach = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle Background Accent */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-100 via-purple-100 to-pink-50 blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            My <span className="text-slate-700">Approach</span>
          </h2>

          <div className="mt-8 space-y-6 text-gray-700 text-base  leading-relaxed">
            <p>
              I approach development with a balance of{" "}
              <span className="font-semibold text-gray-900">
                logic and creativity
              </span>
              , building systems that are both efficient and meaningful. Whether
              I’m designing a user interface, structuring a backend API, or
              working with databases, I focus on{" "}
              <span className="font-semibold text-gray-900">
                clarity, scalability, and user experience
              </span>
              .
            </p>
            <p>
              I value clean, maintainable code and believe that every feature
              should serve a clear purpose. I aim to make solutions intuitive,
              optimized, and built to last.
            </p>
            <p>
              For me, development isn’t just about writing code, it’s about{" "}
              <span className="font-semibold text-gray-900">
                problem-solving with empathy
              </span>
              , crafting products that people can rely on and enjoy using.
            </p>
          </div>
        </div>

        {/* Right Image - Minimal & Clean */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={myApproachImage}
            alt="My Approach"
            className="max-w-md shadow-md rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default MyApproach;
