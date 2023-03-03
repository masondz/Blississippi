import Layout from '../../components/layout';

export default function Post() {
  return <Layout>...</Layout>;
}

import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}