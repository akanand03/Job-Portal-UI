import React from "react";
import jobs from "../data/jobs";

const FeaturedJobs = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Featured Jobs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img src={job.companyLogo} alt="Logo" className="h-10 w-10 object-contain" />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.location}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{job.type}</span>
              <span className="font-medium">{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
