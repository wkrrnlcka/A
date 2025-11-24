const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Solve = require("./models/Solve");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect("mongodb://localhost:27017/boj", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 기록 저장 API
app.post("/add", async (req, res) => {
    const solve = new Solve(req.body);
    await solve.save();
    res.json({ message: "저장 완료!" });
});

// 기록 목록 조회 API
app.get("/list", async (req, res) => {
    const list = await Solve.find({}).sort({ date: -1 });
    res.json(list);
});

app.listen(3000, () => console.log("🔥 Server running on http://localhost:3000"));

app.get("/", (req, res) => {
  res.send("Server is running!");
});
