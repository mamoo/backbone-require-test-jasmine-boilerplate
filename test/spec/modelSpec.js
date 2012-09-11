describe('Model :: vCard', function() {
 
  beforeEach(function() {
    var flag=false
          ,that = this;

    require(['../src/models/VCard'], function(VCard) {
      that.vCard = new VCard({
        id:'1'
      });
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
     expect(this.vCard).toBeDefined();
     expect(this.vCard.id).toEqual('1');
  });
 
});