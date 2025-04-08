'use client';
import "@/app/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/_components/NavBar/NavBar";
import Footer from "@/_components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { Providers } from "@/app/providers";

export default function ClientLayout({ children }) {


  return (
    <Providers>
      {/* <NavBar /> */}
      {children}
      <Footer />
    </Providers>
  );
}
