import React, { Component } from "react";
import "./App.css";
import "./style/light.css";
import "./style/dark.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SortVisualizer from "./components/SortVisualizer";
import { DropdownButton, Dropdown } from "react-bootstrap";
import {
  insertionSort,
  insertionSortCode,
  insertionSortDesc,
} from "./Algorithms/insertionSort";
import {
  bubbleSort,
  bubbleSortCode,
  bubbleSortDesc,
} from "./Algorithms/bubbleSort";
import {
  quickSort,
  quickSortCode,
  quickSortDesc,
} from "./Algorithms/quickSort";
import {
  mergeSort,
  mergeSortCode,
  mergeSortDesc,
} from "./Algorithms/mergeSort";
import {
  selectionSort,
  selectionSortCode,
  selectionSortDesc,
} from "./Algorithms/selectionSort";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import AlgoInfo from "./components/AlgoInfo";
import SortCode from "./components/SortCode";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    array: [],
    operation: [-1, -1, -1],
    arraySize: 5,
    algorithm: null,
    theme: "light",
    sortSpeed: 1,
    isExicuting: false,
    theme_dark: false,
    interval: null,
    fullScreen: false,
  };

  ALGORITHM_KEY = {
    "Insertion Sort": insertionSort,
    "Bubble Sort": bubbleSort,
    "Selection Sort": selectionSort,
    "Quick Sort": quickSort,
    "Merge Sort": mergeSort,
  };

  ALGORITHM_DESC = {
    "Insertion Sort": insertionSortDesc,
    "Bubble Sort": bubbleSortDesc,
    "Selection Sort": selectionSortDesc,
    "Quick Sort": quickSortDesc,
    "Merge Sort": mergeSortDesc,
  };

  ALGORITHM_CODE = {
    "Insertion Sort": insertionSortCode,
    "Bubble Sort": bubbleSortCode,
    "Selection Sort": selectionSortCode,
    "Quick Sort": quickSortCode,
    "Merge Sort": mergeSortCode,
  };

  sortSpeed = {
    0: 0,
    1: 500,
    2: 350,
    3: 180,
    4: 80,
    5: 1,
  };

  componentDidMount() {
    this.setNewArray();
  }

  algorithms = [
    "Insertion Sort",
    "Bubble Sort",
    "Selection Sort",
    "Quick Sort",
    "Merge Sort",
  ];

  handleItemClick = (e) => {
    const algo = e.target.title;
    this.setState({
      algorithm: algo,
    });
  };

  handleArrSize = (e) => {
    const arraySize = e.target.value;
    const sortSpeed = arraySize < 25 ? 1 : arraySize < 65 ? 3 : 5;
    this.setState({
      array: this.generateRandomArray(arraySize),
      arraySize: arraySize,
      sortSpeed: sortSpeed,
    });
  };

  handleSortSpeed = (e) => {
    this.setState({
      sortSpeed: e.target.value,
    });
  };

  randomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = (arraySize) => {
    let min = 10,
      max = 100;
    let array = [];
    for (let i = 0; i < arraySize; i++) {
      array.push(this.randomNumber(max, min));
    }
    return array;
  };

  setNewArray = () => {
    const arraySize = this.state.arraySize;
    const range = (arraySize) => Array.from(Array(arraySize).keys());
    const fullarr = range(300).sort(() => Math.random() - 0.5);
    this.setState({
      array: this.state.fullScreen
        ? fullarr
        : this.generateRandomArray(arraySize),
    });
  };

  handleSort = () => {
    this.setState({
      isExicuting: true,
    });
    let algorithm = this.ALGORITHM_KEY[this.state.algorithm];
    const instance = algorithm(this.state.array);
    let stepArray = instance.next();
    let speed = this.sortSpeed[this.state.sortSpeed];
    this.setState({
      interval: setInterval(() => {
        this.setState({
          array: stepArray.value[0],
          operation: stepArray.value[1],
        });
        stepArray = instance.next();
        if (stepArray.done) {
          this.setState({
            isExicuting: false,
          });
          clearInterval(this.state.interval);
        }
      }, speed),
    });
  };

  handleStopSorting = () => {
    clearInterval(this.state.interval);
    const arraySize = this.state.arraySize;
    const range = (arraySize) => Array.from(Array(arraySize).keys());
    const fullarr = range(300).sort(() => Math.random() - 0.5);
    this.setState({
      isExicuting: false,
      array: this.state.fullScreen
        ? fullarr
        : this.generateRandomArray(arraySize),
      operation: [-1, -1, -1],
    });
  };

  classnames = (str1 = "", str2 = "", str3 = "") => {
    return str1 + " " + str2 + " " + str3;
  };

  handleThemeChange = () => {
    this.setState({
      theme_dark: !this.state.theme_dark,
    });
  };

  style = {
    boxShadow:
      "inset -6px -6px 10px rgba(185, 185, 185, 0.08),inset 6px 6px 10px rgba(0, 0, 0, 0.5)",
    fontSize: "14px",
  };

  handleFullScreen = () => {
    const fullScreen = !this.state.fullScreen;
    const arraySize = fullScreen ? 300 : 5;
    const sortSpeed = fullScreen ? 0 : 1;
    const range = (arraySize) => Array.from(Array(arraySize).keys());
    const fullarr = range(300).sort(() => Math.random() - 0.5);
    const array = fullScreen ? fullarr : this.generateRandomArray(arraySize);
    this.setState({
      sortSpeed: sortSpeed,
      array: array,
      arraySize: arraySize,
      fullScreen: fullScreen,
    });
  };

  render() {
    return (
      <div className={this.state.theme_dark ? "final_dark" : "final"}>
        <div className="App">
          <SortVisualizer
            array={this.state.array}
            arraySize={this.state.arraySize}
            algorithm={this.state.algorithm}
            operation={this.state.operation}
            isExicuting={this.state.isExicuting}
            theme_dark={this.state.theme_dark}
            fullScreen={this.state.fullScreen}
          />
          <div
            className={this.classnames(
              "switch full-screen",
              this.state.fullScreen ? "this.style" : null,
              this.state.isExicuting ? "disable" : null
            )}
            style={this.state.fullScreen ? this.style : null}
            onClick={this.handleFullScreen}
          >
            <BlurOnIcon />
          </div>
          <div className="switch theme" onClick={this.handleThemeChange}>
            <InvertColorsIcon />
          </div>
          <div className="sidebar">
            <div className="title">
              <img src={require("./image/favicon.png").default} alt="logo" />
              <div className="name">
                <p>Sort Algo</p>
                <p style={{ fontSize: "28px" }}>Visualizer</p>
              </div>
            </div>
            <div
              className={this.classnames(
                "algo-select",
                this.state.isExicuting ? "disable" : null
              )}
            >
              <DropdownButton
                variant={this.state.theme_dark ? "dark" : "light"}
                title={
                  this.state.algorithm === null
                    ? "Select an Algorithm"
                    : this.state.algorithm
                }
              >
                {this.algorithms.map((data, key) => (
                  <Dropdown.Item
                    key={key}
                    onClick={this.handleItemClick}
                    title={data}
                  >
                    {data}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <div
              className={this.classnames(
                "slider",
                this.state.fullScreen ? "blocked" : null,
                this.state.isExicuting ? "disable" : null
              )}
            >
              <span className="tag">Array Size</span>
              <div className="size">
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  onChange={this.handleArrSize}
                  value={this.state.arraySize}
                />
                <p>{this.state.arraySize}</p>
              </div>
            </div>
            <div
              className={this.classnames(
                "slider",
                this.state.fullScreen ? "blocked" : null,
                this.state.isExicuting ? "disable" : null
              )}
            >
              <span className="tag">Sorting Speed</span>
              <div className="size">
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  onChange={this.handleSortSpeed}
                  value={this.state.sortSpeed}
                />
                <p>{this.state.sortSpeed}x</p>
              </div>
            </div>
            <div
              className={this.classnames(
                "randomize",
                this.state.isExicuting ? "disable" : null
              )}
            >
              <button onClick={this.setNewArray}>Randomize</button>
            </div>
            <div
              className={this.classnames(
                "activate",
                this.state.algorithm && !this.state.isExicuting
                  ? "enable"
                  : null
              )}
            >
              <button onClick={this.handleSort}>Start Sorting</button>
            </div>
            <div
              className={this.classnames(
                "activate",
                this.state.isExicuting ? "enable" : null
              )}
            >
              <button onClick={this.handleStopSorting}>Stop Sorting</button>
            </div>
          </div>
        </div>
        <div className="about">
          {this.state.algorithm ? (
            <>
              <AlgoInfo {...this.ALGORITHM_DESC[this.state.algorithm]} />
              <div className="hr"></div>
              <SortCode {...this.ALGORITHM_CODE[this.state.algorithm]} />
              <div className="hr"></div>
              <Footer />
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
