import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;