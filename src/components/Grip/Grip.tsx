"use client";

import React, { useState, useCallback } from "react";
import "../../styles/main.css";

export type GripControllerProps = {
  children: React.ReactNode;
  minWidth?: number;
  maxWidth?: number;
  controlPosition?: "below" | "top-right";
  name?: string;
};

const Controls = React.memo(
  ({
    width,
    minWidth,
    maxWidth,
    onWidthChange,
    name,
  }: {
    width: number;
    minWidth: number;
    maxWidth: number;
    onWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
  }) => (
    <div className="w-full max-w-md">
      {name && <div className="text-sm font-semibold mb-2 text-gray-700">{name}</div>}
      <div className="relative py-2">
        <style>
          {`
            input[type="range"] {
              -webkit-appearance: none;
              background: transparent;
            }
            input[type="range"]::-webkit-slider-runnable-track {
              height: 1px;
              background: black;
              border: none;
            }
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 12px;
              width: 12px;
              border-radius: 50%;
              background: black;
              margin-top: -5px;
              position: relative;
              cursor: pointer;
            }
            input[type="range"]:focus::-webkit-slider-thumb {
              box-shadow: 0 0 0 1px white, 0 0 0 2px black;
            }
            input[type="range"]::-moz-range-track {
              height: 1px;
              background: black;
              border: none;
            }
            input[type="range"]::-moz-range-thumb {
              height: 12px;
              width: 12px;
              border: none;
              border-radius: 50%;
              background: black;
              cursor: pointer;
            }
            input[type="range"]:focus::-moz-range-thumb {
              box-shadow: 0 0 0 1px white, 0 0 0 2px black;
            }
            .range-tooltip {
              position: absolute;
              top: -10px;
              transform: translateX(-50%);
              color: black;
              font-size: 12px;
              pointer-events: none;
              white-space: nowrap;
              opacity: 0;
              transition: opacity 150ms ease;
            }
            input[type="range"]:focus + .range-tooltip {
              opacity: 1;
            }
          `}
        </style>
        <div className="relative">
          <input
            type="range"
            min={minWidth}
            max={maxWidth}
            value={width}
            onChange={onWidthChange}
            className="w-full cursor-pointer focus:outline-none"
          />
          <div className="range-tooltip" style={{ left: `${((width - minWidth) / (maxWidth - minWidth)) * 100}%` }}>
            {width}
          </div>
        </div>
      </div>
    </div>
  )
);

Controls.displayName = "Controls";

export const GripController = React.memo(
  ({ children, minWidth = 200, maxWidth = 1200, controlPosition = "below", name }: GripControllerProps) => {
    const [width, setWidth] = useState(maxWidth);

    const handleWidthChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setWidth(e.target.valueAsNumber);
    }, []);

    return (
      <div className="relative w-full">
        {controlPosition === "top-right" && (
          <div className="fixed top-4 right-4 z-10 bg-white p-4 rounded-lg shadow-md">
            <Controls
              width={width}
              minWidth={minWidth}
              maxWidth={maxWidth}
              onWidthChange={handleWidthChange}
              name={name}
            />
          </div>
        )}
        <div className="flex flex-col items-center w-full">
          <div className="border border-gray-300 rounded-lg overflow-hidden" style={{ width: `${width}px` }}>
            {children}
          </div>
          {controlPosition === "below" && (
            <div className="mt-4 w-full flex justify-center">
              <Controls
                width={width}
                minWidth={minWidth}
                maxWidth={maxWidth}
                onWidthChange={handleWidthChange}
                name={name}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
);

GripController.displayName = "GripController";
