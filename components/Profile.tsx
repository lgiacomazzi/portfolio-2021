import styles from "../styles/components/Profile.module.css";
import CodeSnippet from "../components/CodeSnippet";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <CodeSnippet>
        <div className={styles.profileContent}>
          <img
            className={styles.profileImage}
            src="https://avatars.githubusercontent.com/u/40430577?v=4"
            alt="Luciano Giacomazzi Profile Picture"
          />
          <div>
            <h4>luciano giacomazzi</h4>
            <p className="comment">UX Designer</p>
            <p className="comment">Florianópolis - SC</p>
          </div>
        </div>
      </CodeSnippet>
    </div>
  );
}
