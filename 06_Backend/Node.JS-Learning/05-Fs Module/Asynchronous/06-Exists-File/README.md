# **FS File Exists Async**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){
        
        fs.exists('newDemo.txt',function(error){

            if (error) {
                res.end(` File Exist`);
            } else {
                res.end(`File Does not exist`);
            }
        })
    }
});

// OutPut :- File Exist

server.listen(3020);
console.log("Server Run Success"); 
```

এই কোডটি একটি HTTP সার্ভার তৈরি করে যা একটি নির্দিষ্ট URL ("/") এ একটি ফাইলের অস্তিত্ব পরীক্ষা করে। নিচে কোডের প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হল:

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
        fs.exists('newDemo.txt', function(error) {
```

- **`fs.exists('newDemo.txt', function(error) { ... });`**: এই লাইনটি `newDemo.txt` নামের ফাইলটির অস্তিত্ব পরীক্ষা করে। `fs.exists` একটি অ্যাসিঙ্ক্রোনাস ফাংশন, যা প্রথম প্যারামিটার হিসেবে ফাইলের নাম এবং দ্বিতীয় প্যারামিটার হিসেবে একটি কলব্যাক ফাংশন গ্রহণ করে। ফাইলটি যদি বিদ্যমান থাকে, তবে `error` প্যারামিটার `null` হবে; অন্যথায়, এটি একটি ত্রুটি অবজেক্ট হবে।

```jsx
            if (error) {
                res.end(` File Exist`);
            } else {
                res.end(`File Does not exist`);
            }
```

- **`if (error) { ... }`**: যদি `error` প্যারামিটার `null` না হয় (অর্থাৎ, ফাইলটি বিদ্যমান নয়), তবে এই ব্লকটি কার্যকর হবে।
    - **`res.end(` File Exist`);`**: এটি সার্ভার থেকে ক্লায়েন্টকে পাঠায় যে ফাইলটি বিদ্যমান।
- **`else { ... }`**: যদি `error` প্যারামিটার `null` হয় (অর্থাৎ, ফাইলটি বিদ্যমান), তাহলে এই ব্লকটি কার্যকর হবে।
    - **`res.end(`File Does not exist`);`**: এটি সার্ভার থেকে ক্লায়েন্টকে পাঠায় যে ফাইলটি বিদ্যমান নয়।

```jsx
server.listen(3020);
console.log("Server Run Success");
```

- **`server.listen(3020);`**: সার্ভারটি 3020 পোর্টে শোনার জন্য প্রস্তুত হয়।
- **`console.log("Server Run Success");`**: সার্ভারটি সফলভাবে চালু হলে এটি কনসোলে একটি বার্তা প্রদর্শন করে।

### গুরুত্বপূর্ণ নোট:

- **`fs.exists`** মেথডটি ভবিষ্যতে ব্যবহার থেকে বাদ দেওয়া হতে পারে, তাই এটি ব্যবহার করা সঠিক নয়। এর পরিবর্তে `fs.access` ব্যবহার করা ভাল।
- সার্ভারটি চালু করার পর, আপনি একটি ব্রাউজার বা HTTP ক্লায়েন্টের মাধ্যমে `http://localhost:3020` URL এ গিয়ে ফাইলের অস্তিত্ব পরীক্ষা করতে পারেন।