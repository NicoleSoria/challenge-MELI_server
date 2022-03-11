class ItemResponse {
  constructor(item, price, description) {
      this.id = item.id;
      this.title = item.title;
      this.free_shipping = item.shipping.free_shipping;
      this.picture = item.thumbnail;
      this.condition = item.condition;
      this.price = price;
      this.sold_quantity = item.sold_quantity
      this.description = description;
  }
}

module.exports = ItemResponse;