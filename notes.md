##I learned how to use github. I like the github commands because they're pretty simple.
##I can bring things down from github onto my machine by using pull, and then if I use
##commit and push, I can push the changes back onto github. This is really cool because
##multiple people can be working on the same code and use github to work together.
1. It can attach a Javascript file and it also can put an icon on the top part
2. It just creates a division. It literally does nothing using just html, but with css, you can style a specific class of div
3. One selects a class and the other one an id. I’ll have to see the problem
4. Padding is usually within the square, and margin is space between squares
5. To make something use flex, you just need to use display: flex, there is flex-direction which can be either column or row. You can determine the sizes of anything using flex. If you set something to a flex of 0, it will have a fixed size, but if it has an actual number it will take up the remaining space. Apparently you can use selectors to certain numbers of a certain tag. You can go, section: nth-child with a number and it will just give you that number of how many sections you used in the program. If you give those things flex values, it will make it based off of ratio.
6. I think I’ll be fine here
7. TODO: study arrow syntax
8. array.map(i =>i+1) that changes all of the values of the entire array to the same values but plus one.  Map edits every single member of an array
9. getElementByID affects certain elements based off of id using javascript code. OK, addEventListener runs a function if a certain event occurs. For example, element .addEventListener(“click”, function), and then the function could be anything. It could be that the function using addEventListener will affect something that has a specific id.
10. TODO: study # selector7
11. For everything in an HTML document there is a node in the DOM. This includes elements, attiributes, text comments, and whitespace. All of these nodes form a big tree, with the document node at the top. 
12. It looks like the default display property is inline
13. This one shouldn’t be hard
Div{
Background color: red
}?
14. you use the img tag. < img alt = “mountain landscape: src=”https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg”
15.
 1st layer: Content
2nd layer: Padding
3rd layer: Border
4th layer: Margin
16. I think you could use a selector to a specific id, type, or class in order to affect only certain text.
17. Hopefully, it will just be some repeated text, this one shouldn’t be that hard.
18. Oh, no. I imagine that I would use getElementByID, and then change a certain property of it.
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
Something like this
19. 
Paragraph: P
Ordered list: ol
Unordered list: ul
Second level heading: h2
First level heading: h1
Third level heading h3
20. <!DOCTYPE html>
21.The if, else if, else syntax is the exact same. There is a triple equals, so maybe I should watch out for that. 
FOR
for (let i = 0; i < 2; i++) {
  console.log(i);
}

DO/WHILE

let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
FOR  IN
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}

const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
FOR OF
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
BREAK AND CONTINUE
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}

22. You use the “new” operator. Const obj = new object({a:3}); I don’t think the curly braces are necessary if you aren’t declaring a variable within the parameters.
23. Yes
24. I believe it is <Script>
25.I’m guessing  
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
Something like this

26. It is a way to store data in the javascript memory. You can’t store things in the memory unless it is of a certain type, and that makes it difficult to store certain objects. Because of that, it can be important to first convert the object into json before storing it. It contains the data types, string, number, bool, array, object, null. 
27. 
Chmod – it allows you to adjust the file permissions, allowing you to specify who can access files, search directories, and run scripts.
pwd – print working directory: it prints the whole path to the current directory
Cd – change directory
Ls – lists the files and directories inside of the current directory
Vim – opens vim which is an editor for files
Nano – opens nano which is similar to vim
Mkdir – makes a directory
Mv – Move files
Rm – Remove files
Man – look up a command in the manual
Ssh – secure shell
Ps – view the currently running processes
Wget
sudo
28. Enter-PSSession cdmlet
29. It’s a combination of first, -l which gives a long version of the list which includes filetype, file permissions, number of links, owner name, owner group, file size, time of last modification, and the name of the file or directory, and -a which makes the list include all hidden files.
30.[subdomain.]*secondary.top: react.simon.cs260.click I think that the secondary domain is always the second to last, the subdomain is everything before that, the top level domain is the .com, and the root domain is the secondary and the top level domains combined.
31. Yes
32. It looks like an a record is something that points a DNS to an ip address and something else that starts with a c points a dns to another dns. The answer 
33. All traffic in HTTPS passes through port 443, Is says that the difference between port 80 and port 443 is that 443 is encrypted and thus much more secure.
 port 80 is the default http connection. If there is no port assigned for HTTP connection, port 80 is used by default.
34.
