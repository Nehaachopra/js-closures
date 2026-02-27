<h1>🧠 JS Closures Practice</h1>

<p>
A hands-on JavaScript practice repository focused on mastering 
<strong>closures</strong> through real coding problems.
</p>

<p>This project is structured so that:</p>

<ul>
  <li>📂 The <code>src</code> folder contains problem files</li>
  <li>🧑‍💻 You write your solution inside those files</li>
  <li>🧪 Tests validate your solution.</li>
</ul>

<hr />

<h2>🍴 Fork & Clone This Repository</h2>

<h3>Step 1: Fork the Repository</h3>

<ol>
  <li>Click the <strong>Fork</strong> button at the top-right of this repository.</li>
  <li>This creates a copy of the repository under your GitHub account.</li>
</ol>

<h3>Step 2: Clone Your Fork</h3>

<p>After forking, determine location you want this project to be in.Then, clone the repository to your local machine using:</p>

<pre><code>
git clone https://github.com/&lt;your-username&gt;/js-closures.git
</code></pre>

<p>Navigate into the project folder:</p>

<pre><code>
cd js-closures
</code></pre>

<h3>📦 Installation</h3>

<p>Install the required node modules using command:</p>

<pre><code>
npm install
</code></pre>

<p>This installs Jest and all required dependencies.</p>
<hr />


<h2>🚀 How It Works</h2>
<h3>1️⃣ Open a Problem File</h3>

<p>Navigate to the <code>src/</code> folder.</p>

<p>Each file contains:</p>
<ul>
  <li>📘 Problem description</li>
  <li>🛠 Function skeleton</li>
</ul>

<h3>2️⃣ Write Your Solution</h3>

<p>Implement the required function using closures.</p>

<pre><code>
export function createCounter() {
  // Your code here
}
</code></pre>

<h3>3️⃣ Run the Test for That Problem</h3>

<p>After writing your solution, run:</p>

<pre><code>
npx jest tests/&lt;problem-file-name&gt;.spec.js
</code></pre>

<p><strong>Example:</strong></p>

<pre><code>
npx jest tests/01-page-view-tracker.spec.js
</code></pre>

<p>
If everything is correct, you will see:
</p>

<pre><code>PASS</code></pre>

<p>If something fails, Jest will show detailed error messages.</p>

<hr />

<h2>🧪 Run All Tests (Optional)</h2>

<pre><code>
npx jest
</code></pre>

<hr />

<h2>📁 Project Structure</h2>

<pre>
js-closures/
│
├── src/
│   ├── 01-page-view-tracker.js
│   └── ...
│
├── tests/
│   ├── 01-page-view-tracker.spec.js
│   └── ...
│
├── package.json
├── node_modules
├── .gitignore
└── README.md
</pre>

<hr />

<h2>🏁 Final Note</h2>
<p>
Master closures here — and async patterns, callbacks, and React hooks will feel much easier.
</p>