describe("App", function(){
    var app;

    beforeEach(function(){
       app =  getApplication();
       app.start();
    });
    
    it("check random number exists", function() {
        expect(app.getRandomIntInclusive(1,100)).toBeGreaterThanOrEqual(1);
        expect(app.getRandomIntInclusive(1,100)).toBeLessThanOrEqual(100);
    });

})