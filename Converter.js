/*This is Main Code 
  Mine Function is => 1) Quotes from Quotes.txt 2) separate it 3)assign it to object an 4)save in QuotesinObject.txt */

var authorAndQuotes = [];
var splitedArray = [];
var quote = "";

const fs = require("fs"); //FileSystem Library
var StringData = fs.readFileSync("Quotes.txt", "utf-8"); //ReadFile
splitedArray = StringData.split("------------------------------------------"); //spilt n Keep in Array

const CleanedVal = splitedArray.filter(RemoveNull);

CleanedVal.map((arr, index) => {
  Seprating(arr, index);
});

function RemoveNull(array) {
  //Remove Null value or empty String from array
  if (array !== "" || array !== null) {
    return array;
  }
}

function Seprating(QuoteAndAuthor, indexValue) {
  //separating the Author name and his/her quotes and Assigning to Object
  let Quoteobject = {
    Author: "",
    Quote: "",
    index: undefined,
  };
  authorName = QuoteAndAuthor.match(/[?:...\s^]--\w+[\s*|\S*]\w+/gim);
  quote = QuoteAndAuthor.match(/"([^"]|\n)*"/gm);
  if (quote !== null) {
    Quoteobject.Author = miniFun(authorName);
    Quoteobject.Quote = quote.toString();
    Quoteobject.index = indexValue;
  }
  authorAndQuotes.push(Quoteobject);
}

function miniFun(authorName) {
  //Sometime No author is Mentioned So return ""
  if (authorName !== null) {
    return authorName.toString();
  } else {
    return "";
  }
}

var finalData = JSON.stringify(authorAndQuotes);
fs.writeFileSync("QuotesInObject.txt", finalData);
// console.log(authorAndQuotes); //ForChecking
