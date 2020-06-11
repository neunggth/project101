import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Layout from "../components/Layout";
const About = () => {
  return (
    <Layout title="About me">
      <div className="container col-md-5">
        <h3> Hello my blog!!</h3>
        <p className="title text-justify mt-4 mb-4">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h4 className="text-success"> From another Blog </h4>
      </div>
    </Layout>
  );
};

export default About;
