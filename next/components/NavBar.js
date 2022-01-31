import Link from "next/link"; //client side navigation
import { useRouter } from "next/router";
import styles from '../styles/Navbar.module.css' //css module

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}



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

