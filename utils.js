const ExcelJS = require("exceljs");
const _ = require("lodash");
const stream = require("stream");

exports.generateExcelFile = async(dataArr) => {
    const filename = `Test-Excel-${new Date().getTime()}.xlsx`;
    const workbook = new ExcelJS.Workbook();
    workbook.calcProperties.fullCalcOnLoad = true;
    workbook.views = [{
        x: 0,
        y: 0,
        width: 100000,
        height: 20000,
        firstSheet: 0,
        activeTab: 1,
        visibility: "visible",
    }, ];

    // create new sheet with pageSetup settings for A4 - landscape
    const worksheet = workbook.addWorksheet("My Sheet", {
        pageSetup: { paperSize: 9, orientation: "landscape" },
    });

    const dataColumns = [];
    const worksheetColumns = [];
    for (const [_key, value] of Object.entries(dataArr)) {
        dataColumns.push(Object.keys(value));
    }

    const columns = _.uniq(_.flattenDeep(dataColumns));
    for (const value of columns) {
        worksheetColumns.push({ header: value, key: value, width: 20 });
    }
    worksheet.columns = [...worksheetColumns];

    for (const iterator of dataArr) {
        worksheet.addRow(iterator);
    }

    const buffer = await workbook.xlsx.writeBuffer();

    return await workbook.xlsx.writeFile(filename);
};

exports.generateExcelBuffer = async(dataArr) => {
    const filename = `Test-Excel-${new Date().getTime()}.xlsx`;
    const workbook = new ExcelJS.Workbook();
    workbook.calcProperties.fullCalcOnLoad = true;
    workbook.views = [{
        x: 0,
        y: 0,
        width: 100000,
        height: 20000,
        firstSheet: 0,
        activeTab: 1,
        visibility: "visible",
    }, ];

    // create new sheet with pageSetup settings for A4 - landscape
    const worksheet = workbook.addWorksheet("My Sheet", {
        pageSetup: { paperSize: 9, orientation: "landscape" },
    });

    const dataColumns = [];
    const worksheetColumns = [];
    for (const [_key, value] of Object.entries(dataArr)) {
        dataColumns.push(Object.keys(value));
    }

    const columns = _.uniq(_.flattenDeep(dataColumns));
    for (const value of columns) {
        worksheetColumns.push({ header: value, key: value, width: 20 });
    }
    worksheet.columns = [...worksheetColumns];

    for (const iterator of dataArr) {
        worksheet.addRow(iterator);
    }

    return await workbook.xlsx.writeBuffer();
};