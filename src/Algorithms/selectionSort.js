function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

export function* selectionSort(array) {
  const end = array.length;
  for (let i = 0; i < end - 1; i++) {
    let min = array[i];
    let index = i;
    for (let j = i + 1; j < end; j++) {
      yield [array, [1, j, index]];
      if (array[j] < min) {
        min = array[j];
        yield [array, [3, -1, j]];
        index = j;
      }
    }
    array = swap(array, i, index);
    yield [array, [2, i, index]];
    yield [array, [0, -1, -1]];
  }
  return;
}

export const selectionSortDesc = {
  title: "Selection Sort",
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Selection_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Selection Sort
      </a>{" "}
      is an in-place comparison sorting algorithm that divides the input list
      into two parts: the sublist of items already sorted, which is built up
      from left to right at the front (left) of the list, and the sublist of
      items remaining to be sorted that occupy the rest of the list. Initially,
      the sorted sublist is empty and the unsorted sublist is the entire input
      list. The algorithm proceeds by finding the smallest element in the
      unsorted sublist, exchanging (swapping) it with the leftmost unsorted
      element (putting it in sorted order), and moving the sublist boundaries
      one element to the right.
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
  bestCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  space: <span>O(1)</span>,
};

let sym = ["{", "}", "<", ">"];

export const selectionSortCode = {
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
      <span className="fun-tlt"> selectionSort</span>(
      <span className="fun-sec-kw">long</span> array[],{" "}
      <span className="fun-sec-kw">long</span> end)
      <br />
      {sym[0]}
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">long</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end-
      <span className="fun-num">1</span>; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">long</span> min = array[i];
      <br />
      {"      "}
      <span className="fun-sec-kw">long</span> index = i;
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">long</span> j = i+
      <span className="fun-num">1</span>; j {sym[2]} end; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]} min)
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}min = array[j];
      <br />
      {"            "}index = j;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}array = <span className="fun-tlt">swap</span>(array, i, index);
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
      <span className="fun-tlt"> selectionSort</span>(
      <span className="fun-sec-kw">int</span>* array,{" "}
      <span className="fun-sec-kw">int</span> end)
      <br />
      {sym[0]}
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end-
      <span className="fun-num">1</span>; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int</span> min = array[i];
      <br />
      {"      "}
      <span className="fun-sec-kw">int</span> index = i;
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">int</span> j = i+
      <span className="fun-num">1</span>; j {sym[2]} end; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]} min)
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}min = array[j];
      <br />
      {"            "}index = j;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}array = <span className="fun-tlt">swap</span>(array, i, index);
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
      <span className="fun-tlt"> selectionSort</span>(
      <span className="fun-sec-kw">int</span>[] array)
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}int </span>end = array.length;
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end-
      <span className="fun-num">1</span>; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int</span> min = array[i];
      <br />
      {"      "}
      <span className="fun-sec-kw">int</span> index = i;
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">int</span> j = i+
      <span className="fun-num">1</span>; j {sym[2]} end; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]} min)
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}min = array[j];
      <br />
      {"            "}index = j;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}array = <span className="fun-tlt">swap</span>(array, i, index);
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
      <span className="fun-tlt"> selectionSort</span>(array) {sym[0]}
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}const </span>end = array.length;
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">let</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end-
      <span className="fun-num">1</span>; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">let</span> min = array[i];
      <br />
      {"      "}
      <span className="fun-sec-kw">let</span> index = i;
      <br />
      <span className="fun-kw">{"      "}for</span>(
      <span className="fun-sec-kw">let</span> j = i+
      <span className="fun-num">1</span>; j {sym[2]} end; j++)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]} min)
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}min = array[j];
      <br />
      {"            "}index = j;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}array = <span className="fun-tlt">swap</span>(array, i, index);
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
      <span className="fun-tlt"> selectionSort</span>(array):
      <br />
      {"   "}end = len(array)
      <br />
      <span className="fun-kw">{"   "}for </span>i in range(end-
      <span className="fun-num">1</span>):
      <br />
      {"      "}min = array[i]
      <br />
      {"      "}index = i
      <br />
      <span className="fun-kw">{"      "}for </span>j in range(i+
      <span className="fun-num">1</span>, end):
      <br />
      <span className="fun-kw">{"         "}if </span>array[j] {sym[2]} min:
      <br />
      {"            "}min = array[j]
      <br />
      {"            "}index = j
      <br />
      {"       "}array = <span className="fun-tlt">swap</span>(array, i, index)
      <br />
      <span className="fun-kw">{"   "}return </span>array
      <br />
    </pre>
  ),
};
