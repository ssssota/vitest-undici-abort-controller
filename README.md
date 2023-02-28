# vitest-undici-abort-controller
Repro repo
## Repro step
```sh
pnpm i
pnpm t
```
## Log
```log
❯ pnpm t

> vitest-undici@1.0.0 test /Users/ssssota/vitest-undici-abort-controller
> vitest run


 RUN  v0.29.1 /Users/ssssota/vitest-undici-abort-controller

 ❯ edge.spec.ts (3)
   × globalThis
   ✓ undici@5.18.0
   × undici@5.19.0
 ✓ node.spec.ts (3) 623ms
 ✓ happy-dom.spec.ts (3) 662ms
 ❯ jsdom.spec.ts (3)
   × globalThis
   ✓ undici@5.18.0
   × undici@5.19.0

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 4 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  edge.spec.ts > globalThis
TypeError: The "emitter" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal
 ❯ edge.spec.ts:7:3
      5|
      6| it("globalThis", async () => {
      7|   await globalThis.fetch("http://example.com/", {
       |   ^
      8|     signal: new AbortController().signal,
      9|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_INVALID_ARG_TYPE",
}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/4]⎯

 FAIL  edge.spec.ts > undici@5.19.0
TypeError: The "emitter" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal
 ❯ Proxy.fetch node_modules/.pnpm/undici@5.19.0/node_modules/undici/index.js:113:13
 ❯ edge.spec.ts:17:3
     15| });
     16| it("undici@5.19.0", async () => {
     17|   await fetch519("http://example.com/", {
       |   ^
     18|     signal: new AbortController().signal,
     19|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_INVALID_ARG_TYPE",
}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/4]⎯

 FAIL  jsdom.spec.ts > globalThis
TypeError: The "emitter" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal
 ❯ jsdom.spec.ts:7:3
      5|
      6| it("globalThis", async () => {
      7|   await globalThis.fetch("http://example.com/", {
       |   ^
      8|     signal: new AbortController().signal,
      9|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_INVALID_ARG_TYPE",
}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/4]⎯

 FAIL  jsdom.spec.ts > undici@5.19.0
TypeError: The "emitter" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal
 ❯ Proxy.fetch node_modules/.pnpm/undici@5.19.0/node_modules/undici/index.js:113:13
 ❯ jsdom.spec.ts:17:3
     15| });
     16| it("undici@5.19.0", async () => {
     17|   await fetch519("http://example.com/", {
       |   ^
     18|     signal: new AbortController().signal,
     19|   });

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Serialized Error: {
  "code": "ERR_INVALID_ARG_TYPE",
}
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/4]⎯

 Test Files  2 failed | 2 passed (4)
      Tests  4 failed | 8 passed (12)
   Start at  18:36:16
   Duration  3.25s (transform 270ms, setup 1ms, collect 625ms, tests 1.83s)

 ELIFECYCLE  Test failed. See above for more details.
```
