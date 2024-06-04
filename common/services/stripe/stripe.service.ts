import { Stripe } from 'stripe';

export const stripe = new Stripe(
  'sk_test_51IcuFiCSxYE2vN3err26Kor4IPtWZtgMbW96SVO197CFeljKMO9dniYqQuR6PZmwC02aJRtOijdUXbGsaNtHcjLB00oB7E0yqx',
  { apiVersion: '2023-08-16' }
);

// stripe.charges.list({});
