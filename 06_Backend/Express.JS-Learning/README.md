**Package Install**

```jsx
npm init --y
```

**ExpressJS Install**

```jsx
 npm install express
```

# **First Express Application**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){
    res.send("Hello Express JS");
})

app.listen(8000,function(){
    console.log("Server Run Success");
})
```

এই কোডটি একটি সহজ **Express.js** সার্ভার তৈরি করেছে, যা **Node.js** এ তৈরি করা হয়েছে। নিচে প্রতিটি লাইনের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে। `express` হচ্ছে Node.js এর জন্য একটি ওয়েব ফ্রেমওয়ার্ক, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশন কল করে পাওয়া যায়।

```jsx
app.get("/", function(req, res){
    res.send("Hello Express JS");
});

```

এই অংশটি একটি রুট (**Route**) সেট করেছে। যখন ইউজার ব্রাউজারে `/` (মূল) রুটে যায়, তখন এটি একটি `GET` রিকোয়েস্ট পাঠায়। এখানে, `/` রুটে `GET` রিকোয়েস্ট পেলে এই ফাংশনটি কার্যকর হয় এবং `res.send("Hello Express JS");` এর মাধ্যমে "Hello Express JS" টেক্সটটি ব্রাউজারে পাঠানো হয়।

```jsx
app.listen(8000, function(){
    console.log("Server Run Success");
});

```

এই লাইনটি সার্ভারকে **৮০০০** পোর্টে চালু করে। যখন সার্ভার সফলভাবে চালু হয়, তখন `console.log("Server Run Success");` অংশটি কনসোলে "Server Run Success" বার্তাটি প্রদর্শন করে।

### সংক্ষেপে

এই কোডটি **৮০০০** পোর্টে একটি Express.js সার্ভার চালু করে এবং রুট পেজে ("/") গেলে "Hello Express JS" বার্তা প্রদর্শন করে।

# **Routing**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){    // Browser just get request dte pare post,put ai gula pare na tai amra oi gula Postman dye check krbo.
    res.send("Home Page ");
});

app.post("/about",function(req,res){
    res.send("About Page");
});

app.put("/contact",function(req,res){
    res.send("Contact Page");
});

app.delete("/terms",function(req,res){
    res.send("Terms Page");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করে, যেখানে বিভিন্ন **HTTP মেথড** (`GET`, `POST`, `PUT`, `DELETE`) ব্যবহার করে বিভিন্ন রুট সেট করা হয়েছে। নিচে প্রতিটি অংশের বিস্তারিত ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরির জন্য প্রয়োজন।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### বিভিন্ন HTTP মেথড সহ রুট ডিফাইন করা:

### GET মেথড:

```jsx
app.get("/", function(req, res) {
    res.send("Home Page ");
});

```

- এই অংশটি `/` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন "Home Page" মেসেজটি ব্রাউজারে দেখানো হয়।

### POST মেথড:

```jsx
app.post("/about", function(req, res) {
    res.send("About Page");
});

```

- এই অংশটি `/about` রুটে একটি `POST` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/about` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন "About Page" মেসেজটি রেসপন্স হিসেবে পাঠানো হয়।

### PUT মেথড:

```jsx
app.put("/contact", function(req, res) {
    res.send("Contact Page");
});

```

- এই অংশটি `/contact` রুটে একটি `PUT` রিকোয়েস্ট সেট করেছে।
- যখন `/contact` রুটে **PUT** রিকোয়েস্ট পাঠানো হয়, তখন "Contact Page" মেসেজটি রেসপন্স হিসেবে পাঠানো হয়।

### DELETE মেথড:

```jsx
app.delete("/terms", function(req, res) {
    res.send("Terms Page");
});

```

- এই অংশটি `/terms` রুটে একটি `DELETE` রিকোয়েস্ট সেট করেছে।
- যখন `/terms` রুটে **DELETE** রিকোয়েস্ট পাঠানো হয়, তখন "Terms Page" মেসেজটি রেসপন্স হিসেবে পাঠানো হয়।

### সার্ভার শুরু করা:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে "Server Run Success" মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করে যা **GET**, **POST**, **PUT**, এবং **DELETE** রিকোয়েস্ট হ্যান্ডল করতে পারে এবং নির্দিষ্ট রুটে নির্দিষ্ট মেসেজ রেসপন্স হিসেবে প্রদান করে।

# **সার্ভার সাইডে দক্ষতার জন্য চারটি  বিষয় ভালো করে বুঝতে  হবে  শিখতে হবে**

- Request
- Response
- Middleware
- Database Operations

## Response

- Response Body
- Response Header
- Response Status
- Response Cookies

## **Simple String Response**

```jsx
let express = require('express');

app = express();

// Simple String Response

// res.send()  --> response er body k nirdes kore
// res.end()   --> response er ses e ki hocche seta nirdes kore

app.get("/one",function(req,res){
    res.send("This is Simple String Response");
});

app.post("/two",function(req,res){
    res.end("This is Simple String Response");  // End dlew hbe send dlew hbw
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা বিভিন্ন **HTTP মেথড** (**GET** এবং **POST**) ব্যবহার করে রিকোয়েস্ট পরিচালনা করতে পারে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো।

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশন কল করে পাওয়া যায়।

### রুট এবং রেসপন্স সম্পর্কে টিপ্পনী:

```jsx
// res.send()  --> response এর body কী হবে তা নির্দেশ করে
// res.end()   --> response এর শেষটা নির্দেশ করে

```

- **`res.send()`**: এটি সম্পূর্ণ রেসপন্সটি ক্লায়েন্টকে পাঠায়, যা রেসপন্সের `body` এর কনটেন্ট হিসেবে কাজ করে।
- **`res.end()`**: এটি শুধু রেসপন্স শেষ করে, কিন্তু সাধারণত কোনো অতিরিক্ত প্রসেসিং না করে কেবল রেসপন্স বন্ধ করে দেয়।

### GET রিকোয়েস্ট:

```jsx
app.get("/one", function(req, res) {
    res.send("This is Simple String Response");
});

```

- এই অংশটি `/one` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/one` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে ব্রাউজারে পাঠানো হয়।

### POST রিকোয়েস্ট:

```jsx
app.post("/two", function(req, res) {
    res.end("This is Simple String Response");  // End দিলেও হবে, send দিলেও হবে
});

```

- এই অংশটি `/two` রুটে একটি `POST` রিকোয়েস্ট সেট করেছে।
- `/two` রুটে **POST** রিকোয়েস্ট পাঠানো হলে `res.end("This is Simple String Response");` এর মাধ্যমে `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে পাঠানো হয়।
- `res.send()` এবং `res.end()` দুটোই ব্যবহার করা যাবে, তবে সাধারণত `res.send()` পুরো রেসপন্সটি পাঠাতে ব্যবহৃত হয়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/one` রুটে **GET** এবং `/two` রুটে **POST** রিকোয়েস্ট পরিচালনা করে।

## **Response Status Code**

```jsx
let express = require('express');

app = express();

app.get("/one",function(req,res){
    res.send("This is Simple String Response");
});

app.post("/two",function(req,res){
    res.end("This is Simple String Response");
});

app.get("/three",function(req,res){
    res.status(401).end("Unauth");  // End er vitor kicu dlew hbe na dlew hbe
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা বিভিন্ন **HTTP মেথড** (**GET** এবং **POST**) ব্যবহার করে বিভিন্ন রিকোয়েস্ট পরিচালনা করে। নতুন একটি রুট **HTTP Status Code** সহ ব্যবহার করা হয়েছে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো।

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### রুট এবং রেসপন্স:

### GET রিকোয়েস্ট:

```jsx
app.get("/one", function(req, res) {
    res.send("This is Simple String Response");
});
```

- এই অংশটি `/one` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/one` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে ব্রাউজারে পাঠানো হয়।

### POST রিকোয়েস্ট:

```jsx
app.post("/two", function(req, res) {
    res.end("This is Simple String Response");
});
```

- এই অংশটি `/two` রুটে একটি `POST` রিকোয়েস্ট সেট করেছে।
- `/two` রুটে **POST** রিকোয়েস্ট পাঠানো হলে `res.end("This is Simple String Response");` এর মাধ্যমে `"This is Simple String Response"` টেক্সটটি রেসপন্স হিসেবে পাঠানো হয়।

### GET রিকোয়েস্ট (HTTP Status Code সহ):

```jsx
app.get("/three", function(req, res) {
    res.status(401).end("Unauth");  // End এর ভিতরে কিছু দিলেও বা না দিলেও হবে
});
```

- এই অংশটি `/three` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.status(401)` দ্বারা সার্ভার `401 Unauthorized` স্ট্যাটাস কোড সেট করে, যা ইঙ্গিত করে যে রিকোয়েস্টটি অনুমোদিত নয়।
- `res.end("Unauth")` অংশটি `"Unauth"` মেসেজটি রেসপন্স হিসেবে পাঠায়। **`res.end()`** এর ভিতরে কিছু থাকলেও বা না থাকলেও রেসপন্স শেষ হয়ে যাবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/one` এবং `/two` রুটে যথাক্রমে **GET** এবং **POST** রিকোয়েস্ট পরিচালনা করে। `/three` রুটে `401 Unauthorized` স্ট্যাটাস কোড সহ একটি **GET** রিকোয়েস্ট পরিচালনা করে, যেখানে রেসপন্সে "Unauth" পাঠানো হয়।

## **JSON Response**

```jsx
let express = require('express');

app = express();

app.get("/three",function(req,res){

    let MyJSONArray = [
        {
            name : "Nirob",
            city : "Dhaka",
            Occupation : "Software Engr."
        },
        {
            name : "Mahfuz",
            city : "Rajshahi",
            Occupation : "Software Developer"
        },
        {
            name : "Miraz",
            city : "Rangpur",
            Occupation : "Project Manager"
        },

    ]
    res.json(MyJSONArray);
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **JSON ফরম্যাটে ডেটা** রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরির জন্য প্রয়োজন।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### JSON ডেটা সহ GET রিকোয়েস্ট:

```jsx
app.get("/three", function(req, res) {
    let MyJSONArray = [
        {
            name : "Nirob",
            city : "Dhaka",
            Occupation : "Software Engr."
        },
        {
            name : "Mahfuz",
            city : "Rajshahi",
            Occupation : "Software Developer"
        },
        {
            name : "Miraz",
            city : "Rangpur",
            Occupation : "Project Manager"
        }
    ];
    res.json(MyJSONArray);
});

```

- এই অংশটি `/three` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- এখানে `MyJSONArray` নামে একটি অ্যারে ডিফাইন করা হয়েছে, যাতে কয়েকটি অবজেক্ট রয়েছে। প্রতিটি অবজেক্টে তিনটি প্রপার্টি আছে: `name`, `city`, এবং `Occupation`।
- যখন ইউজার `/three` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `res.json(MyJSONArray);` এর মাধ্যমে **JSON ফরম্যাটে** `MyJSONArray` অ্যারের পুরো ডেটা রেসপন্স হিসেবে ক্লায়েন্টে পাঠানো হয়।
- **`res.json()`** মেথডটি ব্যবহার করার মাধ্যমে সার্ভার JSON ফরম্যাটে ডেটা রেসপন্স হিসেবে পাঠায়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/three` রুটে **GET** রিকোয়েস্ট আসলে **JSON ফরম্যাটে** ডেটা রেসপন্স হিসেবে পাঠায়, যেখানে তিনটি ব্যক্তির তথ্য রয়েছে, যেমন নাম, শহর, এবং পেশা।

## **Response Download**

```jsx
let express = require('express');

app = express();

// Response Download
app.get("/five",function(req,res){
    res.download("./uploads/nirob.jpg"); // Browser e sora sori download krte bolbe
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা একটি নির্দিষ্ট রুটে ফাইল ডাউনলোড করার রেসপন্স প্রদান করে। এখানে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশন কল করে পাওয়া যায়।

### ফাইল ডাউনলোড রেসপন্স সহ GET রিকোয়েস্ট:

```jsx
app.get("/five", function(req, res) {
    res.download("./uploads/nirob.jpg"); // ব্রাউজারে সরাসরি ডাউনলোড শুরু হবে
});

```

- এই অংশটি `/five` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.download()` মেথডটি ব্যবহার করা হয়েছে, যা একটি নির্দিষ্ট ফাইল ক্লায়েন্টের কাছে ডাউনলোড করার জন্য পাঠায়।
- এখানে `"./uploads/nirob.jpg"` ফাইলটি ডাউনলোডের জন্য নির্দিষ্ট করা হয়েছে, যা সার্ভারের `uploads` ফোল্ডারের মধ্যে আছে।
- যখন ইউজার `/five` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন ব্রাউজার সরাসরি `"nirob.jpg"` ফাইলটি ডাউনলোড করতে শুরু করবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/five` রুটে **GET** রিকোয়েস্ট পাঠালে `uploads` ফোল্ডারে থাকা `"nirob.jpg"` ফাইলটি ডাউনলোড হিসেবে ক্লায়েন্টের ব্রাউজারে সরাসরি পাঠায়।

## **Response Redirect**

```jsx
let express = require('express');

app = express();

app.get("/Bangladesh",function(req,res){
    res.redirect("http://localhost:8000/India");
});

app.get("/India",function(req,res){
    res.send("This is india");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা নির্দিষ্ট রুটে রিকোয়েস্ট আসলে রিডাইরেক্ট করে অন্য রুটে নিয়ে যায় এবং সেখানে একটি রেসপন্স পাঠায়। এখানে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### Redirect সহ GET রিকোয়েস্ট:

```jsx
app.get("/Bangladesh", function(req, res) {
    res.redirect("<http://localhost:8000/India>");
});

```

- এই অংশটি `/Bangladesh` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/Bangladesh` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `res.redirect()` মেথডটি ব্যবহার করে সার্ভার ইউজারকে `http://localhost:8000/India` রুটে রিডাইরেক্ট করে দেয়।
- অর্থাৎ, `/Bangladesh` রুটে রিকোয়েস্ট পাঠালে ইউজার সরাসরি `/India` রুটে চলে যাবে।

### রেসপন্স সহ GET রিকোয়েস্ট:

```jsx
app.get("/India", function(req, res) {
    res.send("This is india");
});

```

- এই অংশটি `/India` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/India` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন `"This is india"` টেক্সটটি রেসপন্স হিসেবে ব্রাউজারে দেখানো হয়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/Bangladesh` রুটে রিকোয়েস্ট আসলে `/India` রুটে রিডাইরেক্ট করে এবং `/India` রুটে `"This is india"` মেসেজটি রেসপন্স হিসেবে পাঠায়।

## **Response Header**

```jsx
let express = require('express');

app = express();

app.get("/six",function(req,res){
    
    res.append("name","Mahfuz Nirob");
    res.append("city","Dhaka");
    res.append("age","24 Years Old");

    res.send();
    res.status(201).end("Hello World");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা নির্দিষ্ট রুটে **হেডার অ্যাপেন্ড করে** এবং একটি **স্ট্যাটাস কোড সহ রেসপন্স** প্রদান করে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### হেডার অ্যাপেন্ড এবং স্ট্যাটাস কোড সহ GET রিকোয়েস্ট:

```jsx
app.get("/six", function(req, res) {
    res.append("name", "Mahfuz Nirob");
    res.append("city", "Dhaka");
    res.append("age", "24 Years Old");

    res.send();
    res.status(201).end("Hello World");
});

```

- এই অংশটি `/six` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.append()` মেথডটি ব্যবহার করে রেসপন্সের হেডারে অতিরিক্ত তথ্য যোগ করা হয়েছে।
    - `"name": "Mahfuz Nirob"`, `"city": "Dhaka"`, এবং `"age": "24 Years Old"` নামে তিনটি হেডার রেসপন্সের সাথে যোগ করা হয়েছে।
- `res.send()` এর মাধ্যমে রেসপন্স প্রেরণ করা হচ্ছে।
- `res.status(201)` দ্বারা রেসপন্সের জন্য **201 Created** স্ট্যাটাস কোড সেট করা হয়েছে, যা ইঙ্গিত করে যে রিকোয়েস্ট সফল হয়েছে।
- `res.end("Hello World")` এর মাধ্যমে `"Hello World"` টেক্সট সহ রেসপন্সটি ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/six` রুটে **GET** রিকোয়েস্ট আসলে হেডারে অতিরিক্ত কিছু তথ্য যোগ করে, **201** স্ট্যাটাস কোড সহ `"Hello World"` রেসপন্স হিসেবে পাঠায়।

## **Response Set Cookies**

```jsx
let express = require('express');

app = express();

app.get("/Seven",function(req,res){
    res.cookie('name','Nirob');
    res.cookie('city','Gazipur');
    res.cookie('age','30 years old');
    res.end('cookie set success');
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **কুকি সেট** করে এবং রেসপন্স হিসেবে একটি মেসেজ পাঠায়। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### কুকি সেট সহ GET রিকোয়েস্ট:

```jsx
app.get("/Seven", function(req, res) {
    res.cookie('name', 'Nirob');
    res.cookie('city', 'Gazipur');
    res.cookie('age', '30 years old');
    res.end('cookie set success');
});
```

- এই অংশটি `/Seven` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.cookie()` মেথডটি ব্যবহার করে তিনটি কুকি তৈরি করা হয়েছে এবং ক্লায়েন্টের ব্রাউজারে পাঠানো হয়েছে:
    - `name` কুকির মান `"Nirob"`
    - `city` কুকির মান `"Gazipur"`
    - `age` কুকির মান `"30 years old"`
- `res.end('cookie set success')` এর মাধ্যমে `"cookie set success"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে, যা ইঙ্গিত করে যে কুকি সফলভাবে সেট হয়েছে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/Seven` রুটে **GET** রিকোয়েস্ট আসলে তিনটি কুকি সেট করে এবং রেসপন্সে `"cookie set success"` মেসেজটি পাঠায়।

## **Response Clear Cookies**

```jsx
let express = require('express');

app = express();

app.get("/Seven",function(req,res){
    res.cookie('name','Nirob');
    res.cookie('city','Gazipur');
    res.cookie('age','30 years old');
    res.end('cookie set success');
});

app.get("/Eight",function(req,res){
    res.clearCookie('Nirob');
    res.clearCookie('age');
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা নির্দিষ্ট রুটে কুকি সেট করে এবং অন্য একটি রুটে কুকি ক্লিয়ার করে। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### কুকি সেট করার জন্য GET রিকোয়েস্ট:

```jsx
app.get("/Seven", function(req, res) {
    res.cookie('name', 'Nirob');
    res.cookie('city', 'Gazipur');
    res.cookie('age', '30 years old');
    res.end('cookie set success');
});
```

- এই অংশটি `/Seven` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.cookie()` মেথডটি ব্যবহার করে তিনটি কুকি তৈরি করা হয়েছে এবং ক্লায়েন্টের ব্রাউজারে পাঠানো হয়েছে:
    - `name` কুকির মান `"Nirob"`
    - `city` কুকির মান `"Gazipur"`
    - `age` কুকির মান `"30 years old"`
- `res.end('cookie set success')` এর মাধ্যমে `"cookie set success"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে, যা নির্দেশ করে যে কুকিগুলো সফলভাবে সেট হয়েছে।

### কুকি ক্লিয়ার করার জন্য GET রিকোয়েস্ট:

```jsx
app.get("/Eight", function(req, res) {
    res.clearCookie('Nirob');
    res.clearCookie('age');
});
```

- এই অংশটি `/Eight` রুটে একটি `GET` রিকোয়েস্ট সেট করেছে।
- `res.clearCookie()` মেথডটি ব্যবহার করে নির্দিষ্ট কুকি মুছে ফেলা হয়েছে:
    - `Nirob` কুকি এবং `age` কুকি মুছে ফেলা হয়েছে।
- তবে এখানে `res.end()` বা `res.send()` এর মতো কোনো রেসপন্স মেথড নেই, তাই রিকোয়েস্ট পাঠানোর পর কোনো মেসেজ প্রদর্শন করবে না।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/Seven` রুটে **GET** রিকোয়েস্ট আসলে তিনটি কুকি সেট করে এবং `/Eight` রুটে **GET** রিকোয়েস্ট পাঠালে `Nirob` ও `age` কুকি মুছে ফেলে।

# **Request Method**

- Post()
- Get()
- Put()
- Delete()

### **Request get()**

- Create Simple Get Request
- Simple Get Request With URL Parameter
- Catch Request Header Simple Get Method

## Working With Request

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){
    res.send("This is simple get Request");
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **GET** রিকোয়েস্ট গ্রহণ করে এবং রেসপন্স হিসেবে একটি সাধারণ মেসেজ পাঠায়। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### GET রিকোয়েস্ট:

```jsx
app.get("/", function(req, res) {
    res.send("This is simple get Request");
});

```

- এই অংশটি `/` রুটে একটি **GET** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন সার্ভার `res.send()` মেথডটি ব্যবহার করে `"This is simple get Request"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠায়।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **GET** রিকোয়েস্ট আসলে `"This is simple get Request"` মেসেজটি রেসপন্স হিসেবে পাঠায়।

## **Get Request With URL Query**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
});

// http://localhost:8000?firstName=Nirob&lastName=Mahfuz (ai ta use kore post man e get request debo)

app.listen(8000,function(){ 
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **GET** রিকোয়েস্ট গ্রহণ করে **কুয়েরি প্যারামিটার থেকে ইউজারের নাম** নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### GET রিকোয়েস্ট এবং কুয়েরি প্যারামিটার হ্যান্ডলিং:

```jsx
app.get("/", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.end(firstName + " " + lastName);
});
```

- এই অংশটি `/` রুটে একটি **GET** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন **query parameters** এর মাধ্যমে `firstName` এবং `lastName` নামের দুইটি মান পাঠাতে পারে।
    - `req.query.firstName` দ্বারা **firstName** প্যারামিটারটি এবং `req.query.lastName` দ্বারা **lastName** প্যারামিটারটি অ্যাক্সেস করা হয়েছে।
- `res.end(firstName + " " + lastName)` এর মাধ্যমে ইউজারের `firstName` এবং `lastName` কনক্যাটিনেট করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### উদাহরণ রিকোয়েস্ট (Postman এ পাঠানো যাবে):

```
<http://localhost:8000?firstName=Nirob&lastName=Mahfuz>
```

এই URL এ গেলে বা Postman-এ এই **GET** রিকোয়েস্ট পাঠালে, রেসপন্স হিসেবে **"Nirob Mahfuz"** রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **GET** রিকোয়েস্ট আসলে `firstName` এবং `lastName` কুয়েরি প্যারামিটার গ্রহণ করে এবং রেসপন্স হিসেবে পূর্ণ নাম পাঠায়।

## **Working With Get Request Header**

```jsx
let express = require('express');

app = express();

app.get("/",function(req,res){
    
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " +lastName);

});

// Postman e Headers e giye fistName & lastName add korte hobe

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **GET** রিকোয়েস্ট গ্রহণ করে **হেডার থেকে ইউজারের নাম** নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের বাংলা ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### GET রিকোয়েস্ট এবং হেডার থেকে ডেটা গ্রহণ করা:

```jsx
app.get("/", function(req, res) {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    res.end(firstName + " " + lastName);
});
```

- এই অংশটি `/` রুটে একটি **GET** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **GET** রিকোয়েস্ট পাঠায়, তখন হেডার থেকে `firstName` এবং `lastName` এর মান সংগ্রহ করে।
    - `req.header('firstName')` দ্বারা **firstName** হেডারের মান এবং `req.header('lastName')` দ্বারা **lastName** হেডারের মান অ্যাক্সেস করা হয়েছে।
- `res.end(firstName + " " + lastName)` এর মাধ্যমে `firstName` এবং `lastName` কনক্যাটিনেট করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### Postman এ Headers সেট করা:

এই রিকোয়েস্ট পাঠানোর জন্য Postman-এ যেতে হবে এবং **Headers** সেকশনে `firstName` ও `lastName` হেডারগুলো এভাবে অ্যাড করতে হবে:

- **firstName:** Nirob
- **lastName:** Mahfuz

এরপর **GET** রিকোয়েস্ট পাঠালে রেসপন্স হিসেবে **"Nirob Mahfuz"** রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **GET** রিকোয়েস্ট আসলে `firstName` এবং `lastName` হেডার থেকে তথ্য সংগ্রহ করে এবং পূর্ণ নাম রেসপন্স হিসেবে পাঠায়।

### **Request post()**

- Request
- Request With URL Parameter
- Request Header
- Request JSON BODY
- Request Multipart Form Data
- Request File Upload

## **Simple Post Request**

```jsx
let express = require('express');

app = express();

app.post("/",function(req,res){
    res.send("This is Simple post request");
});

// Browser e giye hit krle hbe na cz Browser e kono Post request jai na tai PostMan use krte hbe

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা একটি নির্দিষ্ট রুটে **POST** রিকোয়েস্ট গ্রহণ করে এবং একটি সাধারণ রেসপন্স পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সাহায্য করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### POST রিকোয়েস্ট হ্যান্ডলিং:

```jsx
app.post("/", function(req, res) {
    res.send("This is Simple post request");
});
```

- এই অংশটি `/` রুটে একটি **POST** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন সার্ভার `res.send()` মেথডটি ব্যবহার করে `"This is Simple post request"` মেসেজটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠায়।

### ব্রাউজারে POST রিকোয়েস্ট করা যাবে না:

এই লাইনটিতে কমেন্টে উল্লেখ করা হয়েছে যে, সরাসরি ব্রাউজারে গিয়ে এই রিকোয়েস্ট হিট করলে কাজ করবে না, কারণ ব্রাউজার থেকে সরাসরি **POST** রিকোয়েস্ট পাঠানো যায় না। এজন্য **Postman** বা অন্য কোনো API টেস্টিং টুল ব্যবহার করতে হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে `"This is Simple post request"` মেসেজটি রেসপন্স হিসেবে পাঠায়। তবে, এই রিকোয়েস্টটি ব্রাউজার থেকে সরাসরি পাঠানো যাবে না, এজন্য **Postman** ব্যবহার করতে হবে।

## **Post Request With URL Query**

```jsx
let express = require('express');

app = express();

app.post("/",function(req,res){

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName + " " + lastName);
});

// http://localhost:8000?firstName=Mahfuz&lastName=Nirob(ai ta use kore post man e Post request debo)

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা `/` রুটে **POST** রিকোয়েস্ট গ্রহণ করে এবং **query parameters** থেকে ইউজারের নাম নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');

```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();

```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### POST রিকোয়েস্ট এবং কুয়েরি প্যারামিটার থেকে ডেটা গ্রহণ:

```jsx
app.post("/", function(req, res) {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;

    res.send(firstName + " " + lastName);
});

```

- এই অংশটি `/` রুটে একটি **POST** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন **query parameters** এর মাধ্যমে `firstName` এবং `lastName` এর মান পাঠানো যায়।
    - `req.query.firstName` দ্বারা **firstName** প্যারামিটারটি এবং `req.query.lastName` দ্বারা **lastName** প্যারামিটারটি অ্যাক্সেস করা হয়েছে।
- `res.send(firstName + " " + lastName)` এর মাধ্যমে `firstName` এবং `lastName` কনক্যাটিনেট করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### উদাহরণ রিকোয়েস্ট (Postman এ পাঠানো যাবে):

```
<http://localhost:8000?firstName=Mahfuz&lastName=Nirob>

```

এই URL টি দিয়ে **POST** রিকোয়েস্ট পাঠালে রেসপন্স হিসেবে **"Mahfuz Nirob"** রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে `firstName` এবং `lastName` কুয়েরি প্যারামিটার থেকে নাম নিয়ে এবং পূর্ণ নাম রেসপন্স হিসেবে পাঠায়।

## **Post Request With Header Properties**

```jsx
let express = require('express');

app = express();

app.post("/",function(req,res){

    let userName = req.header('userName');
    let password = req.header('password');

    res.send("User Name:" + userName  + " Password:" +password);

});

// Postman e Headers e giye fistName & lastName add korte hobe

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা `/` রুটে **POST** রিকোয়েস্ট গ্রহণ করে এবং **হেডার** থেকে `userName` ও `password` এর মান নিয়ে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
```

এই লাইনে `express` লাইব্রেরিকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে, যা ওয়েব সার্ভার তৈরি করতে সহায়তা করে।

```jsx
app = express();
```

এখানে `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে, যা `express()` ফাংশনের মাধ্যমে পাওয়া যায়।

### POST রিকোয়েস্ট এবং হেডার থেকে ডেটা গ্রহণ করা:

```jsx
app.post("/", function(req, res) {
    let userName = req.header('userName');
    let password = req.header('password');

    res.send("User Name:" + userName + " Password:" + password);
});
```

- এই অংশটি `/` রুটে একটি **POST** রিকোয়েস্ট সেট করেছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন হেডার থেকে `userName` এবং `password` এর মান সংগ্রহ করে।
    - `req.header('userName')` দ্বারা **userName** হেডারের মান এবং `req.header('password')` দ্বারা **password** হেডারের মান অ্যাক্সেস করা হয়েছে।
- `res.send("User Name:" + userName + " Password:" + password)` এই লাইনটি `userName` এবং `password` কে কনক্যাটিনেট করে রেসপন্স হিসেবে পাঠাচ্ছে।

### Postman এ Headers সেট করা:

এই রিকোয়েস্ট পাঠানোর জন্য **Postman** এ যেতে হবে এবং **Headers** সেকশনে `userName` ও `password` হেডারগুলো অ্যাড করতে হবে:

- **userName:** যেকোনো ব্যবহারকারীর নাম
- **password:** যেকোনো পাসওয়ার্ড

এরপর **POST** রিকোয়েস্ট পাঠালে রেসপন্স হিসেবে `"User Name: [userName] Password: [password]"` রিটার্ন হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে হেডার থেকে `userName` এবং `password` সংগ্রহ করে এবং এই তথ্যগুলো রেসপন্স হিসেবে পাঠায়।

## **Post Application-JSON**

**Body  Parser npm Install**

```jsx
npm install body-parser
```

```jsx
let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

app.post("/",function(req,res){
    let JSONData = req.body;

    let JSONString = JSON.stringify(JSONData);
    // JSON takhe specific kono data dhorte chaile [ let name = JSONData['name'];  ]
    res.send(JSONString);
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে, যা JSON ডেটা গ্রহণ করে এবং সেই ডেটাকে আবার JSON স্ট্রিং আকারে রেসপন্স হিসেবে পাঠায়। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
let bodyParser = require('body-parser');
```

এই লাইনে `express` এবং `body-parser` লাইব্রেরিগুলোকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে। `express` ওয়েব সার্ভার তৈরি করতে সাহায্য করে, এবং `body-parser` POST রিকোয়েস্টের বডিতে পাঠানো JSON ডেটা পার্স করার জন্য ব্যবহৃত হয়।

```jsx
let app = express();
app.use(bodyParser.json());
```

- `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে।
- `app.use(bodyParser.json())` দ্বারা সার্ভারটি JSON ফরম্যাটে আসা ডেটা গ্রহণ করার জন্য কনফিগার করা হয়েছে। এটি রিকোয়েস্টের বডিতে JSON ডেটা থাকলে সেটিকে স্বয়ংক্রিয়ভাবে JavaScript অবজেক্টে রূপান্তরিত করে।

### POST রিকোয়েস্ট এবং JSON ডেটা গ্রহণ:

```jsx
app.post("/", function(req, res) {
    let JSONData = req.body;

    let JSONString = JSON.stringify(JSONData);
    // JSON takhe specific kono data dhorte chaile [ let name = JSONData['name'];  ]
    res.send(JSONString);
});
```

- এখানে `/` রুটে একটি **POST** রিকোয়েস্ট সেট করা হয়েছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন `req.body` থেকে JSON ডেটা সংগ্রহ করা হয় এবং সেটিকে `JSONData` নামে একটি ভেরিয়েবলে রাখা হয়।
- `JSON.stringify(JSONData)` এর মাধ্যমে `JSONData` অবজেক্টটিকে JSON স্ট্রিং এ রূপান্তর করা হয়েছে।
- `res.send(JSONString)` এর মাধ্যমে এই JSON স্ট্রিংটি রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা `/` রুটে **POST** রিকোয়েস্ট আসলে JSON ডেটা গ্রহণ করে এবং সেই ডেটাকে JSON স্ট্রিং আকারে রেসপন্স হিসেবে পাঠায়। JSON ডেটা গ্রহণের জন্য `body-parser` ব্যবহার করা হয়েছে।

## **Working With Multipart Form Data**

**Multer npm Install**

```jsx
npm install --save multer
```

```jsx
let express = require('express');
let multer = require('multer');
let multer = multer();

let app = express();
// for parsing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));

app.post("/",function(req,res){

    let ReqBody = req.body;

    res.send(JSON.stringify(ReqBody));

});

// Postman e giye Body te jabo than form-data select kore key and value add korbo

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** সার্ভার তৈরি করেছে যা **multipart/form-data** ফরম্যাটে পাঠানো ডেটা গ্রহণ করে। এটি **Postman** এর মাধ্যমে ফাইল আপলোড এবং ফরম্যাটেড ডেটা প্রেরণ করার জন্য উপযোগী। নিচে প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
let multer = require('multer');
let multer = multer();

```

- প্রথমে `express` এবং `multer` লাইব্রেরিগুলোকে প্রয়োজনীয় মডিউল হিসেবে আনা হয়েছে।
- `multer` লাইব্রেরিটি ফাইল আপলোডের জন্য ব্যবহৃত হয় এবং এখানে `multer()` ফাংশনটি ব্যবহার করে একটি **multer** ইনস্ট্যান্স তৈরি করা হয়েছে।

```jsx
let app = express();
// for parsing multipart/form-data
app.use(multer.array());
app.use(express.static('public'));

```

- `app` নামে একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে।
- `app.use(multer.array())` ব্যবহার করে **multipart/form-data** ফরম্যাটে আসা ডেটা পার্স করার জন্য মুলটারকে কনফিগার করা হয়েছে। এটি ফর্মের মাধ্যমে একাধিক ফাইল বা ডেটা গ্রহণের অনুমতি দেয়।
- `app.use(express.static('public'))` লাইনটি `public` নামক একটি ফোল্ডারকে স্ট্যাটিক ফাইল সার্ভ করার জন্য নির্ধারণ করেছে। এই ফোল্ডারে থাকা ফাইলগুলো সরাসরি ক্লায়েন্টের কাছে প্রদর্শন করা যাবে।

### POST রিকোয়েস্ট এবং ডেটা গ্রহণ:

```jsx
app.post("/", function(req, res) {
    let ReqBody = req.body;

    res.send(JSON.stringify(ReqBody));
});

```

- এখানে `/` রুটে একটি **POST** রিকোয়েস্ট সেট করা হয়েছে।
- যখন ইউজার `/` রুটে **POST** রিকোয়েস্ট পাঠায়, তখন `req.body` থেকে ডেটা সংগ্রহ করা হয় এবং সেটিকে `ReqBody` নামে একটি ভেরিয়েবলে রাখা হয়।
- `res.send(JSON.stringify(ReqBody))` এর মাধ্যমে `ReqBody` অবজেক্টটিকে JSON স্ট্রিং এ রূপান্তর করে রেসপন্স হিসেবে ক্লায়েন্টের কাছে পাঠানো হচ্ছে।

### Postman ব্যবহার করে ডেটা পাঠানো:

- Postman এ **Body** সেকশনে গিয়ে **form-data** সিলেক্ট করতে হবে।
- এখানে **key** এবং **value** জোড়া হিসেবে ডেটা প্রদান করতে হবে, যা সার্ভারে পাঠানো হবে।

### সার্ভার চালানো:

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});

```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর কনসোলে `"Server Run Success"` মেসেজটি দেখানো হয়, যা ইঙ্গিত করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা **multipart/form-data** ফরম্যাটে আসা POST রিকোয়েস্ট গ্রহণ করে এবং সেই ডেটাকে JSON স্ট্রিং হিসেবে রেসপন্স দেয়। **Multer** লাইব্রেরিটি এখানে ফাইল আপলোডের জন্য ব্যবহৃত হয়েছে এবং **Postman** দিয়ে ডেটা পাঠানোর জন্য ব্যবস্থা করা হয়েছে।

# File Upload

**Multer npm Install**

```jsx
npm install --save multer
```

```jsx
let express = require('express');
let multer = require('multer');
let app = express();

let storage = multer.diskStorage({

    destination:function (req,file,callback) {
        callback(null,'./uploads');
    },
    filename:function (req,file,callback){
        callback(null,file.originalname);
    }
});

// PostMan r giye Body te jbo than Form-data select kore KEY er name dlm (myfile) KEY er type dbo File thaa VALUE te select Files e giye file upload dye debo.
let upload = multer({storage:storage}).single('myfile');
app.post("/",function(req,res){

    upload(req,res,function(error){
        if(error){
            return res.end("Error uploading file");
        }
        else{
        res.end("File is uploaded successfully!");
        }
    });
});

app.listen(8000,function(){
    console.log("Server Run Success");
});
```

এই কোডটি একটি **Express.js** অ্যাপ্লিকেশন তৈরি করেছে যা **Multer** লাইব্রেরি ব্যবহার করে ফাইল আপলোড করার কাজ করে। নিচে কোডের প্রতিটি অংশের ব্যাখ্যা দেওয়া হলো:

```jsx
let express = require('express');
let multer = require('multer');
let app = express();
```

- এখানে প্রথমে `express` এবং `multer` লাইব্রেরিগুলোকে ইনপোর্ট করা হয়েছে। `express` ওয়েব সার্ভার তৈরি করার জন্য ব্যবহৃত হয়, আর `multer` ফাইল আপলোড করার জন্য ব্যবহৃত হয়।
- `app` নামক একটি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি করা হয়েছে।

### Storage Configuration

```jsx
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads'); // ফাইলটি কোথায় সেভ হবে তা নির্ধারণ করা
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname); // ফাইলের নাম কী হবে তা নির্ধারণ করা
    }
});
```

- `multer.diskStorage()` ফাংশনের মাধ্যমে একটি স্টোরেজ কনফিগারেশন তৈরি করা হয়েছে।
- `destination` ফাংশনটি নির্দেশ করে যে আপলোড করা ফাইলটি `uploads` ফোল্ডারে সংরক্ষিত হবে।
- `filename` ফাংশনটি ফাইলের নাম নির্ধারণ করে। এখানে `file.originalname` ব্যবহার করা হয়েছে, যা আপলোড করা ফাইলের আসল নাম ধরে রাখবে।

### File Upload Endpoint

```jsx
let upload = multer({ storage: storage }).single('myfile');
app.post("/", function(req, res) {
    upload(req, res, function(error) {
        if (error) {
            return res.end("Error uploading file");
        } else {
            res.end("File is uploaded successfully!");
        }
    });
});
```

- `upload` নামক একটি ভেরিয়েবল তৈরি করা হয়েছে, যা `multer` এর কনফিগারেশন ধারণ করছে। এখানে `single('myfile')` বলা হয়েছে, মানে একক ফাইল আপলোড করার জন্য যে ফিল্ডের নাম **myfile**।
- `app.post("/", function(req, res) {...})` মাধ্যমে `/` রুটে একটি **POST** রিকোয়েস্ট তৈরি করা হয়েছে।
- `upload(req, res, function(error) {...})` ফাংশনটি ফাইল আপলোডের জন্য ব্যবহৃত হচ্ছে।
    - যদি আপলোডের সময় কোনো ত্রুটি ঘটে, তাহলে `"Error uploading file"` বার্তা দেখানো হয়।
    - যদি আপলোড সফল হয়, তাহলে `"File is uploaded successfully!"` বার্তা দেখানো হয়।

### Postman ব্যবহার করে ফাইল আপলোড করা

- Postman এ গেলে **Body** ট্যাবে যেতে হবে এবং **form-data** নির্বাচন করতে হবে।
- এখানে একটি **key** তৈরি করতে হবে যার নাম হবে `myfile` এবং **type** নির্বাচন করতে হবে **File**।
- এরপর **Value** সেকশনে ফাইলটি আপলোড করতে হবে।

### সার্ভার শুরু করা

```jsx
app.listen(8000, function() {
    console.log("Server Run Success");
});
```

- এই লাইনে সার্ভার **৮০০০** পোর্টে চালু করা হয়েছে।
- সার্ভার চালু হওয়ার পর `"Server Run Success"` বার্তাটি কনসোলে প্রদর্শিত হবে, যা নির্দেশ করে যে সার্ভার সফলভাবে চলছে।

### সংক্ষেপে

এই কোডটি একটি Express.js সার্ভার তৈরি করেছে যা **Multer** লাইব্রেরি ব্যবহার করে ফাইল আপলোড করার জন্য ডিজাইন করা হয়েছে। ব্যবহারকারী Postman এর মাধ্যমে ফাইল আপলোড করে এবং সার্ভার সফলভাবে ফাইলটি গ্রহণ করে একটি বার্তা পাঠায়।

# **Middleware**

Middle + Ware
মধ্যম  + সতর্কতা
মাঝখানের সতর্কতা/সচেতনতা

![middleware.png](https://github.com/mdmahfuz307/Express.JS-Learning-Journey/blob/master/05-Middleware/Img/middleware.png)

এই ছবিতে একটি সাধারণ ওয়েব অ্যাপ্লিকেশন স্থাপনার মধ্যে **Middleware** বা মধ্যস্থতাকারীর ভূমিকা দেখানো হয়েছে।

**Middleware** একটি প্রক্রিয়া যা **Request** (অনুরোধ) এবং **Response** (প্রতিক্রিয়া) এর মধ্যে কাজ করে। যখন একটি ব্যবহারকারী অনুরোধ করে, Middleware সেই অনুরোধকে যাচাই এবং প্রসেস করে, তারপর সেটিকে সার্ভারে পাঠায়। সার্ভার থেকে আসা প্রতিক্রিয়াকেও Middleware প্রক্রিয়া করতে পারে।

**Middleware** এর কিছু গুরুত্বপূর্ণ কাজগুলো হল:

1. **User Agent চেক করা এবং বৈধ অনুরোধ যাচাই করা** – ব্যবহারকারীর অনুরোধ বৈধ কিনা তা নিশ্চিত করা।
2. **Authentication, Authorization, Verification** – ব্যবহারকারীকে যাচাই এবং অনুমোদন করা।
3. **Request Limiting** – অনুরোধের সংখ্যা সীমাবদ্ধ রাখা, যাতে সার্ভারের উপর চাপ কম থাকে।
4. **অন্যান্য নিরাপত্তামূলক ব্যবস্থাগুলি** – সিস্টেমের নিরাপত্তা বাড়ানোর জন্য অন্যান্য পদক্ষেপ।

এইসব কাজের মাধ্যমে Middleware অ্যাপ্লিকেশনের নিরাপত্তা এবং পারফরমেন্স উন্নত করে।

# **Middleware Placing**

1. Application Level
2. Route Level

**Middleware Placing** এর ক্ষেত্রে, Express.js-এ মিডলওয়্যারকে প্রধানত দুইটি স্তরে স্থাপন করা যায়: **অ্যাপ্লিকেশন স্তর** এবং **রুট স্তর**। প্রতিটির নিজস্ব সুবিধা এবং ব্যবহারিক উদ্দেশ্য রয়েছে। নিচে প্রতিটি স্তরের বিস্তারিত আলোচনা করা হল।

## ১. অ্যাপ্লিকেশন স্তর (Application Level Middleware)

অ্যাপ্লিকেশন স্তরে মিডলওয়্যারগুলি অ্যাপ্লিকেশন শুরু হওয়ার সময় ব্যবহার করা হয় এবং এটি পুরো অ্যাপ্লিকেশন জুড়ে প্রযোজ্য হয়। অর্থাৎ, যখনই কোন রিকোয়েস্ট করা হবে, তখন এই মিডলওয়্যারগুলি কার্যকর হবে।

### উদাহরণ:

```jsx
let express = require('express');
let app = express();

app.use(function(req,res,next){

    console.log("I am application level middleware");
    next();
})

app.get('/', function(req, res) {
    res.send("This is Home page");
});

app.get('/contact', function(req, res) {
    res.send("This is contact page");
});

app.listen(8000, function() {
    console.log('Server running on port 8000');
});
```

এই কোডটি Express.js ব্যবহার করে একটি সার্ভার তৈরি করেছে এবং এতে একটি **অ্যাপ্লিকেশন স্তরের মিডলওয়্যার** যুক্ত করা হয়েছে। এটি বিস্তারিতভাবে ব্যাখ্যা করা হল:

```jsx
let express = require('express');
let app = express();

```

এখানে Express.js লাইব্রেরিটি ইমপোর্ট করা হয়েছে এবং `app` নামের একটি অ্যাপ্লিকেশন অবজেক্ট তৈরি করা হয়েছে, যা সার্ভারের মূল অবজেক্ট হিসেবে কাজ করবে।

### অ্যাপ্লিকেশন স্তরের মিডলওয়্যার

```jsx
app.use(function(req,res,next){
    console.log("I am application level middleware");
    next();
})

```

এই অংশটি একটি **অ্যাপ্লিকেশন স্তরের মিডলওয়্যার** যোগ করেছে। `app.use()` ব্যবহার করে এই মিডলওয়্যারটি পুরো অ্যাপ্লিকেশন জুড়ে কার্যকর হবে, যা প্রতিটি রিকোয়েস্টের আগে চালানো হবে।

- `console.log("I am application level middleware");`: যখনই কোনো রিকোয়েস্ট আসবে, এই মেসেজটি কনসোলে প্রদর্শিত হবে।
- `next();`: `next()` ফাংশনটি পরবর্তী রাউটে বা মিডলওয়্যারে যেতে নির্দেশ করে। এটি না থাকলে রিকোয়েস্ট এখানে আটকে যাবে এবং পরবর্তী রাউটে যেতে পারবে না।

### রুটসমূহ (Routes)

```jsx
app.get('/', function(req, res) {
    res.send("This is Home page");
});

```

এই অংশে `"/"` রুটটি ডিফাইন করা হয়েছে। যখনই কেউ এই রুটে রিকোয়েস্ট করবে, তাকে `"This is Home page"` মেসেজটি দেখানো হবে।

```jsx
app.get('/contact', function(req, res) {
    res.send("This is contact page");
});

```

এখানে `"/contact"` রুটটি ডিফাইন করা হয়েছে। যখন কেউ এই রুটে রিকোয়েস্ট করবে, তাকে `"This is contact page"` মেসেজটি পাঠানো হবে।

### সার্ভার চালু করা

```jsx
app.listen(8000, function() {
    console.log('Server running on port 8000');
})

```

এই অংশটি সার্ভারটি ৮০০০ পোর্টে চালু করে এবং কনসোলে `"Server running on port 8000"` মেসেজটি দেখায়। এই মেসেজটি নিশ্চিত করে যে সার্ভারটি সফলভাবে চালু হয়েছে।

### কোডের কাজের প্রক্রিয়া

- যখনই কোনো রিকোয়েস্ট আসবে, প্রথমে মিডলওয়্যার `console.log("I am application level middleware");` চালাবে এবং কনসোলে মেসেজটি দেখাবে।
- তারপর `next()` ফাংশনের মাধ্যমে রিকোয়েস্টটি রাউটে পাঠানো হবে, যেখানে `"/"` বা `"/contact"` রুট অনুযায়ী রেসপন্স পাঠানো হবে।

### ব্যবহারের সুবিধা:

- প্রতিটি রিকোয়েস্টের জন্য মিডলওয়্যারটি স্বয়ংক্রিয়ভাবে কার্যকর হয়।
- সাধারণ কনফিগারেশন বা কমন কাজগুলো সেন্ট্রালাইজড ভাবে করা যায়।

## ২. রুট স্তর (Route Level Middleware)

রুট স্তরে মিডলওয়্যারগুলি নির্দিষ্ট রুটের সাথে যুক্ত করা হয়। এটি নির্দিষ্ট রুটের জন্য কাজ করে, যা শুধুমাত্র সেই রুটের ক্ষেত্রে কার্যকর হয়।

### উদাহরণ:

```jsx
let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send("This is Home page");
});

app.get('/contact', function(req, res) {
    res.send("This is contact page");
});

app.use('/about',function(req,res,next){
    
    console.log("I am about middleware");
    next();

});

app.get('/about', function(req, res) {
    res.send("This is about page");
});

app.listen(8000, function() {
    console.log('Server running on port 8000');
});

```

এই কোডটি Express.js ব্যবহার করে একটি সার্ভার তৈরি করেছে এবং এতে **রুট স্তরের মিডলওয়্যার** যোগ করা হয়েছে। এখানে ব্যাখ্যা করা হয়েছে প্রতিটি অংশ এবং আউটপুট কেন এইভাবে হবে তা বিশদে আলোচনা করা হল:

```jsx
let express = require('express');
let app = express();
```

প্রথমে Express.js ইমপোর্ট করা হয়েছে এবং `app` নামে একটি অ্যাপ্লিকেশন অবজেক্ট তৈরি করা হয়েছে, যা সার্ভারের মূল অবজেক্ট হিসেবে কাজ করবে।

### রুটসমূহ (Routes)

```jsx
app.get('/', function(req, res) {
    res.send("This is Home page");
});
```

এখানে `"/"` রুটটি ডিফাইন করা হয়েছে। যখনই কেউ এই রুটে রিকোয়েস্ট করবে, `"This is Home page"` মেসেজটি রেসপন্স হিসেবে পাঠানো হবে।

```jsx
app.get('/contact', function(req, res) {
    res.send("This is contact page");
});
```

`"/contact"` রুটটি ডিফাইন করা হয়েছে, যেখানে এই রুটে রিকোয়েস্ট করলে `"This is contact page"` মেসেজটি রেসপন্স হিসেবে পাঠানো হবে।

### রুট স্তরের মিডলওয়্যার (Route-Level Middleware)

```jsx
app.use('/about',function(req,res,next){
    console.log("I am about middleware");
    next();
});
```

এখানে `app.use('/about',...)` এর মাধ্যমে `/about` রুটের জন্য একটি **মিডলওয়্যার** সেট করা হয়েছে। অর্থাৎ, যখনই `/about` রুটে রিকোয়েস্ট করা হবে, তখন এই মিডলওয়্যারটি চালানো হবে এবং কনসোলে `"I am about middleware"` মেসেজটি প্রদর্শিত হবে। এরপর `next()` ফাংশনটি কল করার মাধ্যমে রিকোয়েস্ট পরবর্তী হ্যান্ডলার বা রাউটে পাঠানো হবে।

```jsx
app.get('/about', function(req, res) {
    res.send("This is about page");
});
```

এই অংশে `"/about"` রুটটি ডিফাইন করা হয়েছে। `/about` রুটে রিকোয়েস্ট করলে এই রেসপন্স `"This is about page"` ক্লায়েন্টকে পাঠানো হবে।

### সার্ভার চালু করা

```jsx
app.listen(8000, function() {
    console.log('Server running on port 8000');
})

```

এই অংশটি সার্ভারটি ৮০০০ পোর্টে চালু করে এবং কনসোলে `"Server running on port 8000"` মেসেজটি প্রদর্শন করে, যা নিশ্চিত করে যে সার্ভারটি সফলভাবে চালু হয়েছে।

### আউটপুট ব্যাখ্যা

যখন `/about` রুটে রিকোয়েস্ট পাঠানো হবে, তখন মিডলওয়্যার `app.use('/about',...)` চালু হবে এবং `"I am about middleware"` মেসেজটি কনসোলে দেখাবে। এরপর `next()` ফাংশনের মাধ্যমে রিকোয়েস্ট `app.get('/about',...)` হ্যান্ডলারে যাবে, যেখানে ক্লায়েন্টকে `"This is about page"` মেসেজ পাঠানো হবে। অন্যান্য রুটে (যেমন `/` বা `/contact`) রিকোয়েস্ট করলে মিডলওয়্যারটি চালু হবে না, কারণ এটি শুধুমাত্র `/about` রুটের জন্য কাজ করে।

**উদাহরণ আউটপুট:**

- `/about` রুটে গেলে:
    - **কনসোলে:** `I am about middleware`
    - **ব্রাউজারে বা ক্লায়েন্টে:** `"This is about page"`
- `/` রুটে গেলে:
    - **কনসোলে:** কোনো মেসেজ নেই।
    - **ব্রাউজারে বা ক্লায়েন্টে:** `"This is Home page"`
- `/contact` রুটে গেলে:
    - **কনসোলে:** কোনো মেসেজ নেই।
    - **ব্রাউজারে বা ক্লায়েন্টে:** `"This is contact page"`

### কেন এই আউটপুট হবে?

এটি ঘটবে কারণ `/about` রুটের জন্য একটি রুট স্তরের মিডলওয়্যার সেট করা হয়েছে, যা শুধুমাত্র `/about` রুটে রিকোয়েস্ট করলে কার্যকর হবে। অন্যান্য রুটগুলোর জন্য মিডলওয়্যার প্রয়োগ করা হয়নি, তাই সেখানে শুধুমাত্র রাউট হ্যান্ডলারগুলো কার্যকর হবে।

### ব্যবহারের সুবিধা:

- শুধুমাত্র নির্দিষ্ট রুটের জন্য মিডলওয়্যার ব্যবহার করা যায়।
- রুটগুলির জন্য নির্দিষ্ট কাজ বা অথেনটিকেশন সম্পন্ন করতে সহায়ক।

### সারসংক্ষেপ

- **অ্যাপ্লিকেশন স্তরের মিডলওয়্যার** পুরো অ্যাপ্লিকেশনের জন্য প্রযোজ্য এবং স্বয়ংক্রিয়ভাবে সব রিকোয়েস্টের সাথে কার্যকর হয়।
- **রুট স্তরের মিডলওয়্যার** শুধুমাত্র নির্দিষ্ট রুটগুলির জন্য কার্যকর হয় এবং বিশেষ কাজ সম্পাদনের জন্য ব্যবহার করা হয়।

এভাবে, অ্যাপ্লিকেশন এবং রুট স্তরের মিডলওয়্যার ব্যবহার করে আপনি আপনার Express.js অ্যাপ্লিকেশনকে আরও কার্যকর এবং পরিচালনাযোগ্য করতে পারেন।