// Convert to camelCase
function toCamel(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

// Check empty object
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

