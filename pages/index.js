import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Bienvenido" >
      <div>
        <h1>Index</h1>
      </div>
    </Layout>
  );
}
