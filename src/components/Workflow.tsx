import styles from "../styles/Workflow.module.css";

export default function Workflow() {
  return (
    <section className={styles.workflowSection} id="features">
      <div className={styles.grid}>
        <div className={styles.workflowStep}>
          <h2 className={styles.stepTitle}>1. Guideline curation</h2>
          <p className={styles.stepDescription}>
            Maintainers design the contribution flow for the contributors.
          </p>
        </div>
        <div className={styles.workflowStep}>
          <h2 className={styles.stepTitle}>2. Contribution assistance</h2>
          <p className={styles.stepDescription}>
            Developers get guided through the flow in the IDE.
          </p>
        </div>
        <div className={styles.workflowStep}>
          <h2 className={styles.stepTitle}>3. Failure analysis & iteration</h2>
          <p className={styles.stepDescription}>
            Spot bottlenecks in the contribution flow and improve.
          </p>
        </div>
      </div>
    </section>
  );
}
