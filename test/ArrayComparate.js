const { assert } = require('chai');

const arrayComparate = require('../src/ArrayComparate');

suite('primer vuelo', () => {
    const arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]
    test('primer prueba', () => {
        assert.strictEqual(arrayComparate(arr1, arr2), false)
    })
    test('segunda prueba', () => {
        assert.strictEqual(arrayComparate(arr1, arr3), true)
    })
    test('segunda prueba', () => {
        assert.strictEqual(arrayComparate(arr1, arr4), false)
    })
})
//crear init comit con repo actual
//dividir la funcion mayor en subfunciones
//crear pruebas unitarias por cada una de las unciones
//correr las pruebas y refactorizar codigo hasta que pasen