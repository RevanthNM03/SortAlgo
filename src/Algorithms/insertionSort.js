export function* insertionSort(array) {
  const end = array.length;
  for (let i = 0; i < end; i++) {
    let j = i - 1;
    while (j >= 0) {
      yield [array, [1, j, j + 1]];
      if (array[j] <= array[j + 1]) {
        break;
      }
      array = swap(array, j, j + 1);
      yield [array, [2, j, j + 1]];
      j--;
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

let sym = ["{", "}", "<", ">"];

export const insertionSortDesc = {
  title: "Insertion Sort",
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Insertion_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>{" "}
      is a simple sorting algorithm that iterates through an array and at each
      iteration it removes one element from the array, finds the location it
      belongs to in the sorted list and inserts it there, repeating until no
      elements remain in the unsorted list. It is an in-place, stable sorting
      algorithm that is inefficient on large input arrays but works well for
      data sets that are almost sorted. It is more efficient in practice
      compared to other quadratic sorting algorithms like bubble sort and
      selection sort.
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

export const insertionSortCode = {
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
      <span className="fun-tlt"> insertionSort</span>(
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
      <span className="fun-sec-kw">{"      "}long</span> j = i-
      <span className="fun-num">1</span>;
      <br />
      <span className="fun-kw">{"      "}while</span>(j {sym[3]}=
      <span className="fun-num"> 0</span>)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]}=
      array[j+<span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}
      <span className="fun-kw">break</span>;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}j--;
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
      <span className="fun-tlt"> insertionSort</span>(
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
      <span className="fun-sec-kw">{"      "}int</span> j = i-
      <span className="fun-num">1</span>;
      <br />
      <span className="fun-kw">{"      "}while</span>(j {sym[3]}=
      <span className="fun-num"> 0</span>)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]}=
      array[j+<span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}
      <span className="fun-kw">break</span>;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}j--;
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
      <span className="fun-tlt"> insertionSort</span>(
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
      {"      "}
      <span className="fun-sec-kw">int</span> j = i-
      <span className="fun-num">1</span>;
      <br />
      <span className="fun-kw">{"      "}while</span>(j {sym[3]}=
      <span className="fun-num"> 0</span>)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]}=
      array[j+<span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}
      <span className="fun-kw">break</span>;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}j--;
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
      <span className="fun-tlt"> insertionSort</span>(array) {sym[0]}
      <br />
      {sym[0]}
      <br />
      <span className="fun-sec-kw">{"   "}const </span>end = array.length;
      <br />
      <span className="fun-kw">{"   "}for</span>(
      <span className="fun-sec-kw">let</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} end; i++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">let</span> j = i-
      <span className="fun-num">1</span>;
      <br />
      <span className="fun-kw">{"      "}while</span>(j {sym[3]}=
      <span className="fun-num"> 0</span>)
      <br />
      {"      "}
      {sym[0]}
      <br />
      <span className="fun-kw">{"         "}if</span>(array[j] {sym[2]}=
      array[j+<span className="fun-num">1</span>])
      <br />
      {"         "}
      {sym[0]}
      <br />
      {"            "}
      <span className="fun-kw">break</span>;
      <br />
      {"         "}
      {sym[1]}
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>);
      <br />
      {"         "}j--;
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
      <span className="fun-tlt"> insertionSort</span>(array):
      <br />
      {"   "}end = len(array)
      <br />
      <span className="fun-kw">{"   "}for </span>i in range(end):
      <br />
      {"      "}j = i-<span className="fun-num">1</span>
      <br />
      <span className="fun-kw">{"      "}while </span>j {sym[3]}={" "}
      <span className="fun-num">0</span>:
      <br />
      <span className="fun-kw">{"         "}if </span>array[j] {sym[2]} array[j+
      <span className="fun-num">1</span>] :
      <br />
      {"            "}
      <span className="fun-kw">break</span>
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array, j, j+
      <span className="fun-num">1</span>)
      <br />
      {"         "}j -= <span className="fun-num">1</span>
      <br />
      <span className="fun-kw">{"   "}return </span>array
      <br />
    </pre>
  ),
};
