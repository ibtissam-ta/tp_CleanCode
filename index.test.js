import { describe, it, expect } from "vitest";
import { scoreRoll } from "./index.js";

describe("scoreRoll", () => {
  it("28 pour un Brelan dont les 3 dés ont la même valeur ", () => {
    expect(scoreRoll([5, 5, 5, 2, 6])).toBe(28);
  });

  it("35 pour un Carré dont les 4 dés ont la même valeur", () => {
    expect(scoreRoll([4, 4, 4, 4, 2])).toBe(35);
  });

  it("50 pour un YAMS dont la valeurs des 5 dés sont les memes)", () => {
    expect(scoreRoll([6, 6, 6, 6, 6])).toBe(50);
  });

  it("30 pour un Full dont 1 brelan et 1 paire ", () => {
  expect(scoreRoll([2, 2, 3, 3, 3])).toBe(30);
});

  it("40 pour une Grande suite dont les 5 dés qui se suivent)", () => {
  expect(scoreRoll([1, 2, 3, 4, 5])).toBe(40);
  expect(scoreRoll([3, 4, 5, 6, 2])).toBe(40); 
});

it("Chance: somme des dés si pas de figure ", () => {
  expect(scoreRoll([1, 2, 3, 4, 5])).toBe(16);
  expect(scoreRoll([2, 2, 3, 4, 5])).toBe(16);
});



});
