import probe from './probe';

const ctx: Worker = self as any;

console.log('my worker init', probe())

// Post data to parent thread
ctx.postMessage({ foo: "foo" });

// Respond to message from parent thread
ctx.addEventListener("message", (event) => {
    console.log('worker', event.data);
    // ctx.postMessage({ foo: "boo" });
});
