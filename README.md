#### 7) Answer the following question-

#### 1) What is the difference between var, let, and const?
Ans.    var= Old way avoid in modern code, let= modern, preferred for variables that change, Const= modern, preferred for constants.

#### 2) What is the difference between map(), forEach(), and filter()? 
Ans.    map() ব্যবহার করা হয় array এর প্রতিটা element থেকে নতুন array বানাতে।

        forEach() ব্যবহার করা হয় array এর প্রতিটা element এর উপর কাজ করার জন্য,
        কিন্তু এটা কোনো নতুন array return করে না।

        filter() ব্যবহার করা হয় array থেকে শর্ত অনুযায়ী কিছু element বাছাই করে নতুন array বানাতে।

#### 3) What are arrow functions in ES6?
Ans.    Arrow function সংক্ষিপ্ত (short syntax) ফাংশন লেখার উপায়
        const add = (a, b) => a + b;
        const result = add (10, 20);
        console.log(result);

#### 4) How does destructuring assignment work in ES6?
Ans.    Destructuring object array/object মানে হলো — array এর ভিতরের object থেকে value গুলো সহজে বের করে
        Const num = { 20 , 10 , 5};
        Const { first } = num;
        console.log( first ) / output - 20

#### 5) Explain template literals in ES6. How are they different from string concatenation?
Ans. Template literals হলো ES6 এ যুক্ত একটি নতুন string লেখা পদ্ধতি, যা `` (backticks) ব্যবহার করে লেখা হয়।
