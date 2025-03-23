function processOrder(order: Order) {
    validateOrder(order);
    const quantity = order.quantity;
    if (!isValidQuantity(quantity)) {
      throw new Error('Invalid quantity');
    }
