import React from 'react';

const Banner = ({ users }) => {
  return (
    <div>
      <div>banner</div>
      {users.map(user => {
        return(<h1 key={user.id}>{user.name}</h1>);
      })}
    </div>
  );
};

export default Banner;