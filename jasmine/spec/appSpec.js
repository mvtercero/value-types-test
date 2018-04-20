    //Describe anidado
    
    describe("Javascript Allonge", function() { 
        describe("values and expressions", function() {
            it("simple example operator +", function() {
                expect("Maria" + " " + "Vedia").toEqual("Maria Vedia");
            });
        });

        describe("values and identity", function(){
            var array1= [1,2];
            var array2= [1,2];
            
            it("compares arrayes", function() {
                expect([2-1, 2, 2+1] === [1,2,3]).toEqual(false);
                expect("Estela").toEqual('Estela');
                expect(array1 === array2).toEqual(false);
                expect([1,2]).toEqual([1,2]);
            });

        });

    });