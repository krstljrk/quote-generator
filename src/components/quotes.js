const quotesList = {
    1 : [ 
        "Kathryn L. Nelson",
        "\"Passion is seldom the end of any story, for it cannot long endure if it is not soon supplemented with true affection and mutual respect.\""
    ],
    2 : [
        "Adam Cooper and Bill Collage", 
        "\"You don't need fancy highbrow traditions or money to really learn. You just need people with the desire to better themselves.\""
    ],
    3 : [
        "David Richerby", 
        "\"The tooth fairy teaches children that they can sell body parts for money.\""
    ],
    4 : [
        "Lao-tzu", 
        "\"Seek not happiness too greedily, and be not fearful of happiness.\""
    ],
    5 : [
        "Laura Moncur", 
        "\"There is nothing like the razor sharp tongue of a good friend to cut through the lies we tell ourselves.\""
    ],
    6 : [
        "James Thurber", 
        "\"It is better to know some of the questions than all of the answers.\""
    ],
    7 : [
        "Hector Berlioz", 
        "\"Every composer knows the anguish and despair occasioned by forgetting ideas which one had no time to write down.\""
    ],
    8 : [
        "Queen Juliana", 
        "\"I can't understand it. I can't even understand the people who can understand it.\""
    ],
    9 : [
        "Margaret Cho", 
        "\"Try to put your happiness before anyone else's, because you may never have done so in your entire life, if you really think about it, if you are really honest with yourself.\""
    ],
    10 : [
        "Elizabeth Moon", 
        "\"People are people, messy and mutable, combining differently with one another from day to day - even hour to hour.\""
    ]
}

// "", 
// "\" \""

function randomNumber() { 
    const min = 1;
    const max = 10
    return Math.floor(Math.random() * (max - min) + min);
} 

function getAuthor(num) {
    return quotesList[num][0];
}

function getQuote(num) {
    return quotesList[num][1];
}


export function returnQuote() {
    const num = randomNumber();
    const author = getAuthor(num);
    const quote = getQuote(num);
    return [author, quote];
}