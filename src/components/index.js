const Hello = import(/*webpackChunkName: "hello"*/ './Hello')
const Say = import(/*webpackChunkName: "say"*/ './Say')

export { Hello, Say }