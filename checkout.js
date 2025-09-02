const stripe = Stripe("pk_test_51S2YySJtu0B3IHCZaokdVaHLKqwRletvuUMRYZnZXiBkG4pXpJm9LLxuu4Oy1NduVg0m7TU4IEdhAMbx01dcqh5G002rOxC2RD"); // get from Stripe Dashboard

document.getElementById("checkout-button").addEventListener("click", async () => {
  // Call your backend function
  const response = await fetch("/api/checkout", { method: "POST" });
  const session = await response.json();

  // Redirect to Stripe Checkout
  const result = await stripe.redirectToCheckout({ sessionId: session.id });

  if (result.error) {
    alert(result.error.message);
  }
});
