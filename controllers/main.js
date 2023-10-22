const fs = require("fs");
const path = require("path");

const Pricelist = require("../models/pricelist");

exports.getIndex = async (req, res, next) => {
  const pricelists = await Pricelist.findAllPricelistItems();
  const doctors = readJsonFiles("./doctors");
  res.render("index", {
    pageTitle: "Home",
    path: "/home",
    pricelists,
    doctors,
  });
};

exports.postSearchDoctor = async (req, res, next) => {
  const data = req.body;
  await Pricelist.editBook(data.book_id, data.cover_image_url);
  res.redirect("/");
};

function readJsonFiles(dir) {
  const files = fs.readdirSync(dir);

  const jsonFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === ".json"
  );

  const data = jsonFiles.map((file) => {
    const filePath = path.join(dir, file);
    const fileData = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileData);
  });

  return data;
}
