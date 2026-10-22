import { useState } from "react";

function ContentSwitcher() {
  const [contentType, setContentType] = useState("text");
  let contentElement = <p>This is an Error Message, Something is Broken!</p>;
    /*
  if (contentType === "text") {
    contentElement = <p>This is some text content.</p>;
    // console.log("Text");
  } else if (contentType === "image") {
    contentElement = (
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    );
    // console.log("Image");
  } else if (contentType === "video") {
    contentElement = <p>Imagine a video player here.</p>;
    // console.log("video");
  } else {
    console.log("Something is Broken!");
  }
  */

  //   Alternatively, you could use a Switch statement!
  // /*
  switch (contentType) {
    case "text":
      contentElement = <p>This is some text content.</p>;
      // console.log("Text");
      break;
    case "image":
      contentElement = (
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
      );
      // console.log("Image");
      break;
    case "video":
      contentElement = <p>Imagine a video player here.</p>;
      // console.log("video");
      break;
    default:
      console.log("Something is Broken!");
  }
  // */
  return (
    <>
      <h1>ContentSwitcher Component Loaded Correctly!</h1>
      <div>
        <button onClick={() => setContentType("text")}>Show Text</button>
        <button onClick={() => setContentType("image")}>Show Image</button>
        <button onClick={() => setContentType("video")}>Show Video</button>
      </div>
      <div>{contentElement}</div>
    </>
  );
}

export default ContentSwitcher;
