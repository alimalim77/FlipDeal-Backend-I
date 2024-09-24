## Project

**FlipDeal ECommerce App**

Link: https://stackblitz-starters-ji8rtu.vercel.app/

## About the Project

FlipDeal is content with the APIs that you have built. What are the various actions a user has to take?

Add all the 3 Products to the Cart.

Once the products are added, check for the membership status.

If the membership status is “Standard”: No Discount is Added. If the membership status is “Prime”: 10% discount is added to the total cart amount.
Once done, select the location where you want your package to be delivered. We have 4 cities:

- Mumbai
- Delhi
- Chennai
- Kolkata

Based on the distance for the selected city, it calculates the “Shipping Cost”.

Now, select the type of “Shipping Method”. If the Shipping method is “Standard”, it calculates the time in which the package will be delivered in which is 1 day per 50 kms. If the Shipping method is “Express”, it calculates the time in which the package will be delivered which is 1 day per 100 kms

The Estimated Delivery time is visible.

Based on all the factors, the total payable amount is calculated.

- Total Cart Amount
- Membership Discount (if any)
- Shipping Cost (Based on the Location)
- Estimated Delivery Time (in days)
- Tax Rate
- Loyalty Points

## API Endpoints

Calculate Cart Total: When a user adds a new item to the cart, the frontend makes a GET request to /cart-total with the price of the new item and the current cart total to update the total price.

Apply Membership Discount: If the user is a member, the frontend makes a GET request to /membership-discount to apply any applicable discounts to the cart total.

CalculateTax: For the total cart amount, the frontend makes a GET request to /calculate-tax to apply 5% tax rate on the total cart amount.

Estimate Delivery Time: The user can see the estimated delivery time by making a GET request to /estimate-delivery with the chosen shipping method and delivery distance.

Calculate Shipping Cost: The shipping cost based on the weight of the items and the delivery distance is calculated by making a GET request to /shipping-cost.

Calculate Loyalty Points: To calculate the loyalty points, front end is making a GET request to /loyalty-points to add 2 points per $1.

## How to integrate the Backend APIs with FlipDeal’s Frontend UI?

1. Copy the Vercel URL.
2. Once done, go to this link: https://bd1-1.vercel.app/
3. Paste your Vercel URL to the Server URL text box.
4. Once you click “Save Changes”, it will show the Cart Page section with 3 items.
5. Add all the 3 items by clicking “Add to Cart” 
Note: To enable the “Select Membership” button, you need to add all the 3 items. If you have already added 1 item, you can’t add the same item again.
6. When you take any user action, you can see the response of your APIs on the bottom right of the screen also known as the “Logger”.
