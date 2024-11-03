# **Fs File Write** *Synchronous*

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) =>{
    //Synchronous
    if(req.url==="/"){

        let error = fs.writeFileSync('newSync.txt','Welcome to File Sync');

        if(error){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("File Write Success");
            res.end();
        }
    }
});

server.listen(4030);
console.log("Server Run Success");
```

### কোড ব্যাখ্যা (বাংলায়):

1. **মডিউল ইম্পোর্ট (Modules Import):**
    
    ```jsx
    const fs = require('fs');
    const http = require('http');
    ```
    
    - `fs`: Node.js এর ফাইল সিস্টেম মডিউল, যা ফাইল তৈরি, পড়া, লেখা এবং মুছতে ব্যবহৃত হয়।
    - `http`: Node.js এর HTTP মডিউল, যা HTTP সার্ভার তৈরি করতে ব্যবহৃত হয়।
2. **সার্ভার তৈরি করা (Creating the Server):**
    
    ```jsx
    const server = http.createServer((req, res) => {
    ```
    
    - `http.createServer`: এটি একটি নতুন HTTP সার্ভার তৈরি করে। সার্ভারটি ক্লায়েন্টের রিকুয়েস্ট পাওয়ার সময় একটি ফাংশন কল করে, যেখানে `req` (রিকুয়েস্ট) এবং `res` (রেসপন্স) প্যারামিটার হিসেবে ব্যবহৃত হয়।
3. **রিকুয়েস্ট URL চেক করা (Checking the Request URL):**
    
    ```jsx
    if (req.url === "/") {
    ```
    
    - এখানে পরীক্ষা করা হচ্ছে যে ক্লায়েন্টের রিকুয়েস্টের URL হল `/` কিনা। অর্থাৎ, ক্লায়েন্ট যদি সার্ভারের হোম পেজে রিকুয়েস্ট করে, তাহলে এই কোডটি এক্সিকিউট হবে।
4. **সিঙ্ক্রোনাস ফাইল লেখা (Synchronous File Writing):**
    
    ```jsx
    let error = fs.writeFileSync('newSync.txt', 'Welcome to File Sync')
    ```
    
    - `fs.writeFileSync`: এটি একটি সিঙ্ক্রোনাস (Synchronous) মেথড যা একটি নতুন ফাইল তৈরি করে এবং তাতে নির্দিষ্ট টেক্সট লেখে। এখানে `newSync.txt` ফাইলের নাম এবং `'Welcome to File Sync'` হল লেখা।
    - এই মেথডটি ফাইল লেখার সময় কোনো সমস্যা হলে একটি ত্রুটি (error) রিটার্ন করে। যেহেতু এটি সিঙ্ক্রোনাস, তাই এটি সম্পন্ন না হওয়া পর্যন্ত পরবর্তী কোডগুলি এক্সিকিউট হয় না।
5. **এরর হ্যান্ডলিং (Handling Errors):**
    
    ```jsx
    if(error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("File Write Fail");
        res.end();
    }
    ```
    
    - যেহেতু `writeFileSync` একটি ত্রুটি ফেরত দেয় না, তাই এখানে `if (error)` অংশ কখনোই true হবে না। সুতরাং, `error` চেক করার জন্য এখানে সঠিক পদ্ধতি নয়।
    - যদি ফাইল লেখার সময় কোনো সমস্যা ঘটে (যেমন ফাইল লেখার অনুমতি নেই), তাহলে সার্ভার ২০০ স্ট্যাটাস কোড সহ "File Write Fail" বার্তা পাঠায়। কিন্তু এখানে সমস্যাটি হবে কারণ `writeFileSync` কখনোই `error` রিটার্ন করে না।
6. **ফাইল সফলভাবে লেখা হলে (On Successful File Write):**
    
    ```jsx
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("File Write Success");
        res.end();
    }
    ```
    
    - যেহেতু `fs.writeFileSync` ত্রুটি রিটার্ন করে না, তাই এখানে `else` ব্লকটি সর্বদা এক্সিকিউট হবে, এবং সার্ভার ২০০ স্ট্যাটাস কোড সহ "File Write Success" বার্তা পাঠাবে।
7. **সার্ভার লিসেনিং শুরু করা (Server Listening):**
    
    ```jsx
    srver.listen(4030);
    console.log("Server Run Success");
    ```
    
    - `server.listen(4030)`: সার্ভারটি পোর্ট ৪০৩০-এ ক্লায়েন্টের রিকুয়েস্ট শোনার জন্য প্রস্তুত।
    - `console.log("Server Run Success")`: সার্ভার সফলভাবে চালু হলে এটি কনসোলে "Server Run Success" বার্তা প্রিন্ট করবে।

### সংক্ষেপে:

এই কোডটি একটি Node.js HTTP সার্ভার তৈরি করে, যা `/` URL এ রিকুয়েস্ট আসলে `newSync.txt` নামে একটি নতুন ফাইল তৈরি করে এবং তাতে "Welcome to File Sync" লেখে। যেহেতু `writeFileSync` কখনো ত্রুটি রিটার্ন করে না, তাই "File Write Fail" বার্তা পাঠানো হবে না, বরং "File Write Success" বার্তা সর্বদা পাঠানো হবে।