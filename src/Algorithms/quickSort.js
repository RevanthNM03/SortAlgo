export function* quickSort(a) {
  let stack = [];
  stack.push([0, a.length - 1]);
  while (stack.length > 0) {
    let pair = stack.pop();
    let lo = pair[0];
    let hi = pair[1];
    let p = Math.floor((lo + hi) / 2);
    let value = a[p];
    let i = lo - 1;
    let j = hi + 1;
    while (true) {
      while (a[++i] < value) {
        yield [a, [1, i, p, j]];
      }
      while (a[--j] > value) {
        yield [a, [1, i, p, j]];
      }
      yield [a, [1, i, p, j]];
      if (i >= j) break;
      a = swap(a, i, j);
      yield [a, [2, i, j]];
    }
    yield [a, [0, -1, -1]];
    j++;
    if (hi > j) stack.push([j, hi]);
    j--;
    if (j > lo) stack.push([lo, j]);
  }
  return a;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

export const quickSortDesc = {
  title: "Quick Sort",
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Quicksort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quick Sort
        </a>{" "}
        is an efficient, in-place sorting algorith that in practice is faster
        than MergeSort and HeapSort. However, it is not a stable sorting
        algorithm, meaning that the relative positioning of equal sort items is
        not preserved.Quicksort is a divide and conquer algorithm. Quicksort
        first divides a large array into two smaller sub-arrays: the low
        elements and the high elements. Quicksort can then recursively sort the
        sub-arrays. The steps are:
      </p>
      <ol>
        <li>
          Pick an element, called a pivot, from the array. This is usually done
          by picking middle value of array.
        </li>
        <li>
          Holding the pivot value apply Partition operation on either sides of
          the array.
        </li>
        <li>
          <em>Partitioning:</em> reorder the array so that all elements with
          values less than the pivot come before the pivot, while all elements
          with values greater than the pivot come after it (equal values can go
          either way). After this partitioning, the pivot is in its final
          position. This is called the <em>partition</em> operation.
        </li>
        <li>
          Recursively apply the above steps to the sub-array of elements with
          smaller values and separately to the sub-array of elements with
          greater values.
        </li>
      </ol>
      <p>
        The base case of the recursion is an array of size zero or one, which
        are sorted by definition.
      </p>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em>
      <sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em>log<em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(log<em>n</em>)
    </span>
  ),
};

const sym = ["{", "}", "<", ">"];

export const quickSortCode = {
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
      <span className="fun-sec-kw">long </span>
      <span className="fun-tlt">partition</span>(
      <span className="fun-sec-kw">long </span> array[],
      <span className="fun-sec-kw"> long </span>start,
      <span className="fun-sec-kw"> long </span>end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">long </span>pivotValue = array[end];
      <br />
      {"   "}
      <span className="fun-sec-kw">long </span>pivotIndex = start-
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">long </span>j = start; j {sym[2]} end; j++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(array[j] {sym[2]}= pivotValue)
      <br />
      {"      "}
      {sym[0]}
      <br />
      {"         "}pivotIndex++;
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array,
      pivotIndex, j);
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}array = <span className="fun-tlt">swap</span>(array, pivotIndex+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      <span className="fun-kw">return </span>pivotIndex+
      <span className="fun-num">1</span>;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">long </span>
      <span className="fun-tlt">quickSort</span>(
      <span className="fun-sec-kw">long </span> array[],
      <span className="fun-sec-kw"> long </span>start,
      <span className="fun-sec-kw"> long </span>end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if</span>(start {sym[2]} end)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">long </span>index ={" "}
      <span className="fun-tlt">partition</span>(array, start, end);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, start, index-
      <span className="fun-num">1</span>);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, index+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}
      <span className="fun-kw">return </span>array;
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
      <span className="fun-sec-kw">int </span>
      <span className="fun-tlt">partition</span>(
      <span className="fun-sec-kw">int</span>* array,
      <span className="fun-sec-kw"> int </span>start,
      <span className="fun-sec-kw"> int </span>end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>pivotValue = array[end];
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>pivotIndex = start-
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">int </span>j = start; j {sym[2]} end; j++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(array[j] {sym[2]}= pivotValue)
      <br />
      {"      "}
      {sym[0]}
      <br />
      {"         "}pivotIndex++;
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array,
      pivotIndex, j);
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}array = <span className="fun-tlt">swap</span>(array, pivotIndex+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      <span className="fun-kw">return </span>pivotIndex+
      <span className="fun-num">1</span>;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">int</span>*{" "}
      <span className="fun-tlt">quickSort</span>(
      <span className="fun-sec-kw">int</span>* array,
      <span className="fun-sec-kw"> int </span>start,
      <span className="fun-sec-kw"> int </span>end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if</span>(start {sym[2]} end)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int </span>index ={" "}
      <span className="fun-tlt">partition</span>(array, start, end);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, start, index-
      <span className="fun-num">1</span>);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, index+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}
      <span className="fun-kw">return </span>array;
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
      <span className="fun-sec-kw">int </span>
      <span className="fun-tlt">partition</span>(
      <span className="fun-sec-kw">int</span>[] array,
      <span className="fun-sec-kw"> int</span> start,
      <span className="fun-sec-kw"> int</span> end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>pivotValue = array[end];
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>pivotIndex = start-
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">int </span>j = start; j {sym[2]} end; j++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(array[j] {sym[2]}= pivotValue)
      <br />
      {"      "}
      {sym[0]}
      <br />
      {"         "}pivotIndex++;
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array,
      pivotIndex, j);
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}array = <span className="fun-tlt">swap</span>(array, pivotIndex+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      <span className="fun-kw">return </span>pivotIndex+
      <span className="fun-num">1</span>;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-kw">static </span>
      <span className="fun-sec-kw">int</span>[]
      <span className="fun-tlt"> quickSort</span>(
      <span className="fun-sec-kw">int</span>[] array,{" "}
      <span className="fun-sec-kw">int</span> start,{" "}
      <span className="fun-sec-kw">int</span> end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if</span>(start {sym[2]} end)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int </span>index ={" "}
      <span className="fun-tlt">partition</span>(array, start, end);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, start, index-
      <span className="fun-num">1</span>);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, index+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}
      <span className="fun-kw">return </span>array;
      <br />
      {sym[1]}
      <br />
    </pre>
  ),
  JavaScript: (
    <pre className="code-extras">
      <span className="fun-sec-kw">funtion</span>
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
      <span className="fun-sec-kw">function </span>
      <span className="fun-tlt">partition</span>(array, start, end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">const </span>pivotValue = array[end];
      <br />
      {"   "}
      <span className="fun-sec-kw">let </span>pivotIndex = start-
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">let </span>j = start; j {sym[2]} end; j++)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(array[j] {sym[2]}= pivotValue)
      <br />
      {"      "}
      {sym[0]}
      <br />
      {"         "}pivotIndex++;
      <br />
      {"         "}array = <span className="fun-tlt">swap</span>(array,
      pivotIndex, j);
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}array = <span className="fun-tlt">swap</span>(array, pivotIndex+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      <span className="fun-kw">return </span>pivotIndex+
      <span className="fun-num">1</span>;
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">function </span>
      <span className="fun-tlt">quickSort</span>(array, start, end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if</span>(start {sym[2]} end)
      <br />
      {"   "}
      {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int </span>index ={" "}
      <span className="fun-tlt">partition</span>(array, start, end);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, start, index-
      <span className="fun-num">1</span>);
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, index+
      <span className="fun-num">1</span>, end);
      <br />
      {"   "}
      {sym[1]}
      <br />
      {"   "}
      <span className="fun-kw">return </span>array;
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
      <span className="fun-tlt"> partition</span>(array, start, end):
      <br />
      {"   "}pivotValue = array[end]
      <br />
      {"   "}pivotIndex = start-<span className="fun-num">1</span>
      <br />
      {"   "}
      <span className="fun-kw">for </span>i in range(start, end):
      <br />
      <span className="fun-kw">{"      "}if </span>array[i] {sym[2]}= pivotValue
      :
      <br />
      {"            "}pivotIndex += <span className="fun-num">1</span>
      <br />
      {"            "}array = <span className="fun-tlt">swap</span>(array,
      pivotIndex, i)
      <br />
      {"   "}array = <span className="fun-tlt">swap</span>(array, pivotIndex+
      <span className="fun-num">1</span>, end)
      <br />
      <span className="fun-kw">{"   "}return </span>pivotIndex+
      <span className="fun-num">1</span>
      <br />
      <br />
      <span className="fun-sec-kw">def</span>
      <span className="fun-tlt"> quickSort</span>(array, start, end):
      <br />
      <span className="fun-kw">{"   "}if </span>start {sym[2]} end :
      <br />
      {"      "}index = <span className="fun-tlt">partition</span>(array, start,
      end)
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, start, index-1)
      <br />
      {"      "}
      <span className="fun-tlt">quickSort</span>(array, index+1, end)
      <br />
      {"   "}
      <span className="fun-kw">return</span> array
    </pre>
  ),
};
