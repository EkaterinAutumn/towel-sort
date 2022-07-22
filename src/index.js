module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
 return matrix.reduce((acc, item, index) => {
  if (index % 2 == 0) {
   return [...acc, ...item]
  } else {
    return [...acc, ...(item.reverse())]
  }
 }, [])
}
