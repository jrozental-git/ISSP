// Updated script
// Sample content: Adjust the following string replacements as necessary
let sampleContent = "MODULO 1 - Introduction to Programming\nMODULO 2 - Data Structures\nMODULO 3 - Algorithms";
let updatedContent = sampleContent.replace(/MODULO (\d+) - /g, 'MODULO $1 - ');
console.log(updatedContent);