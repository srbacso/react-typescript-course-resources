import {get} from './util/http';
import {useEffect, useState} from "react";
import BlogPosts, {BlogPost} from "./components/BlogPosts.tsx";
import fetchingImg from "./assets/data-fetching.png"
import ErrorMessage from "./components/ErrorMessage.tsx";

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    setLoading(true);
    try {
      const fetchPosts =
        async () => {
          const data = await get('https://jsonplaceholder.typicode.com/posts') as RawDataBlogPost[];
          const blogPosts: BlogPost[] = data.map(rawPost => {
            return {
              id: rawPost.id,
              title: rawPost.title,
              text: rawPost.body,
            };

          });
          setFetchedPosts(blogPosts);
        }
        fetchPosts();
    } catch (error) {
      setError((error as Error).message);
    }

    setLoading(false);
  }, []);

  let content: React.ReactNode;

  if (error) {
    content = <ErrorMessage text={error}/>;
  }

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts}/>
  }

  if (loading) {
    content = <h1>Loading Posts...</h1>
  }

  return <main><h1>Data Fetching!</h1>
    <img src={fetchingImg} alt="Data Fetching"/>
    {content}
  </main>;
}

export default App;
