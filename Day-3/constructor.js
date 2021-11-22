function Book (title, author, year,cool){
    this.title =title;
    this.author = author;
    this.year = year;
    this.cool = cool;
    this.getsummary = function (){
        return `${this.title} was written by ${this.author} in ${this.year}   ${this.cool} `
    };
}

// instansitialion of an object  
const boox1 = new Book(" Rich dad poor dad " ,"Sarfaraz","2020" ,"This book is ")
console.log(boox1)