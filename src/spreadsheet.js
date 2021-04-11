const { GoogleSpreadsheet } = require("google-spreadsheet");

const credenciales = require("./json/credenciales.json");

let googleId = "1CGQu-Flh5LyeIj4JMyu6TyYRgj3nUcJxvNBuy0lGyaA";

async function accederGoogleSheet() {
  const documento = new GoogleSpreadsheet(googleId);
  await documento.useServiceAccountAuth(credenciales);
  await documento.loadInfo();

  const sheet = documento.sheetsByIndex[0];
  const usersSheet = documento.sheetsByIndex[1];
  const userTable = await usersSheet.getRows();
  console.log("Runned: " + userTable);
  return userTable;
}

module.exports = {
  userTable: this.userTable,
  accederGoogleSheet: accederGoogleSheet,
};
