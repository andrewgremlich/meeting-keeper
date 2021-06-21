import React from "react";

import Head from "next/head";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meeting Keeper | Register Attendance</title>
        <meta
          name="description"
          content="Register your attendance in a meeting."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Attend Meeting</h1>

        <Link href="/classDetails">
          <a>Class Management</a>
        </Link>
      </main>
    </div>
  );
}
