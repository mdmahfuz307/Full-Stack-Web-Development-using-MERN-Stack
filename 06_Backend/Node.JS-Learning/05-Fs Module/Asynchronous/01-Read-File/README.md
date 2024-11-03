### **Fs read file Asynchronous**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Asynchronous file read with correct path
        fs.readFile(`${__dirname}/Home.html`, function (error, data) {
            if (error) {
                // Handle the error (e.g., file not found)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write("Internal Server Error: Could not read file.");
                res.end();
                console.error("Error reading file:", error); // Log the actual error for debugging
            } else {
                // No error, send the file content
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(4040);
console.log("Server Run Success");

```

এই কোডটি একটি নোড.js (Node.js) সার্ভার তৈরি করে যা একটি HTTP রিকুয়েস্টের জবাবে একটি HTML ফাইল পাঠায়। কোডটি ধাপে ধাপে ব্যাখ্যা করা হলো:

### কোড ব্যাখ্যা (বাংলায়):

### 1. **মডিউল ইম্পোর্ট (Modules Import):**

```jsx
const fs = require('fs');
const http = require('http');

```

- `fs`: এটি Node.js এর ফাইল সিস্টেম মডিউল, যা ফাইল পড়া এবং লেখা করতে ব্যবহার করা হয়।
- `http`: এটি Node.js এর HTTP মডিউল, যা সার্ভার তৈরি করতে ব্যবহৃত হয়।

### 2. **সার্ভার তৈরি করা (Creating the Server):**

```jsx
const server = http.createServer((req, res) => {
```

- `http.createServer`: এটি একটি সার্ভার তৈরি করে। সার্ভারটি প্রতিটি রিকুয়েস্ট পাওয়ার সাথে সাথে একটি ফাংশন চালায়, যেখানে `req` (রিকুয়েস্ট) এবং `res` (রেসপন্স) প্যারামিটার হিসেবে ব্যবহৃত হয়।
- `req`: ক্লায়েন্ট থেকে আসা HTTP রিকুয়েস্টের তথ্য ধারণ করে।
- `res`: সার্ভারের রেসপন্স বা জবাবকে হ্যান্ডেল করে, যা সার্ভার ক্লায়েন্টকে পাঠায়।

### 3. **রিকুয়েস্ট URL চেক করা (Checking the Request URL):**

```jsx
if (req.url === "/") {
```

- এই অংশে চেক করা হচ্ছে যে ক্লায়েন্টের রিকুয়েস্টের URLটি `/` কিনা। অর্থাৎ, হোম পেজ রিকুয়েস্ট করা হয়েছে কিনা।

### 4. **ফাইল পড়া (Reading the File):**

```jsx
fs.readFile(`${__dirname}/Home.html`, function (error, data) {
```

- `fs.readFile`: এটি একটি অ্যাসিনক্রোনাস (Asynchronous) মেথড যা একটি ফাইল পড়ে। এখানে `${__dirname}/Home.html` দিয়ে ফাইলের সম্পূর্ণ পাথ (path) দেয়া হয়েছে, যেখানে `__dirname` বর্তমান স্ক্রিপ্টের ডিরেক্টরির পাথ নির্দেশ করে।
- `function (error, data)`: ফাইলটি পড়া সম্পন্ন হলে এই ফাংশনটি কল হয়। ফাইলটি পড়তে কোনো সমস্যা হলে `error` প্যারামিটারটি সেট হয়, আর ফাইলের ডেটা সফলভাবে পড়া গেলে সেটি `data` প্যারামিটারে রাখা হয়।

### 5. **এরর হ্যান্ডলিং (Handling Errors):**

```jsx
if (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write("Internal Server Error: Could not read file.");
    res.end();
    console.error("Error reading file:", error);
}

```

- যদি কোনো এরর ঘটে (যেমন ফাইলটি পাওয়া যায় না), তাহলে সার্ভার ৫০০ স্ট্যাটাস কোড (Internal Server Error) সহ একটি রেসপন্স পাঠায়।
- `res.writeHead(500)`: এখানে ৫০০ মানে সার্ভারের ইন্টারনাল কোনো সমস্যা হয়েছে।
- `console.error`: এটি সার্ভারের কনসোলে নির্দিষ্ট এরর মেসেজ প্রিন্ট করে, যা ডেভেলপারের জন্য ডিবাগিংয়ের সময় সহায়ক।

### 6. **ফাইল সফলভাবে রেসপন্স পাঠানো (Sending File as Response):**

```jsx
else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
}
```

- যদি কোনো এরর না ঘটে, তাহলে সার্ভার `200 OK` স্ট্যাটাস কোড সহ HTML ফাইলটি পাঠিয়ে দেয়।
- `res.writeHead(200)`: ২০০ মানে রিকুয়েস্ট সফল হয়েছে।
- `res.write(data)`: এই অংশে `Home.html` ফাইলের কনটেন্ট ক্লায়েন্টের কাছে পাঠানো হয়।
- `res.end()`: এটি রেসপন্স শেষ করে দেয়, অর্থাৎ সার্ভার জানায় যে রেসপন্স পাঠানো সম্পন্ন হয়েছে।

### 7. **সার্ভার লিসেনিং শুরু করা (Server Listening):**

```jsx
server.listen(4040);
console.log("Server Run Success");
```

- `server.listen(4040)`: সার্ভারটি পোর্ট ৪০৪০-এ ক্লায়েন্টের রিকুয়েস্ট শোনার জন্য অপেক্ষা করবে।
- `console.log("Server Run Success")`: সার্ভার সফলভাবে চালু হলে এটি কনসোলে "Server Run Success" প্রিন্ট করবে।

### সংক্ষেপে:

এই কোডটি Node.js এর একটি সার্ভার তৈরি করে, যেখানে `/` URL এ অ্যাক্সেস করলে `Home.html` ফাইলটি পাঠানো হয়। যদি ফাইলটি পড়তে কোনো সমস্যা হয়, তাহলে সার্ভার একটি এরর মেসেজ পাঠায়।