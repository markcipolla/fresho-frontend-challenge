# Cost price tool for suppliers
At Fresho we support our suppliers who buy produce from the wholesale markets and sell that produce to restaurants and cafes.  Before they can sell a product they need to establish what price they will sell it for.  This is often based on the price that they bought the product for.  So for example.  They might have bought 10kg of Fuji apples for $0.99/kg.  They then want to sell the same product for $1.16 or with a 15% margin.

We want you to create a simple online tool that helps them set the price for a given product and shows them the margin they’ll get.  The tool has the following requirements:

* A user can see a list of the products with the associated cost price, sell price and margin.  (see table below)
* A user sees prices in dollars ($) and margins in percentages (%)
* A user can either adjust the $ value or they can specify a margin.  Margin = (sell price - cost price) / sell price.
* The sell price value or margin is updated automatically depending on which value was set.
* It should be clear to the user which method was used to set the sell price, either the $ value or the margin.
* The system should remember which method was used to set the price, either $ value or margin.
* If the user refreshes the page then the calculator should remember the last set of prices.

* We’ve provided a table below to help understand the basics of the tool.  We’ve also provided a data file which can be found [here](https://fresho-coding-challenge.s3.ap-southeast-2.amazonaws.com/products.json).  In this file you’ll find a list of products with the name, code, cost price, sell price and margin and the method used.  The “method” property can be either “value” or “margin”.  This tells the user which method they used to determine the price.

| Product | Cost ($) | Sell price $ | Sell price % |
| ---| --- | ---- | ---- | 
| Fuji apples | $0.99 | $1.16 | 15% |
| Cavendish bananas| $0.55 | $0.70 | 21% |
| Navel oranges | $0.75 | $0.80 | 12% |

Some further instructions:
* You can use any tool or framework that you feel is appropriate to build the tool.
* We’d like you to build this with a tablet first mindset.
* We'd like to see how your solution evolved from start to finish.
* We’d like you to submit your solution via GitHub (a private fork of the project will suffice).

