# React SSR Straightforward
> A straightforward approach to server side rendering with react. 

## To run

```javascript
npm start
```

## Approach
> Bundle all react code using webpack, then render the main component in node using rendertToString.

** Why do I need to webpack the node code as well? **

> Because react uses exports keyword which is not supported by node, we need to convert it as well do it can support `import` keyword.