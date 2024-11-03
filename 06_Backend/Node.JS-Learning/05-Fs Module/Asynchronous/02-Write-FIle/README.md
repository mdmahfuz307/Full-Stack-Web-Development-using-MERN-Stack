# **Fs File Write Asynchronous**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.writeFile('newFile.txt', 'Welcome to Node JS', function (error) {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("File Write Fail");
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("File Write Success");
                res.end();
            }
        });
    }
});

server.listen(3030);
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
    
    - এই অংশে পরীক্ষা করা হচ্ছে যে ক্লায়েন্টের রিকুয়েস্টের URL হল `/` কিনা। অর্থাৎ, হোম পেজে রিকুয়েস্ট করা হয়েছে কি না।
4. **ফাইল লেখা (Writing to the File):**
    
    ```jsx
    fs.writeFile('newFile.txt', 'Welcome to Node JS', function (error) {
    ```
    
    - `fs.writeFile`: এটি একটি অ্যাসিনক্রোনাস (Asynchronous) মেথড যা একটি নতুন ফাইল তৈরি করে এবং এতে নির্দিষ্ট টেক্সট লিখে। এখানে `newFile.txt` ফাইলের নাম এবং `'Welcome to Node JS'` হল লেখা।
    - `function (error)`: ফাইল লেখার প্রক্রিয়া সম্পন্ন হলে এই ফাংশনটি কল হয়। যদি ফাইল লেখার সময় কোনো সমস্যা হয়, `error` প্যারামিটারটি সেট হবে।
5. **এরর হ্যান্ডলিং (Handling Errors):**
    
    ```jsx
    if (error) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("File Write Fail");
        res.end();
    }
    ```
    
    - যদি কোনো ত্রুটি ঘটে (যেমন ফাইল তৈরি করতে ব্যর্থ হয়), তাহলে সার্ভার একটি HTTP রেসপন্স পাঠায়, যেখানে ২০০ স্ট্যাটাস কোড সহ "File Write Fail" বার্তা থাকে।
    - `res.writeHead(200)`: HTTP রেসপন্সের হেডার সেট করে।
    - `res.write("File Write Fail")`: ক্লায়েন্টকে ফাইল লেখার ব্যর্থতার বার্তা পাঠায়।
    - `res.end()`: রেসপন্স শেষ করে।
6. **ফাইল সফলভাবে লেখা হলে (On Successful File Write):**
    
    ```jsx
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("File Write Success");
        res.end();
    }
    
    ```
    
    - যদি ফাইল সফলভাবে লেখা হয়, তাহলে সার্ভার ২০০ স্ট্যাটাস কোড সহ "File Write Success" বার্তা পাঠায়।
    - একইভাবে, HTTP রেসপন্সের হেডার, লেখার বার্তা এবং রেসপন্স শেষ করার কার্যক্রম চলে।
7. **সার্ভার লিসেনিং শুরু করা (Server Listening):**
    
    ```jsx
    server.listen(3030);
    console.log("Server Run Success");
    ```
    
    - `server.listen(3030)`: সার্ভারটি পোর্ট ৩০৩০-এ ক্লায়েন্টের রিকুয়েস্ট শোনার জন্য প্রস্তুত।
    - `console.log("Server Run Success")`: সার্ভার সফলভাবে চালু হলে এটি কনসোলে "Server Run Success" বার্তা প্রিন্ট করবে।

### সংক্ষেপে:

এই কোডটি একটি Node.js HTTP সার্ভার তৈরি করে, যা `/` URL এ রিকুয়েস্ট আসলে `newFile.txt` নামে একটি নতুন ফাইল তৈরি করে এবং তাতে "Welcome to Node JS" লেখে। যদি ফাইল লেখার সময় কোনো সমস্যা হয়, তাহলে "File Write Fail" বার্তা ক্লায়েন্টকে পাঠায়; অন্যথায়, "File Write Success" বার্তা পাঠানো হয়।