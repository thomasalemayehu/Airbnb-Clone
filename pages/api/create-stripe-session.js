const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  try {
    const { itemsInCart, email } = req.body;

    //   transform to stripe item
    const transformedItems = itemsInCart.map((item) => ({
      description: item.description,
      quantity: item.total,
      price_data: {
        unit_amount: item.price * 100 * 1.415,
        currency: "usd",
        product_data: {
          name: item.title,
        },
      },
    }));
    const redirectURL = process.env.HOST;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: transformedItems,
      mode: "payment",
      success_url: redirectURL + "/success",
      cancel_url: redirectURL + "/checkout",
      metadata: {
        email,
        images: JSON.stringify(itemsInCart.map((item) => item.image)),
        startDate: JSON.stringify(
          itemsInCart.map((item) => item.startDate.toString())[0]
        ),
        endDate: JSON.stringify(
          itemsInCart.map((item) => item.endDate.toString())[0]
        ),
        numberOfGuests: JSON.stringify(
          itemsInCart.map((item) => item.numberOfGuests)[0]
        ),
        title: JSON.stringify(itemsInCart.map((item) => item.title)[0]),
        description: JSON.stringify(
          itemsInCart.map((item) => item.description)[0]
        ),
        price: JSON.stringify(itemsInCart.map((item) => item.price)[0]),
      },
    });

    res.status(200).json({ id: session.id });
  } catch (err) {
    console.log(err);
    res.status(400).json({});
  }
}

export default CreateStripeSession;
