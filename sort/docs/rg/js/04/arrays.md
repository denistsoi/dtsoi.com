---
prev: /en/js/04/
next: /en/js/04/solution.md
---

## Challenge

### Instructions

You are a shop owner with an inventory of items.
You want to calculate the total amount of all your items.

the following represents your shop.

``` js
var items = [
  {
    name: 'Apple',
    qty:   6,
    value: 1
  },
  {
    name: 'Water',
    qty:   10,
    value:  2
  },
  {
    name: 'Newspaper',
    qty:   6,
    value: 4
  }
];

function calculateValue(items) {
  // some code
  return totalAmount;
}
```

> Note: 
in calculateCost function, remember to iterate over your items and for-each item, you need to calculate the total value for all numbers of items   
e.g. if you have `10 Tomatoes with value 3` - then the total value of (var Tomatoes = 3 * 10);

Then:
You get a shipment of new items in your shop

``` js
var newItems = [{
  name: 'Tomato',
  qty:   16,
  value: 0.5
}, {
  name: 'Egg',
  qty:   12,
  value: 1
}];

```
...add each newItem to your store items inventory and re-calculate the value of your store.

#### Reminder: 
> you need to iterate over your newItems to push/append an item to your store. then use calculateValue again to recalculate the value of your inventory.