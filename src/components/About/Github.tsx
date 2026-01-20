import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
        Days I <span className="text-primary">Code</span>
      </h2>
      <style>{`
        .react-github-calendar {
          --color-calendar-graph-day-bg: #0a1529;
          --color-calendar-graph-day-border: rgba(0, 82, 204, 0.2);
          --color-calendar-graph-day-L1-bg: #0052cc;
          --color-calendar-graph-day-L2-bg: #00a8ff;
          --color-calendar-graph-day-L3-bg: #00d4ff;
          --color-calendar-graph-day-L4-bg: #00e5ff;
        }
        .react-github-calendar text {
          fill: #4a6fa5;
        }
      `}</style>
      <div className="overflow-x-auto pb-4">
        <GitHubCalendar
          username="rickyprimay"
          blockSize={18}
          blockMargin={6}
          color="#0052cc"
          fontSize={18}
        />
      </div>
    </div>
  );
};

export default Github;
