import React from "react";
import GrInstagramGallery from "./gstudio-instagram-gallery";

export default function App() {
  const [data, setData] = React.useState(null);

  const instagramFetch = () => {
    fetch(
      "https://api.instagram.com/v1/users/276491661/media/recent?access_token=276491661.e40d433.1c580924980d41abb1f81860547473e5"
    )
      .then(res => res.json())
      .then(res => setData(res.data))
      .catch(console.error)
      .finally(() => console.log("Finish"));
  };

  React.useEffect(() => {
    instagramFetch();
  }, []);

  return <GrInstagramGallery imageSize={200} data={data} />;
}
