import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.setupRouter();
  });
  
  test('Rental testing', async function(assert) {
    
    this.setProperties({
      rental: {
        title: 'Grand Old Mansion',
        id: 'grand-old-mansion',
        owner: 'Veruca Salt',
        city: 'San Francisco',
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: 'Estate',
        type: 'Standalone',
        bedrooms: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
        description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.',
      }
    });
    assert.dom('article .image').exists();
    assert.dom('article').hasClass('rental')
    assert.dom('article h3 a').hasAttribute('href', '/rentals/grand-old-mansion');
    assert.dom('article .details h3').includesText('Grand Old Mansion');
    assert.dom('article .detail.owner').includesText('Owner:');
    assert.dom('article .detail.type').includesText('Type:');
    assert.dom('article .detail.location').includesText('Location:');
    assert.dom('article .detail.bedrooms').includesText('Number of Bedrooms:');
    assert.dom('article .map').exists();
    
  });
});
