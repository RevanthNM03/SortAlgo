export function* bubbleSort(array) {
  const end = array.length;
  for (let i = 0; i < end; i++) {
    for (let j = 0; j < end - i - 1; j++) {
      yield [array, [1, j, j + 1]];
      if (array[j] > array[j + 1]) {
        array = swap(array, j, j + 1);
        yield [array, [2, j, j + 1]];
      }
    }
    yield [array, [0, -1, -1]];
  }
}

function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  return array;
}

export const bubbleSortDesc = {
  title: "Bubble Sort",
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>{" "}
      is a simple sorting algorithm that repeatedly steps through the list,
      compares adjacent elements and swaps them if they are in the wrong
      order.The pass through the list is repeated until the list is sorted. The
      algorithm, which is a comparison sort, is named for the way smaller or
      larger elements "bubble" to the top of the list. Although the algorithm is
      simple, it is too slow and impractical for most problems
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>,
};

let sym = ["{", "}", "<", ">"];

export const bubbleSortCode = {
  C: (
    <pre className="code-extras">
      <span className="fun-sec-kw">long</span>
      <span className="fun-tlt"> swap</span>(
      <span className="fun-sec-kw">long</span> array[],{" "}
      <span className="fun-sec-kw">long</span> a,{" "}
      <span className="fun-sec-kw">long</span> b)
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}long </span>temp = array[a];
      <br />
      {"   "}array[a] = array[b];
      <br />
      {"   "}array[b] = temp;
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">long</span>
      <span className="fun-tlt"> bubbleSort</span>(
      <span className="fun-sec-kw">long</span> array[],{" "}
      <span className="fun-sec-kw">long</span> end)
      <br />
      {sym[0]}
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">long</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">long</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} end-i-
      <span className="fun-num">1</span>; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[3]} array[j+
      <span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
    </pre>
  ),
  CPP: (
    <pre className="code-extras">
      <span className="fun-sec-kw">int</span>*
      <span className="fun-tlt"> swap</span>(
      <span className="fun-sec-kw">int</span>* array,{" "}
      <span className="fun-sec-kw">int</span> a,{" "}
      <span className="fun-sec-kw">int</span> b)
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}int </span>temp = array[a];
      <br />
      {"   "}array[a] = array[b];
      <br />
      {"   "}array[b] = temp;
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">int</span>*
      <span className="fun-tlt"> bubbleSort</span>(
      <span className="fun-sec-kw">int</span>* array,{" "}
      <span className="fun-sec-kw">int</span> end)
      <br />
      {sym[0]}
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">int</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} end-i-
      <span className="fun-num">1</span>; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[3]} array[j+
      <span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
    </pre>
  ),
  Java: (
    <pre className="code-extras">
      <span className="fun-kw">static </span>
      <span className="fun-sec-kw">int</span>[]
      <span className="fun-tlt"> swap</span>(
      <span className="fun-sec-kw">int</span>[] array,{" "}
      <span className="fun-sec-kw">int</span> a,{" "}
      <span className="fun-sec-kw">int</span> b)
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}int </span>temp = array[a];
      <br />
      {"   "}array[a] = array[b];
      <br />
      {"   "}array[b] = temp;
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-kw">static </span>
      <span className="fun-sec-kw">int</span>[]
      <span className="fun-tlt"> bubbleSort</span>(
      <span className="fun-sec-kw">int</span>[] array)
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}int </span>end = array.length;
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">int</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} end-i-
      <span className="fun-num">1</span>; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[3]} array[j+
      <span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
    </pre>
  ),
  JavaScript: (
    <pre className="code-extras">
      <span className="fun-sec-kw">function</span>
      <span className="fun-tlt"> swap</span>(array, a, b)
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}const </span>temp = array[a];
      <br />
      {"   "}array[a] = array[b];
      <br />
      {"   "}array[b] = temp;
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">function</span>
      <span className="fun-tlt"> bubbleSort</span>(array) {sym[0]}
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}const </span>end = array.length;
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">int</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} end-i-
      <span className="fun-num">1</span>; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[3]} array[j+
      <span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      <span className="fun-kw">{"   "}return </span>array;
      <br />
      {sym[1]}
      <br />
    </pre>
  ),
  Python: (
    <pre className="code-extras">
      <span className="fun-sec-kw">def</span>
      <span className="fun-tlt"> swap</span>(array, a, b):
      <br />
      {"   "}array[a], array[b] = array[b], array[a]
      <br />
      <span className="fun-kw">{"   "}return </span>array
      <br />
      <br />
      <span className="fun-sec-kw">def</span>
      <span className="fun-tlt"> bubbleSort</span>(array):
      <br />
      {"   "}end = len(array)
      <br />
      <span className="fun-kw">{"   "}for </span>i in range(end):
      <br />
      <span className="fun-kw">{"      "}for </span>j in range(end-i-
      <span className="fun-num">1</span>):
      <br />
      <span className="fun-kw">{"         "}if </span>array[j] {sym[3]} array[j+
      <span className="fun-num">1</span>]:
      <br />
      {"            "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>)
      <br />
      <span className="fun-kw">{"   "}return </span>array
      <br />
    </pre>
  ),
};
