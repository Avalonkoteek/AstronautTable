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
    setupPagination(allItems) {},
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
