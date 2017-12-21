var express = require("express");
var tuan = express();
tuan.use(express.static("public"));
tuan.set("view engine", "ejs");
tuan.set("views", "./views");
tuan.listen(3000);

tuan.get("/", function(req, res) {
	res.render("trangchu");
});