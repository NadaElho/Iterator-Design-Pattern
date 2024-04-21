function range(min: number, max: number, step: number) {
  let start = min;
  return {
    next() {
      if (start <= max) {
        let result = start;
        start += step;
        return { value: result, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

let fun = range(1, 30, 5);
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());


console.log("===============");

function* generator(min: number, max: number, step: number){
  for(let i = min; i<= max; i+=step){
    yield i
  }
}

let gen = generator(1,30,5)
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());