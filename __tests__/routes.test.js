import request from "supertest";
import app from "../index.js";

describe("GET / routes", () => {
 test("should return 200 for /", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
  });

  test("should return 200 for /about", async () => {
    const res = await request(app).get("/about");
    expect(res.statusCode).toBe(200);
  });

  test("should return 200 for /contact", async () => {
    const res = await request(app).get("/contact");
    expect(res.statusCode).toBe(200);
  });

  test("should return 404 for non-existing route", async () => {
    const res = await request(app).get("/nonexistent");
    expect(res.statusCode).toBe(404);
  });
});
