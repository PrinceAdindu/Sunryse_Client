import { useEffect, useState } from 'react';
import Avator from '../../../components/avator/Avator';
import Banner from '../../../components/banner/Banner';
import Article from '../../../components/article/Article';
import StyledButton from '../../../components/styledButton/StyledButton';

import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import useToast from '../../../hooks/useToast';
import { getDirectory } from './directoryHelper';

import directoryImg from '../../../assets/DirectoryImage.png';
import profilePicture from '../../../assets/ProfilePicture.png';
import articleImg from '../../../assets/directoryVideo.png';

import styles from './Directory.module.scss';

const Directory = () => {
  const [directory, setDirectory] = useState({ url: '', status: 'off' });

  const axios = useAxiosPrivate();
  const toast = useToast();

  const article = {
    title: 'Meet Our AI Powered Sunryse Directory',
    description:
      'Clients from across North America visit our directory to be accurately matched with a clinic that works for them. Clients first go through a short clinically-developed quiz. Next, our proprietary AI uses clinic-website data and quiz data to find the best options for the client.',
    img: articleImg,
  };

  useEffect(() => {
    const fetch = async () => {
      getDirectory(axios, toast, setDirectory);
    };
    fetch();
  }, []);

  const Profile = () => (
    <div className={styles.profile}>
      <Avator imgUrl={profilePicture} size="large" />
      <div className={styles.profileDescription}>
        <h4>Terra Therapy</h4>
        <p>Private Clinic</p>
        <StyledButton text="Edit" className={styles.button} />
      </div>
    </div>
  );

  const ProfileDetail = () => (
    <div className={styles.profileDetail}>
      <h4>Sunryse Directory</h4>
      <a href={`${directory?.url || 'www.therapytoday/terratherapy'}`}>
        www.therapytoday/terratherapy
      </a>
      <h4
        className={`${styles.status} ${
          directory?.status.toLowerCase() === 'on' && styles.published
        }`}
      >
        Published
      </h4>
    </div>
  );

  return (
    <div className={styles.screen}>
      <Banner
        title="Sunryse Directory Status"
        text=" Your clinic is currently unavailable in the Sunryse Directory and not
          accepting new clients"
        checkbox
        onChange={() => {}}
        isOff={directory?.status}
      />
      <div className={styles.card}>
        <h4>Profile</h4>
        <div className={styles.profileContainer}>
          <Profile />
          <ProfileDetail />
          <img src={directoryImg} alt="Directory search image" />
        </div>
      </div>
      <Article article={article} />
    </div>
  );
};

export default Directory;
