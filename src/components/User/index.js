import React from "react";

const User = ({ data }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {data?.id}</p>
      <p>Name: {data?.name}</p>
      <p>Username: {data?.username}</p>
      <p>Email: {data?.email}</p>
      <h3>Address:</h3>
      <p>Street: {data?.address?.street}</p>
      <p>Suite: {data?.address?.suite}</p>
      <p>City: {data?.address?.city}</p>
      <p>Zipcode: {data?.address?.zipcode}</p>
      <h4>Geo Location:</h4>
      <p>Latitude: {data?.address?.geo?.lat}</p>
      <p>Longitude: {data?.address?.geo?.lng}</p>
    </div>
  );
};

export default User;
