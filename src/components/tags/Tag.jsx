import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagsRemoved, tagsSelected } from "../../features/filter/filterSlice";

const Tag = ({ tags }) => {
  const dispatch = useDispatch();

  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(tags.title) ? true : false;

  const handleClick = () => {
    if (isSelected) {
      dispatch(tagsRemoved(tags.title));
    } else {
      dispatch(tagsSelected(tags.title));
    }
  };

  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <>
      <div onClick={handleClick} className={style}>
        {tags.title}
      </div>
    </>
  );
};

export default Tag;

// bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer
