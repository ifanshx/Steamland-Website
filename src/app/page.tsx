"use client";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import HomePages from "./pages/HomePages";

export default function Home() {
  return (
    <>
      <Header />
      <HomePages />
    </>
  );
}
