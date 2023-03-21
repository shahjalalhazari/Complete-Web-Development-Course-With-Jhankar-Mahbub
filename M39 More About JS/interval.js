// Set Interval is uses for log something again and again after some time given as parameter.
// Here setInterval will print Three(3) after 2 seconds and after 2 seconds it will print 3 again.
// This is some of like for loop.
let num = 0;

setInterval(() => {
    console.log(num++);
}, 500)