import Link from "next/link"; //client side navigation
import { useRouter } from "next/router";
import styles from '../styles/Navbar.module.css' //css module

function Navba() {
  const router = useRouter(); //현재 위치한 location에 대한정보가 있음
  console.log(router)

  return <nav>
    <Link href="/"><a className={router.pathname==="/" ? "active":""}>home</a></Link>
    <Link href="about"><a className={router.pathname==="/about" ? "active":""}>about</a></Link>
    <style jsx >{`
      nav{
        background-color:tomato
      }
      .active{
        color:blue
      }
    `}</style>
  </nav>;
}

export default Navba;



//css module -> 브라우저에서 코드를열면  <nav className={styles.nav}> 
//className은 무작위로 선정됨 따라서 다른 컴포넌트에서 똑같은
//클래스명을 지어도 충돌할 걱정이없음
//클래스를 여러개쓸거면 ``사용
//1개는 : className={router.pathname==="/" ? styles.active:""}
{/* <Link href="/"><a className={`${styles.link} ${router.pathname==="/" ? styles.active:""}`}>home</a></Link>
<Link href="about"><a className={ `${styles.link}  ${router.pathname==="/about" ? styles.active:""}`}>about</a></Link> */}



//style jsx  -> 브라우저에서 코드를열면  클래스 네임은 무작위로 선정됨
//둘다 다른컴포넌트에 영향 x -> 컴포넌트에 scoped됨
// <Link href="/"><a className={router.pathname==="/" ? "active":""}>home</a></Link>
// <Link href="about"><a className={router.pathname==="/about" ? "active":""}>about</a></Link>
// <style jsx>{`
//   nav{
//     background-color:tomato
//   }
//   a{
//     text-decoration:none
//   }
//   .active{
//     color:blue
//   }
// `}</style>

//global로 css를 적용시키고싶으면 global 키워드 추가

{/* <style jsx global>{`
nav{
  background-color:tomato
}
a{
  text-decoration:none
}
.active{
  color:blue
}
`}</style> */}

