export class PaginationHelper {
    collection: any[]
    itemsPerPage: number

    constructor(collection: any[], itemsPerPage: number) {
        this.collection = collection
        this.itemsPerPage = itemsPerPage
    }

    itemCount() {
        return this.collection.length
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage)
    }

    pageItemCount(pageIndex: number) {
        const pageCount = this.pageCount()

        if (pageIndex < 0 || pageIndex >= pageCount) return -1

        if (this.itemsPerPage > this.collection.length)
            return this.collection.length

        return pageIndex + 1 === pageCount
            ? this.collection.length - pageIndex * this.itemsPerPage
            : this.itemsPerPage
    }

    pageIndex(itemIndex: number) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) return -1

        return Math.floor(itemIndex / this.itemsPerPage)
    }
}
