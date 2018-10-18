const a = -10;
const b = 10;
const length = 30000;
const vectors = new Array(length)
             .fill(0)
             .map(el => {
               return {
                 x: Math.ceil(((b + 1) - (a - 1))*Math.random() + (a - 1)),
                 y: Math.ceil(((b + 1) - (a - 1))*Math.random() + (a - 1)),
                 z: Math.ceil(((b + 1) - (a - 1))*Math.random() + (a - 1))
               }
             })
             .filter(vector => {
               const vectorLength = Math.sqrt(vector.x**2 + vector.y**2 + vector.z**2);
               return (vector.y, vector.z >= 0 && (vector.x >= -1 && vector.x <= 1) && (vectorLength >= 0 && vectorLength <= 3)) ? vector : null;
             })
             .map(vector => {
              const vectorLength = Math.sqrt(vector.x**2 + vector.y**2 + vector.z**2);
               return {
                x: vector.x,
                y: vector.y,
                z: vector.z,
                vectorLength: vectorLength
               }
             })
             .sort((a, b) => a.vectorLength - b.vectorLength)
             .filter((vector, index, array) => index >= Math.floor(array.length / 2))
             .reduce((acc, el) => {
               return {
                 x: el.x + acc.x,
                 y: el.y + acc.y,
                 z: el.z + acc.z
               }
             }, {x: 0, y: 0, z: 0})
console.log(vectors);