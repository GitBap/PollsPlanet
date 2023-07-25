import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import { getUsers } from "../utils/fetchDataFromDB";

import "./styles/profile.scss";

const Profile = ({ userInfo }) => {
  // TODO: add useContext
  const [users, setUsers] = useImmer([]);
  const [randomUserInfo, setRandomUserInfo] = useImmer([]);

  const connectUserId = users.find((user) => user?.email === userInfo?.email);

  const randomUserPhoto = async () => {
    const fetchData = await fetch("https://randomuser.me/api/");
    const randomUser = await fetchData.json(fetchData);

    setRandomUserInfo(randomUser.results[0]);
  };

  //   console.log(connectUserId);
  //   console.log(randomUserInfo);

  useEffect(() => {
    getUsers(setUsers);
    randomUserPhoto();
  }, []);

  return (
    <section className="profile">
      <div className="container">
        <h2 className="title">About you</h2>
        <div className="profile-info">
          <div className="img-block">
            <img
              src={randomUserInfo?.picture?.thumbnail}
              alt={`${connectUserId?.name}`}
            />
          </div>
          <h2>{connectUserId?.name}</h2>
          <p>
            Location:
            <span>{` ${randomUserInfo?.location?.city}, ${randomUserInfo?.location?.country}`}</span>
          </p>
          <p>
            Email:
            <span>{` ${connectUserId?.email}`}</span>
          </p>
          <p>
            Phone:
            <span>{` ${randomUserInfo?.phone}`}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
