import Link from "next/link";

export default props => (
  // as = 라우트 마스킹 url 깔끔하게
  <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
    <a>
      {props.title}
      {/* next js의 스타일링 법. 이렇게 스타일을 태그안에 지정하면 자동으로 클래스명이 jsx-1234등등으로 매겨진다
          jsx global을 하면 글로벌 스타일이 되며 따로 클래스명이 지정되어지지않음.
      */}
      <style jsx>{`
        a {
          background-color: red;
        }
      `}</style>
    </a>
  </Link>
);
