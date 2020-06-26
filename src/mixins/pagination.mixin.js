export default {
  data() {
    return {
      page: 1,
      pageSize: 5,
      pageCount: 0,
      allItems: [],
      items: [],
    };
  },
  methods: {
    setupPagination(allItems) {
      this.allItems = this.chunk(allItems, this.pageSize - 1);
      this.pageCount = this.allItems.length;
      this.items = this.allItems[this.page - 1] || this.allItems[0];
    },
    listChangeHandler(page) {
      this.items = this.allItems[page - 1] || this.allItems[0];
    },
    chunk(arr, size) {
      return arr.reduce(
        (subArr, currentItem) => {
          let len = subArr.length - 1;
          if (subArr[len].length === size) subArr.push([]);
          subArr[len].push(currentItem);
          return subArr;
        },
        [[]]
      );
    },
  },
};
