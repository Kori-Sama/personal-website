interface Params {
  id: number;
}
const PostPage = ({ params }: { params: Params }) => {
  return <h1>Post Page {params.id}</h1>;
};

export default PostPage;
