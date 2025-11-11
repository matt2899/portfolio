import React from "react";
import reactCert from "../assets/react-cert.png";
import jsIntermediate from "../assets/jsIntermediate.png";
import cSharpBasic from "../assets/cSharpBasic.png";

const MyCertificates = () => {
  const certificates = [
    {
      title: "React (Basic)",
      platform: "HackerRank",
      date: "Issued September 2025",
      link: "https://www.hackerrank.com/certificates/iframe/7c5f34f38291",
      image: reactCert,
    },
    {
      title: " JavaScript (Intermediate)",
      platform: "HackerRank",
      date: "Issued September 2025",
      link: "https://www.hackerrank.com/certificates/iframe/cc6672a35ba6",
      image: jsIntermediate,
    },
    {
      title: "C# (Basic)",
      platform: "HackerRank",
      date: "Issued September 2025",
      link: "https://www.hackerrank.com/certificates/iframe/be14044ab6c5",
      image: cSharpBasic,
    },
  ];

  return (
    <section className="px-6 py-20 md:px-12 lg:p-24 bg-base-200">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          My <span className="text-gray-700">Certificates</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-lg">
          Lifelong learning is at the heart of my growth as a developer.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="card bg-white border border-gray-100 shadow-md rounded-md overflow-hidden"
          >
            {/* Certificate Image */}
            <figure className="relative bg-gray-50">
              <img
                src={cert.image}
                alt={cert.title}
                className="object-contain w-full h-full"
              />
            </figure>

            {/* Card Content */}
            <div className="card-body">
              <h3 className="text-lg font-semibold text-gray-800">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">
                {cert.platform} - <span>{cert.date}</span>
              </p>

              <div className="mt-4 ">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary  font-semibold hover:underline"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyCertificates;
