import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}

//children: react가 제공하는 prop
//하나의 컴포넌트를 또다른 컴포넌트 안에 넣을 수 있음
//children 이란 _app.js에 있는 <Component {...pageProps} /> 을 뜻함
