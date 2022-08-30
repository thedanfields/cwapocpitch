import { rest } from "msw";

const testData = {
  foo: "bar",
  baz: 1,
};

const payload = {
  data: testData,
  errors: undefined,
};

const urlRoot = "https://TestDataHandlers.ts/";

export const handlers = [
  rest.get(urlRoot + "test", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(payload));
  }),
  rest.get(urlRoot + "five_hundred", (req, res, ctx) => {
    return res(ctx.status(500), ctx.text("500 level error"));
  }),
  rest.get(urlRoot + "four-oh-one", (req, res, ctx) => {
    return res(ctx.status(401), ctx.text("unauthorized"));
  }),
  rest.get(urlRoot + "four-oh-three", (req, res, ctx) => {
    return res(ctx.status(403), ctx.text("unauthenticated"));
  }),
  rest.get(urlRoot + "four-oh-four", (req, res, ctx) => {
    return res(ctx.status(404), ctx.text("not found"));
  }),
];
