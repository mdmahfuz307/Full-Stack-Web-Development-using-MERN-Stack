# Fs File Rename Async

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){
        
        fs.rename('oldFile.txt','newFile',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File name Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File name Success");
                res.end();
            }
        })
    }
});

server.listen(3020);
console.log("Server Run Success");
```

এই কোডটি একটি Node.js সার্ভার তৈরি করে যা HTTP অনুরোধ গ্রহণ করে এবং একটি ফাইলের নাম পরিবর্তন করে। নিচে পুরো কোডটি বাংলায় ব্যাখ্যা করা হলো:

```jsx
const fs = require('fs');
const http = require('http');
```

প্রথমে, আমরা `fs` (File System) এবং `http` মডিউলগুলো `require()` ফাংশনের মাধ্যমে আমদানি করেছি। `fs` মডিউল ফাইল সিস্টেমের সাথে কাজ করার জন্য এবং `http` মডিউল HTTP সার্ভার তৈরি করার জন্য ব্যবহৃত হয়।

```jsx
const server = http.createServer((req,res) => {
```

`http.createServer()` ফাংশনটি একটি HTTP সার্ভার তৈরি করে, যেখানে আমরা একটি ফাংশন পাস করেছি যা প্রতি অনুরোধের জন্য কল করা হবে। ফাংশনের দুইটি প্যারামিটার আছে:

- `req` (অনুরোধ): ক্লায়েন্ট থেকে আসা অনুরোধের তথ্য।
- `res` (প্রতিক্রিয়া): সার্ভার থেকে ক্লায়েন্টে পাঠানো প্রতিক্রিয়া।

```jsx
if(req.url==="/"){

```

এখানে চেক করা হচ্ছে যে অনুরোধের URL "/" (মূল পাতা) কিনা। যদি `/` হয়, তবে পরবর্তী অংশটি কার্যকর হবে।

```jsx
fs.rename('oldFile.txt','newFile',function(error){
```

`fs.rename()` ফাংশনটি ব্যবহার করা হয়েছে `oldFile.txt` ফাইলের নাম পরিবর্তন করে `newFile` নাম দেওয়ার জন্য। এটি একটি অ্যাসিঙ্ক্রোনাস ফাংশন, অর্থাৎ এটি পটভূমিতে কাজ করে এবং সম্পন্ন হলে একটি কলব্যাক ফাংশন চালায়। কলব্যাক ফাংশনের মধ্যে একটি প্যারামিটার আছে `error`, যা কোনো সমস্যা হলে সেটিকে সংরক্ষণ করে।

```jsx
if(error){
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write("File name Fail");
   res.end();
 }
```

যদি নাম পরিবর্তন করার সময় কোনো ত্রুটি ঘটে, তাহলে `error` ভেরিয়েবলটি সেট হবে। এই ক্ষেত্রে, সার্ভার `200` স্ট্যাটাস কোড সহ একটি প্রতিক্রিয়া পাঠায় এবং "File name Fail" বার্তাটি ক্লায়েন্টকে দেখায়।

```jsx
else{
     res.writeHead(200,{'Content-Type':'text/html'});
         res.write("File name Success");
          res.end();
           }
        })
    }
});
```

যদি কোনো ত্রুটি না ঘটে, তবে `else` অংশ কার্যকর হবে, এবং সার্ভার ক্লায়েন্টকে "File name Success" বার্তা পাঠাবে। এখানে `res.end()` ফাংশনটি প্রতিক্রিয়া শেষ করে।

```jsx
server.listen(3020);
console.log("Server Run Success");
```

`server.listen(3020)` ফাংশনটি সার্ভারকে `3020` পোর্টে চালু করে, এবং `console.log("Server Run Success")` মেসেজটি কনসোলে প্রিন্ট করে জানায় যে সার্ভারটি সফলভাবে চালু হয়েছে।

### সারসংক্ষেপে:

এই সার্ভারটি যখন `/` URL-এ অনুরোধ পায়, তখন এটি `oldFile.txt` ফাইলটির নাম পরিবর্তন করে `newFile` রাখার চেষ্টা করে। যদি নাম পরিবর্তন সফল হয়, এটি "File name Success" বার্তা পাঠায়, অন্যথায় "File name Fail" বার্তা পাঠায়।