export default function ErrorPage() {
	return (
		<div className="flex flex-col h-screen justify-center items-center">
			<h1 className="text-4xl font-bold mb-4 text-red-600">Oops!</h1>
			<p className="text-xl text-center mb-2 font-semibold">
				Sorry, an unexpected error has occurred.
			</p>
			<p className="text-lg text-center text-red-500">
				404 <i>Page not found</i>
			</p>
		</div>
	);
}
