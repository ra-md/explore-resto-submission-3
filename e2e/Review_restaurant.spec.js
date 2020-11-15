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

  const reviewTest = {
    name: 'Test',
    review: 'Test1 23',
  };

  I.fillAndSubmitTheReview(reviewTest);

  I.see(reviewTest.name, '.consumer-reviews__name');
  I.see(reviewTest.review, '.consumer-reviews__review');
});
