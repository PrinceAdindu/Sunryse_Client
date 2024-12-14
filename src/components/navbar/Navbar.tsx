import React, {useCallback} from "react";
import {useState, useEffect} from "react";

import NotificationsIcon from "@mui/icons-material/NotificationsNone";
import LockIcon from "@mui/icons-material/Lock";

import {useGetClinic} from "../../services/api/clinic/useGetClinic";
import {GetClinicDataRequestPayload} from "../../services/api/clinic/clinicService";

import styles from "./Navbar.module.scss";

type NavbarClinicDataResponsePayload = {
  data: {
    account: {email: string};
  };
};

export default function Navbar() {
  const [clinicName, setClinicName] = useState("");

  const clinicData = useGetClinic();

  const getClinicName = useCallback(
    async (payload: GetClinicDataRequestPayload) => {
      const response: NavbarClinicDataResponsePayload =
        await clinicData.mutateAsync(payload);
      setClinicName(response.data.account.email);
    },
    [clinicData]
  );

  // const logoutUser = useCallback(
  //   async (payload: GetClinicDataRequestPayload) => {
  //     const data: NavbarClinicDataResponsePayload =
  //       await clinicData.mutateAsync(payload);
  //     setClinicName(data.email);
  //   },
  //   [clinicData]
  // );

  useEffect(() => {
    const payload = {data: {fields: ["account.email"]}};
    getClinicName(payload);
  }, []);

  function Notifications() {
    return (
      <div className={styles.iconContainer}>
        <NotificationsIcon className={styles.icon} fontSize="medium" />
      </div>
    );
  }
  function Logout() {
    return (
      <div className={styles.iconContainer}>
        <LockIcon className={styles.icon} onClick={() => logoutUser()} />{" "}
      </div>
    );
  }
  return (
    <div className={styles.navBarContainer}>
      <p className={styles.clinicName}>{clinicName}</p>
      <div className={styles.navOptionsContainer}>
        <Notifications />
        <Logout />
      </div>
    </div>
  );
}
