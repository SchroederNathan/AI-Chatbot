"use client";
import React from "react";
import { Progress } from "./progress";

const LimitProgress = ({ chatCount }: { chatCount: number }) => {
  const progress = (chatCount / 10) * 100;

  return <Progress value={progress} className="rounded-b-none rounded-t-md" />;
};

export default LimitProgress;
