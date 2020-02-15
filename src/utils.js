export function asMatrix(values, columns) {
  var result = []
  for (var i = 0; i < values.length; i = i + columns) {
    result.push(values.slice(i, i + columns))
  }
  return result;
}

export default { asMatrix }