import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import { useEffect, useState } from "react";

export default function Home({ results }) { //밑에서 리턴한 results는 이런식으로 받아옴  , 즉 server side를 통해 props를 page로 보낼 수 있음
  const router = useRouter();
  const onClick = (id,title) => { //navigating 하는 또다른 방법
    router.push(`/movies/${title}/${id}`); //url catch all
    // router.push( 
    //   {
    //     pathname: `/movies/${id}`,  
    //     query: { 
    //       title, //query로 url을 string뿐아니라 객체도 보낼수있음
    //     },
    //   },`/movies/${id}`);    //"" 부분은 url로 유저에게 보여줄url -> 정보 숨기기 가능(url masking)
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
             {/* <Link href={{ pathname: `/movies/${movie.id}`, query: { title: movie.original_title, }, }} as={`/movies/${movie.id}`} > url masking*/}
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>{/*url catch all*/}
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
.container {
 display: grid;
 grid-template-columns: 1fr 1fr;
 padding: 20px;
 gap: 20px;
}
.movie img {
 max-width: 100%;
 border-radius: 12px;
 transition: transform 0.2s ease-in-out;
 box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.movie:hover img {
 transform: scale(1.05) translateY(-10px);
}
.movie h4 {
 font-size: 18px;
 text-align: center;
}
`}</style>
    </div>
  );
}
//서버사이드렌더링 function
//안에 코드는 서버에서 돌아감
//브라우저에서 소스코드를 확인하면 전보다 훨씬길어짐(pre rendering) //전에는 고작 loading 태그만 있었음
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results, //results를 리턴해줌(props는 key) 
    }
  };
}

//여기서 global css를 적용하면
//about 페이지에서는 동작하지않는다 -> next js에서는 나뉘어진 페이지별로 생각해야되기 떄문

 
//csr  : loading 화면이 보여진후 데이터를 받아옴 // navbar,footer보이고 data부분이 loading 중 //  
//ssr  : 데이터가 유효해지면 화면이 보여줌 -> navbar,footer도 안보이고 모든데이터를 받으면 그떄보임 // ssr이 완료되면 js를 꺼도 화면이보임-> html으로 이루어지기 떄문에
//-> api load가 느리다면 , 유저가 화면을 늦게본다는 단점있음(csr는 그래도 loading이라도 보이니 인내심이 늘어남)

//url masking
//url catch all