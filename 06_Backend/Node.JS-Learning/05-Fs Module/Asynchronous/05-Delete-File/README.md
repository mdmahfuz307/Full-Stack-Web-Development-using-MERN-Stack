# **FS File Delete Async**

```jsx
const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){
        
        fs.unlink('newDemo.txt',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Success");
                res.end();
            }
        })
    }
});

server.listen(3020);
console.log("Server Run Success");
```

এই কোডটি Node.js ব্যবহার করে একটি HTTP সার্ভার তৈরি করেছে, যা নির্দিষ্ট URL-এ অনুরোধ আসলে `newDemo.txt` নামের ফাইলটি অ্যাসিঙ্ক্রোনাসভাবে (অপ্রতীক্ষিতভাবে) ডিলিট করার চেষ্টা করে।

### কোডের বিশ্লেষণ:

```jsx
const fs = require('fs');
const http = require('http');
```

- **`fs`** মডিউলটি ফাইল পরিচালনার জন্য ব্যবহৃত হয়, যেমন ফাইল তৈরি, পড়া, ডিলিট করা ইত্যাদি।
- **`http`** মডিউলটি HTTP সার্ভার তৈরি করতে ব্যবহৃত হয়।

```jsx
const server = http.createServer((req,res) => {
    //Async
    if(req.url==="/"){

        fs.unlink('newDemo.txt',function(error){

            if(error){
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write("File Delete Success");
                res.end();
            }
        })
    }
});
```

- **`http.createServer`**: এটি একটি সার্ভার তৈরি করে, যা অনুরোধ (`req`) এবং প্রতিক্রিয়া (`res`) গ্রহণ করে।
- **`req.url === "/"`**: চেক করে যে ব্যবহারকারী মূল রুট URL এ ("/") অনুরোধ পাঠিয়েছে কিনা।

### ফাইল ডিলিট করা:

- **`fs.unlink('newDemo.txt', function(error){ ... })`**: এই মেথডটি `newDemo.txt` ফাইলটি অ্যাসিঙ্ক্রোনাসভাবে ডিলিট করার চেষ্টা করে।
    - **`error` প্যারামিটার**: যদি ফাইল ডিলিট করতে কোনো সমস্যা হয়, তাহলে `error` প্যারামিটারে ত্রুটির তথ্য থাকবে।

### রেসপন্স অংশ:

- যদি **ত্রুটি** ঘটে, তাহলে:
    - **`res.writeHead(200,{'Content-Type':'text/html'})`**: এই লাইনটি HTTP স্ট্যাটাস কোড 200 এবং কন্টেন্ট টাইপ `text/html` সেট করে।
    - **`res.write("File Delete Fail")`**: "File Delete Fail" বার্তাটি ক্লায়েন্টকে পাঠানো হয়।
    - **`res.end()`**: প্রতিক্রিয়া বন্ধ করে।
- যদি **সফল হয়** (ত্রুটি না ঘটে), তাহলে:
    - **`res.write("File Delete Success")`**: "File Delete Success" বার্তাটি ক্লায়েন্টকে পাঠানো হয়।
    - **`res.end()`**: প্রতিক্রিয়া বন্ধ করে।

```jsx
srver.listen(3020);
console.log("Server Run Success");
```

- **`server.listen(3020)`**: সার্ভারটি পোর্ট 3020 এ শোনার জন্য প্রস্তুত থাকে।
- **`console.log("Server Run Success")`**: কনসোলে "Server Run Success" বার্তা প্রদর্শিত হয়, যা নির্দেশ করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে:

এই কোডটি একটি HTTP সার্ভার তৈরি করে যা পোর্ট 3020 এ চলবে। যখনই ব্যবহারকারী মূল রুট (`/`) এ অনুরোধ পাঠায়, সার্ভারটি `newDemo.txt` ফাইলটি অ্যাসিঙ্ক্রোনাসভাবে ডিলিট করার চেষ্টা করে। যদি ফাইল ডিলিট সফল হয়, তাহলে "File Delete Success" মেসেজ পাঠায়; অন্যথায়, "File Delete Fail" মেসেজ পাঠায়।