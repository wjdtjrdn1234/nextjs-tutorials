const API_KEY =  process.env.API_KEY

module.exports = {
  reactStrictMode: true,
  async redirects() { //redirect ->url 바꿔줌
    return [
      {
        source: "/old-blog/:path*",  //어떤주소로 갈거면  //:path* -> pattern matching
        destination: "/new-sexy-blog/:path*", //우리는 유저를 //new-sexy-blog/:path* 주소로 보냄 
        permanent: false, //redirection이 영구적인지 아닌지
      },
    ];
  },
  async rewrites() { //rewrites -> 유저를 redirect 시키긴 하지만 url은 변하지않음(redirects와 차이점)
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  }
}

//redirects,rewrites
