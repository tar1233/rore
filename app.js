const express = require('express')  // ใช้งาน module express
const app = express()  // สร้างตัวแปร app เป็น instance ของ express
const port = process.env.PORT || 3000  // port 

// ส่งกลับข้อความ "hello world" เมื่อมี GET request มายังหน้า homepage
app.get('/', function (req, res) {
    res.send('hello world ')
})
app.get('/test', function (req, res) {
    res.send('hello world111 ')
})


app.post('/data/:id', function (req, res) {
    const id = req.params.id
    console.log("testOne", id)
    console.log("testOne", req)
    // console.log("testOne", req)
    // const browser = await puppeteer.launch({})
    // const page = await browser.newPage()
    // await page.goto('https://www.google.com/search?q=' + req)
    // var element = await page.waitFor("#oFNiHe > p > a")
    // var text = await page.evaluate(element => element.textContent, element)
    // console.log(text)
    // browser.close()
    res.status(200).send({ message: id });
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})










