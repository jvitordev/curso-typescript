function somarRenda(...meses: number[]): number {

    return meses.reduce((rendaTotal: number, rendaAtual: number) => rendaTotal + rendaAtual, 0);

}

console.log(somarRenda(250, 780, 695, 2000, 6500));

console.log("================================");

function myFun(a: string, b: string, ...manyMoreArgs: string[]): void {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  console.log(myFun("one", "two", "three", "four", "five", "six"));