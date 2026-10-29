import { useState, useEffect } from "react";

export default function PostFetcher() {
  // We need 3 state variables
  // const [variable, setter] = useState(initial_Value)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Plus one more to keep track of the Post number that we are on.
  const [postId, setPostId] = useState(1)

  useEffect(() => {
    console.log("Running the useEffect Function");
    // Lets reset all our variables! 
    // We are loading, Currently no errors, No post visible.
    setLoading(true)
    setError(null)
    setPost(null)
    // First, we need to fetch some data
    // We can fetch with .then
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((response) => {
    //     console.dir(response);
    //     // console.log(response.json())
    //     return response.json()
    //   })
    //   .then((data) => {
    //     console.log("Then")
    //     console.log(data);
    //   });

    //   Alternatively, we can use Async, Await
    async function fetchData() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        // If the response does not come back ok...
        if (!response.ok) {
          // Tell the componenent we are not loading
          setLoading(false)
          // and set the Response Status to the error variable
          setError(response.status)
        }

        // Otherwise, let's get the data from the Response
        const json = await response.json()
        console.log(json)
        // save it in the Post 
        setPost(json)
        // And tell the component that it is no longer loading.
        setLoading(false)
    }
    fetchData()
  }, [postId]);

//   console.log(post);
//   console.log(loading);
//   console.log(error);

  return (
    <div>
      <h1>PostFetcher</h1>
      <nav>
        <button onClick={() => {setPostId(postId-1)}}>Previous Post</button>
        <p>Post Id: {postId}</p>
        <button onClick={() => {setPostId(postId+1)}}>Next Post</button>
      </nav>
      {/* If there is an error, Load a p tag with the Error Code */}
      {error && <p>Error code: {error}</p>}
      {/* If instead, the page is Loading, show that it is Loading... */}
      {loading && <p>Page is Loading...</p>}
      {/* Otherwise, if the post exists, and has an id, show the post. */}
      {post && post.id && <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>}
    </div>
  );
}
