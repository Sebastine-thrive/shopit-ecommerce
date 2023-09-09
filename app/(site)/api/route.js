import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    console.log(request.body)
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1NkR5xC7u3yOZ0MJX0zUWW6H" }],
      line_items: request.body.map((item) => {
    
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${request.headers.origin}/success`,
      cancel_url: `${request.headers.origin}/?canceled=true`,
    };

    const session = await stripe.checkout.sessions.create(params);
    NextResponse.json(session);
    NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
