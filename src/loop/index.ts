export class Loop {
  public showDifferent = () => {
    setImmediate(() => {
      console.log('setImmediate <-');
    })

    setTimeout(() => {
      console.log('set timeout with 0 <-');
    }, 0);

    process.nextTick(() => {
      console.log('next tick <-');
    })
  }
};


//
// без i/o
// setImmediate(() => {
//   console.log('1');
// })
//
// setTimeout(() => {
//   console.log('2');
// }, 0);
//
// process.nextTick(() => {
//   console.log('3');
// })