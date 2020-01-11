const deleteNth = (arr,n) => arr.filter((newElement, index) => arr.slice(0, index+1).filter(includedElement => includedElement === newElement).length <= n ? true : false)

module.exports = deleteNth