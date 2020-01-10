const deleteNth = (arr,n) => arr.filter((element, index) => arr.slice(0, index+1).filter(el => el === element).length <= n ? true : false)

module.exports = deleteNth