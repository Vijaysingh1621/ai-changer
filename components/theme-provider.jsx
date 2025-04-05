"use client";

import * as React from "react";
// import Spline from '@splinetool/react-spline/next';
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
