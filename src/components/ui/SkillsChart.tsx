"use client";

import "chart.js/auto";
import { Doughnut, PolarArea } from "react-chartjs-2";
import Cart from "./Cart";

const SkillsChart = () => {
  const data = [
    {
      label: "Javascript",
      value: 80,
    },
    {
      label: "Typescript",
      value: 75,
    },
    {
      label: "React.JS",
      value: 90,
    },
    {
      label: "Next.JS",
      value: 60,
    },
    {
      label: "TailwindCSS",
      value: 85,
    },
    {
      label: "Bootstrap",
      value: 50,
    },
    {
      label: "Prisma",
      value: 66,
    },
    {
      label: "JWT",
      value: 100,
    },
    {
      label: "Node.JS",
      value: 77,
    },
    {
      label: "Express.JS",
      value: 70,
    },
    {
      label: "MongoDB",
      value: 80,
    },
    {
      label: "PostgreSQL",
      value: 74,
    },
  ];
  return (
    <Cart>
      <div className="md:w-96 md:h-96 mx-auto">
        <PolarArea
          data={{
            labels: data?.map((data) => data.label),
            datasets: [
              {
                label: "Skill Level:",
                data: data?.map((data) => data.value),
              },
            ],
          }}
        />
      </div>
    </Cart>
  );
};

export default SkillsChart;
