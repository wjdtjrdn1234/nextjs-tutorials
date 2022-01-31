import '../styles/globals.css' //global css는 따른 컴포넌트에선 import 안되거 _app 에서만 가능함
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) { //Component: 렌더링할 페이지+  pageProps: getServerSideProps 리턴값
  return <div>
    <Layout/>
    <Component {...pageProps} />
    <span>hello</span>
  </div>

}

export default MyApp

//custom app


//모든 페이지,컴포넌트를 global하게 적용
//모든페이지는 _app을 먼저확인하고 그담에 about이든 index이든 후순위로 확인을함

//global로 css를 적용시키고싶으면 global 키워드 추가 -> 근데  굳이 이렇게안하고  globas.css를 이용하면됨 

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