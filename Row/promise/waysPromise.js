const promisify = (item, delay) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 1000);
const b = () => promisify("b", 2000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [op1, op2, op3] = await Promise.all(promises);
  return `Parallel : ${op1} , ${op2} , ${op3}`;
}

  // Both resolves. Who is faster?
 async function race(){
    const promises=[a(),b(),c()];
    const op=await Promise.race(promises);
    return `Race : ${op}`;
 }

 async function sequence(){
    const op1=await a();
    const op2=await b();
    const op3=await c();

    return `Sequence will be : ${op1} , ${op2} ,${op3} `
 }
//parallel().then(console.log);

//race().then(console.log)

sequence().then(console.log)