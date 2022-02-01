import Seo from "../../components/Seo";
import { useRouter } from "next/router";

 export default function Detail( { params }) {
  const router = useRouter();
  const [title, id] = params || [];    //router.query.params||[] -> router를 사용한다면 router는 프론트에서만 실행됨
   return (
     <div>
       <Seo title={title} />
       <h4>{title}</h4>
     </div>
   );
}
//하지만 메인->상세로 통하는게아니라 바로 상세페이지로 오면 router.query.title 정보 존재x  -> 따라서 url catch all 로 수정

//srr로 url 정보만 가져오기
export function getServerSideProps({ params: { params } }) { //영화제목,id 얻기 : { params: { params } } -> server에 params가 있는거 확인가능
  return {
    props: {
      params
    },
  };
}

//dynamic route
//url 에 따라 페이지변경
//router.query.id -> url 명

/// [...id] -> catch all url // query 배열에 영화정보 + 아이디 + 등등 나머지 정보들 같이 들어옴
//movie/영화제목/영화id