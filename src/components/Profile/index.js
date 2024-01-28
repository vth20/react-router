import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { useProfileLogics } from "../../store/profile.store/profile.selector";
import { useAppLogics } from "../../store/app.store/app.selector";
import User from "../User";
const Profile = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { post, onGetPostUser } = useProfileLogics();
  const { user, onGetProfileUser } = useAppLogics();
  const postId = searchParams.get("post-id");
  useEffect(() => {
    onGetProfileUser({ id });
  }, [id]);
  useEffect(() => {
    onGetPostUser({ id: postId });
  }, [postId]);
  return (
    <>
      <h1>THIS IS PROFILE PAGE</h1>
      <span>user id: {id}</span>
      <br />
      {postId && <span>post id: {postId}</span>}
      <br />
      {user && <User data={user} />}
      <br />
      {post?.map((item, id) => {
        return <div key={id}>{JSON.stringify(item)}</div>;
      })}
    </>
  );
};
export default Profile;
