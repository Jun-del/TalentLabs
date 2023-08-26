function Post(props) {
	const { id, title, body } = props.post;

	return (
		<li>
			<h2>{`#${id} - ${title}`}</h2>
			<p>{body}</p>
		</li>
	);
}

export default Post;
