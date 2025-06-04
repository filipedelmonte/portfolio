/**
 * immutable function returning a randomly sorted array
 */
export function shuffle<T>(elements: T[]): T[] {
  // -0.5 to distribute the elements evenly between positive and negative
  return elements.toSorted(() => 0.5 - Math.random());
}
