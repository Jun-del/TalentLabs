import Post from "./Post";

function Blog({ posts }) {
	const content = posts.map((post) => {
		return <Post key={post.id} post={post} />;
	});

	return (
		<div>
			<ol>{content}</ol>
		</div>
	);
}

export default Blog;
