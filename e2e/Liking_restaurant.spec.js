Feature('Liking restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
 
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeEmptyRestaurant();
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeEmptyRestaurant();

  await I.likeRestaurant();
 
});
