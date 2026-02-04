import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex-col-center min-h-screen gap-4">
        <h1 className="text-6xl font-bold text-gray-800">{error.status}</h1>
        <p className="text-xl text-gray-600">{error.statusText}</p>
        <Link
          to="/"
          className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-col-center min-h-screen gap-4">
      <h1 className="text-4xl font-bold text-gray-800">오류가 발생했습니다</h1>
      <p className="text-lg text-gray-600">잠시 후 다시 시도해주세요</p>
      <Link
        to="/"
        className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default Error;
