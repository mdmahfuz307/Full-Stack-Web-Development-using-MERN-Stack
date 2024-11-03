# **FS File Exists Sync**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Sync
    if(req.url==="/"){
        
        let error = fs.existsSync('newDemo.txt');

            if (error) {
                res.end(` File Exist`);
            } else {
                res.end(`File Does not exist`);
            }
    }
});

// OutPut :- File Exist

server.listen(3030);
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
        let error = fs.existsSync('newDemo.txt');
```

- **`let error = fs.existsSync('newDemo.txt');`**: এই লাইনটি `newDemo.txt` নামের ফাইলটির অস্তিত্ব পরীক্ষা করে সিঙ্ক্রোনাসভাবে। `fs.existsSync` মেথডটি যদি ফাইলটি বিদ্যমান হয়, তাহলে `error` ভেরিয়েবলে `true` মান রাখা হবে; অন্যথায়, `false` হবে।

```jsx
            if (error) {
                res.end(` File Exist`);
            } else {
                res.end(`File Does not exist`);
            }
```

- **`if (error) { ... }`**: যদি `error` ভেরিয়েবলটি `true` হয় (অর্থাৎ, ফাইলটি বিদ্যমান), তাহলে এই ব্লকটি কার্যকর হবে।
    - **`res.end(` File Exist`);`**: এটি সার্ভার থেকে ক্লায়েন্টকে জানায় যে ফাইলটি বিদ্যমান।
- **`else { ... }`**: যদি `error` ভেরিয়েবলটি `false` হয় (অর্থাৎ, ফাইলটি বিদ্যমান নয়), তাহলে এই ব্লকটি কার্যকর হবে।
    - **`res.end(`File Does not exist`);`**: এটি সার্ভার থেকে ক্লায়েন্টকে জানায় যে ফাইলটি বিদ্যমান নয়।

```jsx
server.listen(3030);
console.log("Server Run Success");
```

- **`server.listen(3030);`**: সার্ভারটি 3030 পোর্টে শোনার জন্য প্রস্তুত হয়।
- **`console.log("Server Run Success");`**: সার্ভারটি সফলভাবে চালু হলে এটি কনসোলে একটি বার্তা প্রদর্শন করে।

### সারসংক্ষেপ:

এই কোডটি একটি HTTP সার্ভার তৈরি করে যা একটি নির্দিষ্ট URL ("/") এ ফাইলের অস্তিত্ব পরীক্ষা করে এবং ফলস্বরূপ একটি বার্তা ক্লায়েন্টকে পাঠায়, যা বলে যে ফাইলটি বিদ্যমান কিনা। আপনি যখন সার্ভারটি চালু করবেন এবং একটি ব্রাউজার বা HTTP ক্লায়েন্টের মাধ্যমে `http://localhost:3030` URL এ প্রবেশ করবেন, তখন সার্ভার ফাইলটির অস্তিত্বের ভিত্তিতে উপযুক্ত বার্তা প্রদান করবে।