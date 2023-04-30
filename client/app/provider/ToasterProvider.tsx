"use client";

import { Toaster } from "react-hot-toast";

import React from "react";

const ToasterProvider = () => {
  return <Toaster />;
};

export default ToasterProvider;

// "Toaster" does not fit to next.js thus need provider to have at least one parent component
