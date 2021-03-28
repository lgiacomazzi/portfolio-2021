import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <span className="code code-purple">()</span>
      <span className="code code-green"> => </span>
      <span className="code">{"{"}</span>
      <div className={styles.profileContent}>
        <img
          className={styles.profileImage}
          src="/images/profile-1.png"
          alt="Luciano Giacomazzi Profile Picture"
        />
        <div>
          <h4>luciano giacomazzi</h4>
          <p className="comment">UX Designer</p>
          <p className="comment">Florianópolis - SC</p>
        </div>
      </div>
      <span className="code">{"}"}</span>
    </div>
  );
}
