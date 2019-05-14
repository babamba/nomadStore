import React from "react";
import Head from "next/head";
import Link from "next/link";
import withLayout from "../lib/withLayout";

console.log("hello");
const Index = () => (
  <div>
    <Head>
      <title>Index | Nomad Store</title>
    </Head>
    <h1> Hello index test </h1>
    {/* <Link href="/about">
      <a> About </a>
    </Link> */}
  </div>
);

export default withLayout(Index);
