/**
 * Custom sample validator function for dockerfile_lint
 * @param {*} value Value to run validation against
 */
function nameValidator(value) {
  const nameValue = 'Ultimum Design'
  if (value !== nameValue) return [{ message: `Value: ${value} !== ${nameValue}`, level: 'warn'}]
  return [null, true]
}

module.exports = {
  nameValidator
}