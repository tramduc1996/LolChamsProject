const axios = require("axios");
const cheerio = require("cheerio");

const getHighlightVideos = () => {
  return axios("https://plays.tv/game/LeagueofLegends")
    .then(result => {
      const $ = cheerio.load(result.data);
      const championLinks = [];
      const championWidgets = $(".video-item").each((i, elem) => {
        const championElement = $(elem);
        const champion = {
          videoUrl: championElement.find("video source").attr("src"),
          videoName: championElement.find("a").text(),
          link: "https://plays.tv/" + championElement.find("a").attr("href"),
          author: championElement.find("span.author strong").text(),
          authorLink:
            "https://plays.tv/" +
            championElement.find("span.author a").attr("href"),
          date: championElement.find("span.created").text(),
          view: championElement.find("span.view-count").text(),
          likes: championElement.find("span.like-count").text()
        };
        championLinks.push(champion);
      });
      return championLinks;
    })
    .catch(err => console.log(err));
};

module.exports = {
  getHighlightVideos
};
