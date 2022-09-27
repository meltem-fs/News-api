


const getNews = async () => {
API_KEY = "e81117e96eec4433bfe18cf410045a30";
const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

try{
    const res = await fetch(url);
    if(!res.ok){
        hata();
        throw new Error(`something went wrong:  ${res.status}`)
    }
    const data = await res.json()
    console.log(data.articles[17]);
    selectNews(data.articles)
}
catch(error){
    console.log(error);
}
}

const hata = (e) => {
    document.querySelector("#news-list").innerHTML = `${e} is not found`
}
const selectNews = (item) => {
  item.forEach((a) => {
    const {title,description,urlToImage,url} = a;
     document.querySelector("#news-list").innerHTML += `
     <div class="maycard col-md-6 col-lg-4 col-xl-3 gy-5 gx-4">
      <div class="card"  style="height:38rem">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${url}" target="_blank" class="btn btn-danger">Details</a>
        </div>
      </div>
    </div>
     `;
  })
}



getNews();