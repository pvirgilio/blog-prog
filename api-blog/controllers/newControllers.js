const {
  getAllNews,
  postNews,
  deleteNews,
  verifyId,
} = require("../models/newsModel");

async function showAllNews(req, res) {
  const news = await getAllNews();
  res.status(200).json({ news, message: "Notícias achadas com sucesso!" });
}

async function postAllNews(req, res) {
  const { author, title, content, buttonText } = req.body;
  console.log("Notícias", author, title, content, buttonText);
  const news = await postNews(author, title, content, buttonText);
  res.status(200).json({ news, message: "Notícia postada com sucesso!" });
}

async function showDeleteNews(req, res) {
  const { id } = req.params;
  try {
    const verify = await verifyId(id);
    if (verify.length === 0 || !verify) {
      return res.status(404).json({ message: "Notícia não encontrada!" });
    } else {
      const news = await deleteNews(id);
      return res
        .status(200)
        .json({ news, message: "Notícia excluída com sucesso!" });
    }
  } catch (error) {
    return res.status(404).json({ message: "Notícia não encontrada!" });
  }
}

module.exports = {
  showAllNews,
  postAllNews,
  showDeleteNews,
};
