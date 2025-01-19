import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { CategoryTooltip } from "./category-tooltip";

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export const RadarVariant = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="60%">
        <PolarGrid />
        <PolarAngleAxis style={{ fontSize: "12px" }} dataKey="name" />
        <PolarRadiusAxis style={{ fontSize: "12px" }} />
        <Tooltip content={<CategoryTooltip />} />
        <Radar
          dataKey="value"
          fill="#3b82fb"
          fillOpacity={0.6}
          stroke="#3b82fb"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
