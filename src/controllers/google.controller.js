let googleSheet = require("../spreadsheet");

const obtenerRegistros = async (req, res) => {
  registros = await googleSheet.accederGoogleSheet();
  res.render("Home", registros);
};

module.exports = { obtenerRegistros: obtenerRegistros };
