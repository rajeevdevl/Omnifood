import styles from "./CallToAction.module.css";
import ContainerGrid from "../../UI/ContainerGrid";

const CallToAction = () => {
  return (
    <section className={styles.sectionCta} id="ctaform">
      <ContainerGrid className={styles.CallContainer}>
        <div className={styles.grid}>
          <div className={styles.ctaTextBox}>
            <h2 className={`${styles.headingSecondary} heading-secondary`}>
              We offer a free sample meal
            </h2>
            <p className={styles.ctaText}>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form action="#" className={styles.ctaForm}>
              <div>
                <label for="name">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  id="name"
                  required
                />
              </div>

              <div>
                <label for="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="someone@example.com"
                  required
                />
              </div>

              <div>
                <label for="select-where">Where did you hear from us ?</label>
                <select id="select-where" required>
                  <option value="">Select one option</option>
                  <option value="friends">Friends and Family</option>
                  <option value="youtube">Youtube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                </select>
              </div>

              <button className={`${styles.btn} ${styles.btnForm}`}>
                Sign up now
              </button>
            </form>
          </div>
          <div
            className={styles.ctaImgBox}
            role="img"
            aria-label="woman enjoying food"
          ></div>
        </div>
      </ContainerGrid>
    </section>
  );
};

export default CallToAction;
