/**
 * returns a random integer from 0 up to and including max
 */

export function getRandomNumber(max: number): number {
  return Math.floor(Math.random() * (max + 1));
}
