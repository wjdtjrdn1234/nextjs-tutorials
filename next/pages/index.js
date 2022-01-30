import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="">hi link</a>
    </div>
  )
}


//여기서 global css를 적용하면
//about 페이지에서는 동작하지않는다 -> next js에서는 나뉘어진 페이지별로 생각해야되기 떄문