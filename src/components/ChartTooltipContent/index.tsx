import React from "react";

interface TooltipProps {
    active?: boolean;
    payload?: any[];
    label?: string;
  }
  
  export function ChartTooltipContent({ active, payload, label }: TooltipProps) {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 rounded shadow p-2">
          <p className="text-sm text-gray-700 font-semibold">{label}</p>
          {payload.map((item) => (
            <div key={item.dataKey} className="text-xs text-gray-600">
              <span style={{ color: item.fill, fontWeight: "bold" }}>
                ● {item.name}:
              </span>{" "}
              {item.value}
            </div>
          ))}
        </div>
      );
    }
  
    return null;
  }