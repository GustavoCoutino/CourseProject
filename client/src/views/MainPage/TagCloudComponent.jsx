import React from "react";
import { TagCloud } from "react-tagcloud";

function TagCloudComponent({ tags, onTagClick }) {
  console.log(tags);
  const options = {
    luminosity: "light",
    hue: "blue",
  };

  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        Popular Tags
      </h3>
      <TagCloud
        minSize={12}
        maxSize={35}
        colorOptions={options}
        tags={tags}
        onClick={(tag) => onTagClick(tag.value)}
      />
    </div>
  );
}

export default TagCloudComponent;
