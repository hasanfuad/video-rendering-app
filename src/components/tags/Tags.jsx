import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags, isLoading, isError, error } = useSelector(
    (state) => state.tags
  );

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // decide whta to render
  let content;
  if (tags.length > 0) {
    if (isLoading) content = <div>Loading...</div>;

    if (!isLoading && isError)
      content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && tags?.length === 0)
      content = <div className="col-span-12">No Tags found</div>;

    if (!isLoading && !isError && tags?.length > 0)
      content = tags.map((tag) => <Tag key={tag.id} tags={tag} />);
  }

  return (
    <>
      <section>
        <div class="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
          {content}
        </div>
      </section>
    </>
  );
};

export default Tags;
