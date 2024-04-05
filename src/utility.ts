export const arraysAreEqual = (arr1: number[], arr2: number[]): boolean => {
  // If arrays have different lengths, they cannot be equal
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over each element and check for equality
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any element differs, arrays are not equal
    }
  }

  return true; // All elements are equal, arrays are equal
}

export const extractDifferences = (arr1: number[], arr2: number[]): number[] => {
  const differences: number[] = [];

  // Iterate over the first array
  for (const num1 of arr1) {
    // If the element is not present in the second array, add it to the differences array
    if (!arr2.includes(num1)) {
      differences.push(num1);
    }
  }

  // Iterate over the second array
  for (const num2 of arr2) {
    // If the element is not present in the first array, add it to the differences array
    if (!arr1.includes(num2)) {
      differences.push(num2);
    }
  }

  return differences;
}