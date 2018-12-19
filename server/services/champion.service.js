const axios = require("axios");
const cheerio = require("cheerio");

const get = () => {
  return axios("https://www.mobafire.com/league-of-legends/champions")
    .then(result => {
      const $ = cheerio.load(result.data);
      const champions = [];
      const championWidgets = $(".champ-list__item.visible").each((i, elem) => {
        const championElement = $(elem);
        const champion = {
          img: championElement
            .find("div.champ-list__item__pic img")
            .eq(1)
            .attr("src"),
          championName: championElement
            .find(".champ-list__item__name > b")
            .text(),
          url: "https://www.mobafire.com" + championElement.prop("href")
        };
        champions.push(champion);
        const post = item => {
          return mssql
            .executeProc("Champions_Insert", sqlRequest => {
              sqlRequest.addParameter(
                "championName",
                TYPES.NVarChar,
                item.championName,
                {
                  length: 400
                }
              );
              sqlRequest.addParameter("img", TYPES.NVarChar, item.img, {
                length: 50
              });
              sqlRequest.addParameter("url", TYPES.NVarChar, item.url, {
                length: 250
              });
              sqlRequest.addOutputParameter("id", TYPES.Int, null);
            })
            .then(response => {
              console.log(response.outputParameters);
              return response.outputParameters;
            });
        };
        return post;
      });

      return champions;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  get
};
