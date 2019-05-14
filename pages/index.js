import React from "react";
import Head from "next/head";
//import Link from "next/link";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

console.log("hello");
const Index = () => (
  <div>
    <Head>
      <title>Index | Nomad Store</title>
    </Head>
    <h1> Post </h1>
    <ul>
      <li>
        <PostLink title={"Something"} />
        {/* <Link href="/post?title=Very Important">
          <a>Very important</a>
        </Link> */}
      </li>
      <li>
        <PostLink title={"Something else"} />
        {/* <Link href="/post?title=Super old">
          <a>Super old</a>
        </Link> */}
      </li>
    </ul>
  </div>
);

export default withLayout(Index);
