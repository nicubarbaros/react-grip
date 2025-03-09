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
      <input
        type="range"
        min={minWidth}
        max={maxWidth}
        value={width}
        onChange={onWidthChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-center mt-2 text-sm text-gray-600">Width: {width}px</div>
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
