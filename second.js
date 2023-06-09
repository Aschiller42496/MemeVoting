const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

async function getData(){
    const url1 = ("https://meme-api.com/gimme")
    const url2 = ("https://meme-api.com/gimme")

    const response1 = await fetch(url1)
    const data1 = await response1.json()

    const response2 = await fetch(url2)
    const data2 = await response2.json()
}

//stuff im trying

class generateMemeBtn{
    constructor(.meme-generator .generate-meme-btn)

//Old and clunky

 
 const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
 const memeImage = document.querySelector(".meme-generator img");
 const memeTitle = document.querySelector(".meme-generator .meme-title");
 const memeAuthor = document.querySelector(".meme-generator .meme-author");
 

const generateMemeBtn2 = document.querySelector(".meme-generator-2 .generate-meme-btn-2");
const memeImage2 = document.querySelector(".meme-generator-2 img");
const memeTitle2 = document.querySelector(".meme-generator-2 .meme-title-2");
const memeAuthor2 = document.querySelector(".meme-generator-2 .meme-author-2");

const updateDetails1 = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

const updateDetails2 = (url, title, author) => {
    memeImage2.setAttribute("src", url);
    memeTitle2.innerHTML = title;
    memeAuthor2.innerHTML = `Meme by: ${author}`;
}

async function generateMeme (){

    const url = ("https://meme-api.com/gimme")
    const response = await fetch(url)
    const data1 = await response.json()
    updateDetails1(data1.url, data1.title, data1.author);
}

async function generateMeme2 (){

    const url = ("https://meme-api.com/gimme")
    const response = await fetch(url)
    const data2 = await response.json()
    updateDetails2(data2.url, data2.title, data2.author);
} */