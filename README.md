# React SSR Straightforward
> A straightforward approach to server side rendering with react. 

## To run

```javascript
npm start
```

## Approach
> Bundle all react code using webpack, then render the main component in node using rendertToString.

** Why do I need to webpack the node code as well? **

> Because react uses `exports` keyword which is not understood by node, by using webpack to compile our node code, we can load the exported react component using the `import` keyword.