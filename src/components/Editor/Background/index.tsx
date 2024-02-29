import styles from "./index.module.css";

const Background = () => {
  const defaults = {
    gridStrokeWidth: 0.5,
    gridDots: false,
    gridSections: 5,
    gridSize: 24,
    scale: 1,
    offset: {
      x: 0,
      y: 0,
    },
  };

  const useDots = defaults.gridDots;
  const gridSections = defaults.gridSections;
  const gridSize = defaults.gridSize;
  const strokeWidth = defaults.gridStrokeWidth;

  const scaledGap = defaults.scale * gridSize;
  const frameSize = scaledGap * gridSections;
  const bgSize = useDots ? scaledGap : frameSize;
  let bgX = defaults.offset.x % bgSize;
  let bgY = defaults.offset.y % bgSize;

  const getGridLines = (strokeWidth: number) => {
    const frameD = `M0 0 V${frameSize} M${frameSize} 0 V${frameSize} M0 0 H${frameSize} M0 ${frameSize} V${frameSize}`;
    let hD = "";
    let vD = "";
    for (let i = 1; i < gridSize; i++) {
      const sectSize = i * scaledGap;
      hD += `M0 ${sectSize} H${frameSize} `;
      vD += `M${sectSize} 0 V${frameSize} `;
    }

    const innerPath = `<path stroke="#444" stroke-width="${strokeWidth}" d="${hD} ${vD}" />`;
    const framePath = `<path stroke="#aaa" stroke-width="${strokeWidth}" d="${frameD}" />`;

    return `${innerPath} ${framePath}`;
  };

  const svgPath = useDots
    ? `<circle fill="#555" cx="${strokeWidth}" cy="${strokeWidth}" r="${strokeWidth}" />`
    : getGridLines(strokeWidth);

  const svgImg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width="${bgSize}" height="${bgSize}">${svgPath}</svg>`
  );
  const bgImg = `url("data:image/svg+xml;utf8,${svgImg}")`;

  return (
    <div className={styles.Background}>
      <div
        className={styles.Grid}
        style={{
          backgroundImage: bgImg,
          backgroundPosition: `${bgX}px ${bgY}px`,
        }}
      ></div>
    </div>
  );
};

export default Background;
