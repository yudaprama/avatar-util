export const colors = [
  '#2ecc71', // emerald
  '#3498db', // peter river
  '#8e44ad', // wisteria
  '#e67e22', // carrot
  '#e74c3c', // alizarin
  '#1abc9c', // turquoise
  '#2c3e50', // midnight blue
];

export const initials = (name: string) => {
  let initial = name.match(/\b\w/g) || [];
  initial = ((initial.shift() || '') + (initial.pop() || '')).toUpperCase();
  return initial
}

function sumChars(value: string) {
  let sum = 0;
  for (let i = 0; i < value.length; i++) {
    sum += value.charCodeAt(i);
  }

  return sum;
}

export const pickColorFromName = (name: string) => {
	let i = sumChars(name) % colors.length;
	return colors[i];
}