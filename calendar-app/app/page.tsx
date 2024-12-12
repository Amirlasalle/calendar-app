"use client";
import React, { useEffect, useState } from "react";
import Layout from "./components/main/Layout";
import Head from "next/head";
import Calendar from "./components/main/Calendar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Miro Create</title>
        <meta name="Miro Productions" content="Crafted by Miro Create" />
      </Head>

      <main className="flex flex-col items-center text-dark w-screen min-h-screen dark:text-light overflow-hidden">
        <Calendar />
      </main>
    </>
  );
}
