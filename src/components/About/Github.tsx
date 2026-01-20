import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
        Days I <span className="text-primary">Code</span>
      </h2>
      <div className="overflow-x-auto pb-4">
        <GitHubCalendar
          username="rickyprimay"
          blockSize={18}
          blockMargin={6}
          color="#c770f0"
          fontSize={18}
        />
      </div>
    </div>
  );
};

export default Github;
