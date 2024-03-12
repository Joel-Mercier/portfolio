"use client";
import { cn } from "@/utils/cn";
import { getIndex, useFlubber } from "@/utils/hooks/use-flubber";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

const path =
  "M165.905 27.7277C221.579 16.8725 281.397 -18.5989 328.876 12.4572C379.562 45.6109 406.878 116.841 391.918 175.563C378.095 229.823 306.302 237.359 262.655 272.393C227.928 300.266 210.402 355.681 165.905 356.974C121.129 358.275 93.6083 311.26 63.3696 278.183C35.1814 247.35 1.49251 217.331 0.0599772 175.563C-1.40562 132.831 24.1777 94.0849 56.0802 65.6469C86.1427 38.849 126.39 35.4323 165.905 27.7277Z";
const bgPath =
  "M133.89 0.824337C187.116 9.38302 186.575 88.2336 220.153 130.466C246.366 163.436 301.24 174.937 305.644 216.849C310.173 259.958 270.552 292.407 240.439 323.546C209.599 355.439 178.078 390.872 133.89 394.463C87.0121 398.272 34.0834 381.925 8.52073 342.392C-15.1745 305.747 17.9546 260.492 19.0418 216.849C20.0731 175.448 -4.81167 133.974 14.6232 97.4173C39.6018 50.4336 81.4085 -7.61451 133.89 0.824337Z";
const bgColor = "#0F62FE";
const color = "#FF0066";
const paths = [path, bgPath, path];
const colors = [color, bgColor, color];

interface Props {
  containerClassName?: string;
}

export const WavyBackground = ({ containerClassName }: Props) => {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const fill = useTransform(progress, paths.map(getIndex), colors);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 6,
      ease: "easeInOut",
      onComplete: () => {
        if (pathIndex === paths.length - 1) {
          progress.set(0);
          setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      },
    });

    return () => animation.stop();
  }, [pathIndex, progress]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center opacity-20",
        containerClassName
      )}
    >
      <svg width="400" height="400">
        <motion.path fill={fill} d={path} />
      </svg>
    </div>
  );
};
