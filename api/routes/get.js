const express = require("express");
const expressRouter = express.Router();
const fs = require("fs");

const getSize = (path) => {
  return new Promise((res, rej) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        console.error("File error:", err);
        return rej(err);
      }
      res(stats.size);
    });
  });
};

const filesController = async (_, res) => {
  try {
    const files = [
      { name: "Vue", size: await getSize("../applications/vue/app.js") },
      {
        name: "Angular",
        size: await getSize("../applications/angular/app.js"),
      },
      {
        name: "Alpine",
        size: await getSize("../applications/alpine/app.js"),
      },
      {
        name: "Vanilla",
        size: await getSize("../applications/vanilla/app.js"),
      },
      { name: "HMPL", size: await getSize("../applications/hmpl/app.js") },
    ].sort((a, b) => a.size - b.size);
    res.send(files);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "File size error." });
  }
};

expressRouter.get("/files", filesController);

module.exports = expressRouter;
