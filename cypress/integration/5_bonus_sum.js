import { sumAll, addFirstArgumentToRestThenSumTheRest } from '../../my_simple_library/sum_all'

describe('Unit Test Application Code', function(){
    context('sum_all.js', function() {
        it('sum of 3 arguments', function () {
            expect(sumAll(1,2,3)).to.equal(6)
        })

        it('sum of 4 arguments', function () {
            expect(sumAll(2,2,3,5)).to.equal(12)
        })

        it('summing 1 to a list of 2,2 should equal 6', function() {
            expect(addFirstArgumentToRestThenSumTheRest(1,2,2)).to.equal(6)
        })
    })
})