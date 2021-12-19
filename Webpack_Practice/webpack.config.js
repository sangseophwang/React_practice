// import
// node.js 환경에서 언제든지 가져와 사용할 수 있는 path라는 전용 모듈을 변수에 할당
const path = require("path");

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js",

  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname : 현재 파일(webpack.config.js)이 있는 경로 지칭
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    // 기존에 만들어진 빌드 파일을 제거하는 옵션
    clean: true,
  },
};
