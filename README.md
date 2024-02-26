# Cost price tool for suppliers
At Fresho we support our suppliers who buy and sell fresh produce.  They will buy produce from the wholesale markets and sell that produce to restaurants and cafes.  They sell their products using our marketplace.  Before they can sell a product they need to establish what price they will sell it for.  This is often based on the price that they bought the product for.  So for example.  They might have bought 10kg of Fuji apples for $0.99/kg.  They then want to sell the same product for $1.14 or for 15% more (the margin) of what they purchased it for. 

We want you to create a simple online tool that helps them set the price for a given product and shows them the margin they’ll get.  The tool has the following requirements:

* A user can see a list of the products with the associated cost price, sell price and margin.  (see table below)
* A user sees prices in dollars ($) and margins in percentages (%)
* A user can either adjust the sell price directly or they can specify a margin.
* The sell price or margin is updated automatically depending` on what was set.   In other words if a user changes the sell price the margin should be calculated and updated.  If the user changes the margin then the sell price should be calculated and updated.
* A user can specify the margin to be applied to all products in one go.  So, a user can set the margin for apples, bananas and oranges as 10%.  When this happens the margin should be applied to all products and the sell price calculated.
* It should be clear to the user which method was used, either the price or the margin.
* The system should remember which method was used to set the price, either directly or by using the margin.
* If the user refreshes the page then the calculator should remember the last set of prices.

* We’ve provided a table below to help understand the basics of the tool.  We’ve also provided a data file which can be found here https://ap-southeast-2.aws.com/??.  In this file you’ll find a list of products with the name, code, cost price, sell price and margin and the method used.  The “method” property can be either “price” or “margin”.  This tells the user which method they used to determine the price.

| Product | Cost ($) | Sell price $ | Sell price % |
| Fuji apples | $0.99 | $1.14 | 15% |
| Cavendish bananas| $0.55 | | |
| Navel oranges | $0.75 | |

You can use any tool or framework that you feel is appropriate to use to build the tool.
* We’d like you to build this with a tablet first mindset.
* We’d like you to submit your solution via GitHub.

