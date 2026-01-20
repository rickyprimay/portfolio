import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="project-heading pb-8">
        Days I <strong className="purple-text">Code</strong>
      </h1>
      <GitHubCalendar
        username="rickyprimay"
        blockSize={18}
        blockMargin={6}
        color="#c084f5"
        fontSize={18}
      />
    </div>
  );
};

export default Github;
