# Run API

```
npm start

or

node index.js

or 

nodemon index.js
```


# Test API on Postman

## Generate File
<br>

### Generate 100 posts data exported to excel file
```
GET http://localhost:3000/posts
```

### Generate 500 comments data exported to excel file
```
GET http://localhost:3000/comments
```

### Generate 5000 photos data exported to excel file
```
GET http://localhost:3000/photos
```

<br><br>
## Generate Buffer (use this for frontend integration)
<br>
### Generate 100 posts data exported to excel buffer
```
GET http://localhost:3000/posts-buffer
```

### Generate 500 comments data exported to excel buffer
```
GET http://localhost:3000/comments-buffer
```

### Generate 5000 photos data exported to excel buffer
```
GET http://localhost:3000/photos-buffer
```


<br><br>

## Frontend integration 

```
https://github.com/exceljs/exceljs/issues/354

https://github.com/exceljs/exceljs/issues/354#issuecomment-325764873

```

```js
workbook.xlsx.writeBuffer().then(function (data) {
    var blob = new Blob([data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
    saveAs(blob, “fileName.xlsx");
});
```

“saveAs” … I used “FileSaver.js”.

```
https://github.com/alferov/angular-file-saver
```