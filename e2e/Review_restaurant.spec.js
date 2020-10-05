Feature('Review restaurant');

Scenario('should show "nama dan review harus diisi!" when the name and review values are empty', async ({ I }) => {
  await I.clickTheFirstRestaurant();

  I.fillAndSubmitTheReview({ name: '', review: '' });

  I.see('nama dan review harus diisi!', '.review-message');
});

Scenario('should show "nama harus diisi!" when the name value is empty', async ({ I }) => {
  await I.clickTheFirstRestaurant();

  I.fillAndSubmitTheReview({ name: '', review: 'Test123' });

  I.see('nama harus diisi!', '.review-message');
});

Scenario('should show "review harus diisi!" when the review value is empty', async ({ I }) => {
  await I.clickTheFirstRestaurant();

  I.fillAndSubmitTheReview({ name: 'Test', review: '' });

  I.see('review harus diisi!', '.review-message');
});

Scenario('Review a restaurant', ({ I }) => {
  I.clickTheFirstRestaurant();

  I.fillAndSubmitTheReview({name: 'Test', review: 'Test123'});

  I.see('Test', '.consumer-reviews__name');
  I.see('Test 123', '.consumer-reviews__review');
});
