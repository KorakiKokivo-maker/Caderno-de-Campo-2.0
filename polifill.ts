if (!Array.prototype.toSorted) {
  Object.defineProperty(Array.prototype, 'toSorted', {
    value: function(compareFn) {
      return [...this].sort(compareFn);
    },
    writable: true,
    configurable: true,
  });
}
