"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("@/index");
test('Deve somar dois números', () => {
    expect((0, index_1.somar)(1, 2)).toBe(3);
});
