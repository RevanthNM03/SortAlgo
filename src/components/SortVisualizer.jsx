const SortVisualizer = (props) => {
  const array = props.array,
    arraySize = props.arraySize,
    algorithm = props.algorithm,
    operation = props.operation,
    isExicuting = props.isExicuting,
    theme_dark = props.theme_dark,
    fullScreen = props.fullScreen;
  const colorPalate = {
    0: theme_dark ? "#318ffa" : "#fc7c88",
    1: "orange",
    2: "red",
    3: "purple",
  };
  const activity = {
    0: "Elements",
    1: algorithm === "Merge Sort" ? "Call Merge Sort" : "Comparing",
    2: algorithm === "Merge Sort" ? "Overwriting Array" : "Swapping",
    3:
      algorithm === "Quick Sort"
        ? "Pivote-Element"
        : "Lowest value in Search Array",
  };
  const slateWidth = fullScreen
    ? "800"
    : arraySize < 33
    ? "520"
    : arraySize < 66
    ? "770"
    : "1020";
  const barStyle = {
    barColor: colorPalate[operation[0]],
    barWidth: fullScreen ? 2.6 : parseFloat(slateWidth - 20) / arraySize - 4,
    textColor: arraySize < 25 ? "aliceblue" : "transparent",
  };
  return (
    <>
      <div className="main">
        <div className="algodisplay">{algorithm}</div>
        <div className="slate" style={{ width: slateWidth + "px" }}>
          <div className="bars">
            {array.map((value, index) => {
              let barHeight = fullScreen ? value * 1.8 : value * 5;
              let bColor =
                algorithm === "Quick Sort"
                  ? index === operation[1] || index === operation[3]
                    ? barStyle.barColor
                    : index === operation[2] && operation[0] === 1
                    ? "purple"
                    : theme_dark
                    ? "#318ffa"
                    : "#fc7c88"
                  : algorithm === "Merge Sort"
                  ? index >= operation[1] && index <= operation[2]
                    ? barStyle.barColor
                    : theme_dark
                    ? "#318ffa"
                    : "#fc7c88"
                  : index === operation[1] || index === operation[2]
                  ? barStyle.barColor
                  : theme_dark
                  ? "#318ffa"
                  : "#fc7c88";
              return (
                <div
                  key={index}
                  className="bar"
                  style={{
                    width: barStyle.barWidth,
                    margin: fullScreen ? "0" : "0 2px",
                    height: barHeight,
                    color: barStyle.textColor,
                    backgroundColor: bColor,
                  }}
                >
                  {value}
                </div>
              );
            })}
          </div>
        </div>
        {isExicuting ? (
          <div className="color-details">
            <ul className="color-palette">
              <li>
                <div
                  className="color"
                  style={{ backgroundColor: colorPalate[0] }}
                ></div>
                {activity[0]}
              </li>
              <li>
                <div
                  className="color"
                  style={{ backgroundColor: colorPalate[1] }}
                ></div>
                {activity[1]}
              </li>
              {algorithm !== "Merge Sort" ? (
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: colorPalate[2] }}
                  ></div>
                  {activity[2]}
                </li>
              ) : null}
              {algorithm === "Quick Sort" || algorithm === "Selection Sort" ? (
                <li>
                  <div
                    className="color"
                    style={{ backgroundColor: colorPalate[3] }}
                  ></div>
                  {activity[3]}
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortVisualizer;
