import styles from "/app/Home.module.css";

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{
        background:
          "linear-gradient(180deg, rgba(0, 17, 43, 1) 18%, rgba(2, 30, 75, 0.47805059523809523) 100%)",
      }}
    >
      <main className={styles.main}>
        <h1 className={styles.title} style={{ color: "pink" }}>
          SafeHaven
        </h1>

        <p className={styles.description} style={{ color: "white" }}>
          Empower your voice, break the silence. Our platform offers a secure
          space to document <br></br> experiences, share details, and access
          assistance in times of need.
        </p>

        <div className={styles.grid}>
          <a href="register" className={styles.card} style={{ color: "white" }}>
            <h2>Register &rarr;</h2>
            <p>Create an account by inputting your information</p>
          </a>

          <a href="login" className={styles.card} style={{ color: "white" }}>
            <h2>Sign in &rarr;</h2>
            <p>Sign into an existing account</p>
          </a>
        </div>
      </main>
    </div>
  );
}
