# **Fs File Rename Sync**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Sync
    if(req.url==="/"){
        
        try {
            let result = fs.renameSync('oldFileSync.txt','newFileSync.txt');

            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Success");
            res.end();
        } catch (error) {
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Rename Fail: " + error.message);
            res.end();
        }
    }
});

server.listen(3010);
console.log("Server Run Success");
```

এই কোডটি Node.js ব্যবহার করে একটি HTTP সার্ভার তৈরি করে, যা ফাইল রিনেম (নাম পরিবর্তন) করার জন্য একটি সিঙ্ক্রোনাস (Sync) ফাংশন ব্যবহার করছে। পুরো কোডটি বাংলায় ব্যাখ্যা করা হলো:

### 1. **মডিউল আমদানি (Importing Modules):**

```jsx
const fs = require('fs');
const http = require('http');
```

- এখানে `fs` মডিউল ফাইল সিস্টেমের সাথে কাজ করার জন্য ব্যবহৃত হয়, যা ফাইল তৈরি, মুছে ফেলা, নাম পরিবর্তন করার মতো কাজ করতে সহায়ক।
- `http` মডিউল HTTP সার্ভার তৈরি করার জন্য ব্যবহৃত হয়।

### 2. **HTTP সার্ভার তৈরি করা:**

```jsx
const server = http.createServer((req, res) => {
    //Sync
    if(req.url==="/"){
```

- এখানে `http.createServer()` ফাংশনটি ব্যবহার করে একটি সার্ভার তৈরি করা হয়েছে। `req` এবং `res` হলো দুটি প্যারামিটার, যেখানে `req` (request) ক্লায়েন্টের থেকে আসা অনুরোধ, এবং `res` (response) সার্ভার থেকে ক্লায়েন্টে পাঠানো উত্তর।
- যখন URL `/` (মূল পাথ) এর অনুরোধ করা হয়, তখন ফাইলের নাম পরিবর্তনের প্রক্রিয়া শুরু হবে।

### 3. **ফাইলের নাম পরিবর্তন করা (Sync Mode):**

```jsx
try {
    let result = fs.renameSync('oldFileSync.txt','newFileSync.txt');
```

- এখানে `fs.renameSync()` ফাংশনটি একটি সিঙ্ক্রোনাস ফাংশন, যা তৎক্ষণাৎ কাজ শেষ না করা পর্যন্ত সার্ভারের অন্য কোনো কাজ হবে না। এটি 'oldFileSync.txt' ফাইলটির নাম পরিবর্তন করে 'newFileSync.txt' করার চেষ্টা করে।
- `try-catch` ব্লক ব্যবহার করা হয়েছে, যাতে কোনো সমস্যা হলে সেটা হ্যান্ডেল করা যায় এবং সার্ভার ক্র্যাশ না করে।

### 4. **সফল হলে উত্তর পাঠানো:**

```jsx
res.writeHead(200,{'Content-Type':'text/html'});
res.write("File Rename Success");
res.end();
```

- যদি ফাইলের নাম সফলভাবে পরিবর্তন হয়, তাহলে সার্ভার ২০০ স্ট্যাটাস কোড সহ একটি সফল বার্তা ("File Rename Success") ক্লায়েন্টকে পাঠায়।

### 5. **ত্রুটি হলে উত্তর পাঠানো:**

```jsx
} catch (error) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("File Rename Fail: " + error.message);
    res.end();
}
```

- যদি কোনো ত্রুটি ঘটে (যেমন ফাইলটি বিদ্যমান না থাকা), তাহলে `catch` ব্লকে ঢুকে একটি ত্রুটির বার্তা ক্লায়েন্টকে পাঠানো হয়। `error.message` অংশটি ত্রুটির প্রকৃত কারণটি দেখায়।

### 6. **সার্ভার চালু করা:**

```jsx
server.listen(3010);
console.log("Server Run Success");
```

- অবশেষে, `server.listen(3010)` ফাংশনটি সার্ভারকে ৩০১০ পোর্টে চালু করে।
- `console.log("Server Run Success")` এটি কনসোল বা টার্মিনালে বার্তা প্রদর্শন করে জানায় যে সার্ভার সফলভাবে চলছে।

### সারসংক্ষেপ:

এই কোডটি মূলত একটি সার্ভার তৈরি করে, যা একটি নির্দিষ্ট URL থেকে অনুরোধ পেলে একটি ফাইলের নাম পরিবর্তন করার চেষ্টা করে। যদি ফাইলটির নাম সফলভাবে পরিবর্তন হয়, তাহলে "File Rename Success" বার্তা প্রদর্শিত হয়। অন্যথায়, যদি কোনো ত্রুটি ঘটে, "File Rename Fail" বার্তা এবং ত্রুটির কারণ দেখানো হয়।