// @vitest-environment happy-dom
import { fetch as fetch518 } from "undici-5.18.0";
import { fetch as fetch519 } from "undici-5.19.0";
import { fetch as fetch520 } from "undici-5.20.0";
import { fetch as fetch521 } from "undici-5.21.0";
import { fetch as fetch522 } from "undici-5.22.0";
import { it } from "vitest";

it("globalThis", async () => {
  await globalThis.fetch("http://example.com/", {
    signal: new AbortController().signal,
  });
});
it("undici@5.18.0", async () => {
  await fetch518("http://example.com/", {
    signal: new AbortController().signal,
  });
});
it("undici@5.19.0", async () => {
  await fetch519("http://example.com/", {
    signal: new AbortController().signal,
  });
});
it("undici@5.20.0", async () => {
  await fetch520("http://example.com/", {
    signal: new AbortController().signal,
  });
});
it("undici@5.21.0", async () => {
  await fetch521("http://example.com/", {
    signal: new AbortController().signal,
  });
});
it("undici@5.22.0", async () => {
  await fetch522("http://example.com/", {
    signal: new AbortController().signal,
  });
});
