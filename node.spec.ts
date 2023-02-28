// @vitest-environment node
import { fetch as fetch518 } from "undici-5.18.0";
import { fetch as fetch519 } from "undici-5.19.0";
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
