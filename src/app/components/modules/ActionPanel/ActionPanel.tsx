import styles from './ActionPanel.module.css';

const ActionPanel: React.FC = () => {
  return (
    <div className={styles.actionPanel}>
      <h3>Actions</h3>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

export default ActionPanel;
