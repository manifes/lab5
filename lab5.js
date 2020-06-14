//Task 1
function task1() {
    for (let i = 0; i < 7; i++)
        console.log("#".repeat(i+1));
}


//Task 2
function task2(a, b) {
    return a < b ? a : b;
}


//Task 3
function task3(a) {
    let min = a[0];
    for (let i = 0; i < a.length; i++)
        if(a[i] < min) min = a[i];
    return min;
}


// Task 4
class Animal {
    constructor(a) {
        this.name = a;
    }
}


class Dog extends Animal {
    constructor(a) {
        super(a);
        this.dateCreated = new Date;
    }
}


addEventListener("load",function() {

    document.getElementById("button1-task5").addEventListener("click", function() {
        return new Promise(function(a) {
            var r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                if (this.readyState === 4) {
                    a(this.responseText);
                }
            };
            r.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
            r.send();
        }).then(function(a) {
            console.log(a);
        });
    });

    document.getElementById("button2-task6").addEventListener("click", async function() {
        var p = new Promise(function(a) {
            var r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                if (this.readyState === 4) {
                    a(this.responseText);
                }
            };
            r.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
            r.send();
        });
        console.log(await p);
    });

});
