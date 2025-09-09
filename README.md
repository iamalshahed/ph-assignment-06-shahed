#### 1) var, let, আর const এর মধ্যে পার্থক্য কী?

- var পুরোনো পদ্ধতি, function scope-এ কাজ করে।
- let block scope - এ কাজ করে, `Es-6` - এ বেশি ব্যবহার হয়।
- const block scope - এ কাজ করে কিন্তু একবার মান set করার পর আবার পরিবর্তন করা যায় না।

---

#### 2) map(), forEach(), আর filter() এর মধ্যে পার্থক্য কী?

- `forEach` শুধু array - র প্রতিটি element ঘুরে দেখে, কাজ করে, কিন্তু কিছু return করে না।
- `map` প্রতিটি element কে পরিবর্তন করে একটি নতুন `array` return করে।
- `filter` শর্ত মেনে যেসব element ঠিক আছে, শুধু তাদের নিয়েই একটি নতুন array return করে।

---

#### 3) ES6 এ Arrow Functions কী?

- `Arrow function` হলো function লেখার ছোট এবং সহজ উপায়। এগুলো কোডকে সংক্ষিপ্ত করে।

---

### 4) ES6 এ Destructuring Assignment কীভাবে কাজ করে?

- এটা দিয়ে এক লাইনে array বা object থেকে value গুলো আলাদা আলাদা variable-এ নেওয়া যায়। এতে কোড ছোট আর পরিষ্কার হয়।

---

#### 5) ES6 এ Template Literals কী? String concatenation থেকে আলাদা কেন?

- ES6 এ Template literals `backtick` ( ` ) দিয়ে লেখা হয় এবং ${} এর মধ্যে variable বসানো যায়।
- String concatenation - এর চেয়ে এগুলো সহজ, পড়তে ভালো লাগে, multi-line string সাপোর্ট করে এবং string বানানো অনেক সুন্দর হয়, এই কারণে Template Literals String concatenation থেকে আলাদা।
