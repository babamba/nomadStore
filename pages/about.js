import React from "react";
import Head from "next/head";
import withLayout from "../lib/withLayout";

console.log("about");
const about = () => (
  <div>
    <Head>
      <title>About | Nomad Store</title>
    </Head>
    <h1>About</h1>
    <p>lorem ipsum</p>
  </div>
);

export default withLayout(about);
