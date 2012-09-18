describe('View :: vCardView', function() {
 
  beforeEach(function() {
    var flag=false
        ,that = this
        ,viewElSelector='#testElemId';

    require(['../src/views/VCardView'], function(VCardView) {
      jasmine.getFixtures().fixturesPath = 'test/spec/fixtures';
      loadFixtures('myfixture.html');      
      that.vCardView = new VCardView({
        el: $(viewElSelector)
      });
      that.viewElSelector = viewElSelector;
      flag = true;
    });

    //We wait until the async loading is completed
    //https://github.com/pivotal/jasmine/wiki/Asynchronous-specs
    waitsFor(function() {
      return flag; 
    });    
  });
 
  afterEach(function() {

  });
 
  it('should be correctly initialized', function() {
    expect(this.vCardView).toBeDefined();
    expect(this.vCardView.$el.selector).toEqual('#testElemId');
  });

  it('should correctly render its content', function() {
    this.vCardView.render();
    expect(this.vCardView.$el).toExist();
    expect(this.vCardView.$el.html()).toBe('test');
  });  
});