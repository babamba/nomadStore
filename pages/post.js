import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

console.log("post");
const post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Nomad Store</title>
    </Head>
    {JSON.stringify(props)}
    <h1> Title </h1>
    <p>lalalala</p>
  </div>
);

export default withLayout(withRouter(post));
