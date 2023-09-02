export default function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold text-red-600">Oops!</h1>
      <p className="mb-2 text-center text-xl font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center text-lg text-red-500">
        404 <i>Page not found</i>
      </p>
    </div>
  );
}
