import React from "react";

const Tag = ({tags}) => {
  return (
    <>
      <div class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
        {tags.title}
      </div>
    </>
  );
};

export default Tag;
