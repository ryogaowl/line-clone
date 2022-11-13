import styles from "../styles/Home.module.css";
import SignIn from "../components/SignIn";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Line from "../components/Line";

const Home = () => {
  const [user] = useAuthState(auth);
  return <div className={styles.container}>{user ? <Line /> : <SignIn />}</div>;
};

export default Home;
