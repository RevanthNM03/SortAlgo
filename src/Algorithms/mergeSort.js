function createStack(array, start, end) {
  if (start >= end) {
    return;
  }
  var mid = start + parseInt((end - start) / 2);
  stack.push([start, mid, end]);
  createStack(array, mid + 1, end);
  createStack(array, start, mid);
}

function* merge(array, start, mid, end) {
  const left = array.slice(start, mid + 1);
  const right = array.slice(mid + 1, end + 1);
  const n1 = left.length;
  const n2 = right.length;
  let count1 = 0;
  let count2 = 0;
  let index = start;

  while (count1 < n1 && count2 < n2) {
    if (left[count1] <= right[count2]) {
      yield [array, [1, start, end]];
      array[index] = left[count1];
      count1++;
      yield [array, [1, start, end]];
    } else {
      yield [array, [1, start, end]];
      array[index] = right[count2];
      count2++;
      yield [array, [1, start, end]];
    }
    index++;
  }
  while (count1 < n1) {
    yield [array, [1, start, end]];
    array[index] = left[count1];
    count1++;
    index++;
    yield [array, [1, start, end]];
  }
  while (count2 < n2) {
    yield [array, [1, start, end]];
    array[index] = right[count2];
    count2++;
    index++;
    yield [array, [1, start, end]];
  }
  yield [array, [0, start, end]];
}

let stack = [];
export function* mergeSort(array) {
  createStack(array, 0, array.length - 1);
  while (stack.length !== 0) {
    const points = stack.pop();
    const start = points[0];
    const mid = points[1];
    const end = points[2];
    const instance = merge(array, start, mid, end);
    let stepArray = instance.next();
    while (!stepArray.done) {
      yield stepArray.value;
      stepArray = instance.next();
    }
  }
}

export const mergeSortDesc = {
  title: "Merge Sort",
  description: (
    <div>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Merge_sort"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merge Sort
        </a>{" "}
        is an efficient, stable sorting algorith that makes use of the divide
        and conquer strategy. Conceptually the algorithm works as follows:
      </p>
      <ol>
        <li>
          Divide the unsorted list into <em>n</em> sublists, each containing one
          element(a list of one element is considered sorted)
        </li>
        <li>
          Repeatedly merge sublists to produce new sorted sublists until there
          is only one sublist remaining. This will be the sorted list.
        </li>
      </ol>
    </div>
  ),
  worstCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  avgCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  bestCase: (
    <span>
      O(<em>n</em> log <em>n</em>)
    </span>
  ),
  space: (
    <span>
      O(<em>n</em>)
    </span>
  ),
};

const sym = ["{", "}", "<", ">", "&&"];

export const mergeSortCode = {
  C: (
    <pre className="code-extras">
      <span className="fun-sec-kw">void</span>
      <span className="fun-tlt"> merge</span>(
      <span className="fun-sec-kw">long</span> array[],{" "}
      <span className="fun-sec-kw">long</span> start,{" "}
      <span className="fun-sec-kw">long</span> mid,{" "}
      <span className="fun-sec-kw">long</span> end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">long </span>count1 ={" "}
      <span className="fun-num">0</span>, count2 ={" "}
      <span className="fun-num">0</span>, index = start;
      <br />
      {"   "}
      <span className="fun-sec-kw">long </span>n1 = mid-start+
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-sec-kw">long </span>n2 = end-mid;
      <br />
      <br />
      {"   "}
      <span className="fun-sec-kw">long </span>left[n1], right[n2];
      <br />
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">long</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} n1; i++)
      <br />
      {"      "}left[i] = array[start+i];
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">long</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} n2; j++)
      <br />
      {"      "}right[j] = array[mid+<span className="fun-num">1</span>+j];
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1 {sym[4]} count2{" "}
      {sym[2]} n2) {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(left[count1] {sym[2]}= right[count2]){" "}
      {sym[0]}
      <br />
      {"         "}array[index] = left[count1];
      <br />
      {"         "}count1++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}
      <span className="fun-kw">else</span> {sym[0]}
      <br />
      {"         "}array[index] = right[count2];
      <br />
      {"         "}count2++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1) {sym[0]}
      <br />
      {"      "}array[index] = left[count1];
      <br />
      {"      "}count1++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count2 {sym[2]} n2) {sym[0]}
      <br />
      {"      "}array[index] = right[count2];
      <br />
      {"      "}count2++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">long </span>
      <span className="fun-tlt">mergeSort</span>(
      <span className="fun-sec-kw">long </span>array[],
      <span className="fun-sec-kw">long </span>start,
      <span className="fun-sec-kw">long </span>end) {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if </span>(start {sym[2]} end) {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">long </span>mid = start+(end-start)/
      <span className="fun-num">2</span>;
      <br />
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, start, mid);
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, mid+
      <span className="fun-num">1</span>, end);
      <br />
      {"      "}
      <span className="fun-tlt">merge </span>(array, start, mid, end);
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
      <span className="fun-sec-kw">void</span>
      <span className="fun-tlt"> merge</span>(
      <span className="fun-sec-kw">int</span>* array,{" "}
      <span className="fun-sec-kw">int</span> start,{" "}
      <span className="fun-sec-kw">int</span> mid,{" "}
      <span className="fun-sec-kw">int</span> end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>count1 ={" "}
      <span className="fun-num">0</span>, count2 ={" "}
      <span className="fun-num">0</span>, index = start;
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>n1 = mid-start+
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>n2 = end-mid;
      <br />
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>left[n1], right[n2];
      <br />
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} n1; i++)
      <br />
      {"      "}left[i] = array[start+i];
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">int</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} n2; j++)
      <br />
      {"      "}right[j] = array[mid+<span className="fun-num">1</span>+j];
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1 {sym[4]} count2{" "}
      {sym[2]} n2) {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(left[count1] {sym[2]}= right[count2]){" "}
      {sym[0]}
      <br />
      {"         "}array[index] = left[count1];
      <br />
      {"         "}count1++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}
      <span className="fun-kw">else</span> {sym[0]}
      <br />
      {"         "}array[index] = right[count2];
      <br />
      {"         "}count2++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1) {sym[0]}
      <br />
      {"      "}array[index] = left[count1];
      <br />
      {"      "}count1++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count2 {sym[2]} n2) {sym[0]}
      <br />
      {"      "}array[index] = right[count2];
      <br />
      {"      "}count2++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">int</span>*
      <span className="fun-tlt"> mergeSort</span>(
      <span className="fun-sec-kw">int</span>* array,
      <span className="fun-sec-kw">int </span>start,
      <span className="fun-sec-kw">int </span>end) {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if </span>(start {sym[2]} end) {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int </span>mid = start+(end-start)/
      <span className="fun-num">2</span>;
      <br />
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, start, mid);
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, mid+
      <span className="fun-num">1</span>, end);
      <br />
      {"      "}
      <span className="fun-tlt">merge </span>(array, start, mid, end);
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
      <span className="fun-sec-kw">void</span>
      <span className="fun-tlt"> merge</span>(
      <span className="fun-sec-kw">int</span>[] array,{" "}
      <span className="fun-sec-kw">int</span> start,{" "}
      <span className="fun-sec-kw">int</span> mid,{" "}
      <span className="fun-sec-kw">int</span> end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>count1 ={" "}
      <span className="fun-num">0</span>, count2 ={" "}
      <span className="fun-num">0</span>, index = start;
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>n1 = mid-start+
      <span className="fun-num">1</span>;
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>n2 = end-mid;
      <br />
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>left[] ={" "}
      <span className="fun-kw">new </span>
      <span className="fun-sec-kw">int</span>[n1];
      <br />
      {"   "}
      <span className="fun-sec-kw">int </span>right[] ={" "}
      <span className="fun-kw">new </span>
      <span className="fun-sec-kw">int</span>[n2];
      <br />
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">int</span> i =
      <span className="fun-num"> 0</span>; i {sym[2]} n1; i++)
      <br />
      {"      "}left[i] = array[start+i];
      <br />
      {"   "}
      <span className="fun-kw">for</span>(
      <span className="fun-sec-kw">int</span> j =
      <span className="fun-num"> 0</span>; j {sym[2]} n2; j++)
      <br />
      {"      "}right[j] = array[mid+<span className="fun-num">1</span>+j];
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1 {sym[4]} count2{" "}
      {sym[2]} n2) {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(left[count1] {sym[2]}= right[count2]){" "}
      {sym[0]}
      <br />
      {"         "}array[index] = left[count1];
      <br />
      {"         "}count1++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}
      <span className="fun-kw">else</span> {sym[0]}
      <br />
      {"         "}array[index] = right[count2];
      <br />
      {"         "}count2++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1) {sym[0]}
      <br />
      {"      "}array[index] = left[count1];
      <br />
      {"      "}count1++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count2 {sym[2]} n2) {sym[0]}
      <br />
      {"      "}array[index] = right[count2];
      <br />
      {"      "}count2++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-kw">static </span>
      <span className="fun-sec-kw">int</span>[]
      <span className="fun-tlt"> mergeSort</span>(
      <span className="fun-sec-kw">int</span>[] array,
      <span className="fun-sec-kw">int </span>start,
      <span className="fun-sec-kw">int </span>end) {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if </span>(start {sym[2]} end) {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">int </span>mid = start+(end-start)/
      <span className="fun-num">2</span>;
      <br />
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, start, mid);
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, mid+
      <span className="fun-num">1</span>, end);
      <br />
      {"      "}
      <span className="fun-tlt">merge </span>(array, start, mid, end);
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
      <span className="fun-sec-kw">function</span>
      <span className="fun-tlt"> merge</span>(array, start, mid, end)
      <br />
      {sym[0]}
      <br />
      {"   "}
      <span className="fun-sec-kw">let </span>count1 ={" "}
      <span className="fun-num">0</span>, count2 ={" "}
      <span className="fun-num">0</span>, index = start;
      <br />
      <br />
      {"   "}
      <span className="fun-sec-kw">const </span>left = array.
      <span className="fun-kw">slice</span>(start, mid+
      <span className="fun-num">1</span>);
      <br />
      {"   "}
      <span className="fun-sec-kw">const </span>right = array.
      <span className="fun-kw">slice</span>(mid+
      <span className="fun-num">1</span>, end+<span className="fun-num">1</span>
      );
      <br />
      {"   "}
      <span className="fun-sec-kw">const </span>n1 = left.length;
      <br />
      {"   "}
      <span className="fun-sec-kw">const </span>n2 = right.length;
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1 {sym[4]} count2{" "}
      {sym[2]} n2) {sym[0]}
      <br />
      {"      "}
      <span className="fun-kw">if</span>(left[count1] {sym[2]}= right[count2]){" "}
      {sym[0]}
      <br />
      {"         "}array[index] = left[count1];
      <br />
      {"         "}count1++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}
      <span className="fun-kw">else</span> {sym[0]}
      <br />
      {"         "}array[index] = right[count2];
      <br />
      {"         "}count2++;
      <br />
      {"      "}
      {sym[1]}
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count1 {sym[2]} n1) {sym[0]}
      <br />
      {"      "}array[index] = left[count1];
      <br />
      {"      "}count1++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      <br />
      {"   "}
      <span className="fun-kw">while</span>(count2 {sym[2]} n2) {sym[0]}
      <br />
      {"      "}array[index] = right[count2];
      <br />
      {"      "}count2++;
      <br />
      {"      "}index++;
      <br />
      {"   "}
      {sym[1]}
      <br />
      {sym[1]}
      <br />
      <br />
      <span className="fun-sec-kw">function</span>
      <span className="fun-tlt"> mergeSort</span>(array, start, end) {sym[0]}
      <br />
      {"   "}
      <span className="fun-kw">if </span>(start {sym[2]} end) {sym[0]}
      <br />
      {"      "}
      <span className="fun-sec-kw">const </span>mid = start+(end-start)/
      <span className="fun-num">2</span>;
      <br />
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, start, mid);
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort </span>(array, mid+
      <span className="fun-num">1</span>, end);
      <br />
      {"      "}
      <span className="fun-tlt">merge </span>(array, start, mid, end);
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
      <span className="fun-tlt"> mergeSort</span>(array):
      <br />
      {"   "}
      <span className="fun-kw">if</span> len(array) {sym[3]}{" "}
      <span className="fun-num">1</span>:
      <br />
      {"      "}mid = len(array)//<span className="fun-num">2</span>
      <br />
      {"      "}left = array[:mid]
      <br />
      {"      "}right = array[mid:]
      <br />
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort</span>(left)
      <br />
      {"      "}
      <span className="fun-tlt">mergeSort</span>(right)
      <br />
      <br />
      {"      "}count1 = count2 = index = <span className="fun-num">0</span>
      <br />
      <br />
      {"      "}
      <span className="fun-kw">while</span>(count1 {sym[2]} len(left){" "}
      <span className="fun-kw">and</span> count2 {sym[2]} len(right)):
      <br />
      {"         "}
      <span className="fun-kw">if</span> left[count1] {sym[2]} right[count2]:
      <br />
      {"            "}array[index] = left[count1]
      <br />
      {"            "}count1 += <span className="fun-num">1</span>
      <br />
      {"         "}
      <span className="fun-kw">else</span>:
      <br />
      {"            "}array[index] = right[count2]
      <br />
      {"            "}count2 += <span className="fun-num">1</span>
      <br />
      {"         "}index += <span className="fun-num">1</span>
      <br />
      <br />
      {"      "}
      <span className="fun-kw">while</span> count1 {sym[2]} len(left):
      <br />
      {"         "}array[index] = left[count1]
      <br />
      {"         "}count1 += <span className="fun-num">1</span>
      <br />
      {"         "}index += <span className="fun-num">1</span>
      <br />
      <br />
      {"      "}
      <span className="fun-kw">while</span> count2 {sym[2]} len(right):
      <br />
      {"         "}array[index] = right[count2]
      <br />
      {"         "}index += <span className="fun-num">1</span>
      <br />
      {"         "}count2 += <span className="fun-num">1</span>
      <br />
      {"   "}
      <span className="fun-kw">return</span> array
      <br />
    </pre>
  ),
};
