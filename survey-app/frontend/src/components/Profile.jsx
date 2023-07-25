import React, { useEffect } from "react";
import { useImmer } from "use-immer";
import { Link } from "react-router-dom";
import { getUsers, surveysCounter } from "../utils/fetchDataFromDB";

import "./styles/profile.scss";

const Profile = ({ userInfo }) => {
  // TODO: add useContext
  const [users, setUsers] = useImmer([]);
  const [randomUserInfo, setRandomUserInfo] = useImmer([]);
  const [surveyCount, setSurveyCount] = useImmer(0);

  const connectUserId = users.find((user) => user?.email === userInfo?.email);

  const randomUserPhoto = async () => {
    const fetchData = await fetch("https://randomuser.me/api/");
    const randomUser = await fetchData.json(fetchData);

    setRandomUserInfo(randomUser.results[0]);
  };

  useEffect(() => {
    getUsers(setUsers);
    randomUserPhoto();
    surveysCounter(setSurveyCount, connectUserId?.id);
  }, []);

  return (
    <section className="profile">
      <div className="container">
        <h2 className="title">About you</h2>
        <div className="wrapper">
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
          <div className="statistic">
            <h2>Your statistics</h2>
            <p className="count-text">
              You have already created
              <span className="count"> {surveyCount}</span> surveys.
            </p>

            <p>
              Go to see all <Link to={"/surveys"}>surveys</Link>.
            </p>
            <p>
              Go to create a new <Link to={"/create-survey"}>surveys</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
