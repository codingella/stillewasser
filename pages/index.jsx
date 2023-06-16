
import Homepage from "@/components/Homepage";
import styles from "../styles/Home.module.css";
import Head from "next/head";


export default function Home() {

  return (
    <div className={styles.container}>
          <Head>
          <title>{'Stille Wasser'}</title>
          <meta name="description" content={`'Stille Wasser' ist ein Kurzfilm, über zwei junge Frauen in Sinnkrise. Mit einer Mischung aus Humor und subtilem Zynismus erkundet der Film die Wahrnehmung von schmerzhaften Erinnerungen und die Suche nach Heilung.`} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@0;1&display=swap" rel="stylesheet"/>
        </Head>
        <Homepage></Homepage>



    </div>
  )
}
