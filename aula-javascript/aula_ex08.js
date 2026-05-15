/*
const mapa = new Map();

mapa.set('nome','Herick');

mapa.set('idade', 35);


console.log(mapa.get('nome'));
console.log(mapa.has('idade'));

const objt = {id:1};
const weakmap = new WeakMap();
weakmap.set(objt, 'valor associado a chave');
console.log(weakmap.get(objt));

*/

const conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(3);
console.log(conjunto);

const weakSet = new WeakSet();

const obj1 = {id:1};
const obj2 = {id:2};

weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet.has(obj1));
console.log(weakSet.has(obj2));