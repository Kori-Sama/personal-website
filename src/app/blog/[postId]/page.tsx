interface Params {
  postId: number;
}
const PostPage = ({ params }: { params: Params }) => {
  return <h1>Post Page {params.postId}</h1>;
};

export default PostPage;
