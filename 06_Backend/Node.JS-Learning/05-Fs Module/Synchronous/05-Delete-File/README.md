# **FS File Delete Synchronous**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // Synchronous
    if (req.url === "/") {
        try {
            fs.unlinkSync('demoFile.txt'); // Properly call unlinkSync to delete the file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("File Delete Success");
            res.end();
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/html' }); // 500 Internal Server Error
            res.write("File Delete Fail: " + error.message);
            res.end();
        }
    }
});

server.listen(3030);
console.log("Server Run Success");

```

এই কোডটি একটি HTTP সার্ভার তৈরি করে যা একটি নির্দিষ্ট URL-এ ("/") একটি ফাইল মুছে ফেলার কাজ করে। নিচে কোডের প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হল:

```jsx
const fs = require('fs');
const http = require('http');
```

- **`const fs = require('fs');`**: এটি Node.js এর ফাইল সিস্টেম মডিউল `fs` কে অন্তর্ভুক্ত করে, যা ফাইল এবং ডিরেক্টরি ম্যানিপুলেশনের জন্য ব্যবহৃত হয়।
- **`const http = require('http');`**: এটি Node.js এর HTTP মডিউলকে অন্তর্ভুক্ত করে, যা HTTP সার্ভার তৈরি করতে ব্যবহৃত হয়।

```jsx
const server = http.createServer((req, res) => {
```

- **`const server = http.createServer(...);`**: এটি একটি HTTP সার্ভার তৈরি করে। সার্ভারটি `req` (অনুরোধ) এবং `res` (প্রতিক্রিয়া) নামক দুটি প্যারামিটার গ্রহণ করে।

```jsx
 if (req.url === "/") {
```

- **`if (req.url === "/") {`**: এই শর্তটি পরীক্ষা করে যে ব্যবহারকারীর অনুরোধের URL টি "/" কিনা। যদি তাই হয়, তাহলে নিচের কোড ব্লকটি কার্যকর হবে।

```jsx
try {
     fs.unlinkSync('demoFile.txt'); // Properly call unlinkSync to delete the file
```

- **`try { ... }`**: `try` ব্লকটি চেষ্টা করে দেখবে যে কোডের ভিতরের নির্দেশনাগুলি সফলভাবে কার্যকর হয় কিনা।
- **`fs.unlinkSync('demoFile.txt');`**: এটি `demoFile.txt` নামের ফাইলটি সিঙ্ক্রোনাসভাবে মুছে ফেলার চেষ্টা করে। যদি ফাইলটি সফলভাবে মুছে যায়, তাহলে পরবর্তী অংশ কার্যকর হবে।

```jsx
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write("File Delete Success");
res.end();
```

- **`res.writeHead(200, { 'Content-Type': 'text/html' });`**: এটি সার্ভার থেকে 200 (সফল) স্ট্যাটাস কোড এবং কন্টেন্ট টাইপ হিটেমপ্লেট নির্দেশ করে।
- **`res.write("File Delete Success");`**: ব্যবহারকারীকে একটি বার্তা পাঠায়, যা বলে "ফাইল সফলভাবে মুছে ফেলা হয়েছে"।
- **`res.end();`**: এই লাইনটি প্রতিক্রিয়াটি শেষ করে এবং ক্লায়েন্টের কাছে পাঠায়।

```jsx
} catch (error) {
       res.writeHead(500, { 'Content-Type': 'text/html' }); // 500 Internal Server Error
       res.write("File Delete Fail: " + error.message);
       res.end();
}
```

- **`catch (error) { ... }`**: যদি `try` ব্লকের ভিতরে কোনো সমস্যা হয়, তবে এটি `catch` ব্লকে চলে যাবে।
- **`res.writeHead(500, { 'Content-Type': 'text/html' });`**: এটি সার্ভার থেকে 500 (অভ্যন্তরীণ সার্ভার ত্রুটি) স্ট্যাটাস কোড পাঠায়।
- **`res.write("File Delete Fail: " + error.message);`**: এটি ব্যবহারকারীকে জানায় যে ফাইল মুছতে ব্যর্থ হয়েছে এবং ত্রুটির বার্তা দেখায়।
- **`res.end();`**: এই লাইনটি প্রতিক্রিয়াটি শেষ করে।

```jsx
server.listen(3030);
console.log("Server Run Success");
```

- **`server.listen(3030);`**: সার্ভারটি 3030 পোর্টে শোনার জন্য প্রস্তুত হয়।
- **`console.log("Server Run Success");`**: সার্ভারটি সফলভাবে চালু হলে এটি কনসোলে একটি বার্তা প্রদর্শন করে।

এভাবে, এই কোডটি একটি HTTP সার্ভার তৈরি করে যা একটি নির্দিষ্ট URL-এ ফাইল মুছে ফেলার চেষ্টা করে এবং সফল বা ব্যর্থ হলে ব্যবহারকারীকে সঠিক বার্তা প্রদান করে।