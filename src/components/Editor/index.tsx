import Background from "./Background";
import CenterRenderer from "./CenterRenderer";
import GraphRenderer from "./GraphRenderer";

import styles from "./index.module.css";

const Editor = () => {
  return (
    <div className={styles.Workspace}>
      <Background />
      <svg
        className={styles.LinksRenderer}
        width={editor.size.width}
        height={editor.size.height}
      >
        <CenterRenderer />
        <GraphRenderer />
      </svg>
    </div>
  );
};

export default Editor;
