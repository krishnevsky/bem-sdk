var naming = require('../../lib/bem-naming')({ elem: '__', mod: '--' });

describe('harry roberts', function () {
    describe('validate', function () {
        it('should validate block', function () {
            naming.validate('block').should.be.true;
        });

        it('should validate mod of block', function () {
            naming.validate('block--mod--val').should.be.true;
        });

        it('should validate boolean mod of block', function () {
            naming.validate('block--mod').should.be.true;
        });

        it('should validate elem', function () {
            naming.validate('block__elem').should.be.true;
        });

        it('should validate mod of elem', function () {
            naming.validate('block__elem--mod--value').should.be.true;
        });

        it('should validate boolean mod of elem', function () {
            naming.validate('block__elem--mod').should.be.true;
        });

        it('should not validate elem without block', function () {
            naming.validate('__elem').should.be.false;
        });

        it('should not validate boolean mod without block', function () {
            naming.validate('--mod').should.be.false;
        });

        it('should not validate mod without block', function () {
            naming.validate('--mod--val').should.be.false;
        });

        it('should not validate mod of elem without block', function () {
            naming.validate('__elem--mod--val').should.be.false;
        });

        it('should not validate boolean mod of elem without block', function () {
            naming.validate('__elem--mod').should.be.false;
        });

        it('should not validate nested elem', function () {
            naming.validate('block__elem1__elem2').should.be.false;
        });

        it('should not validate multi mod', function () {
            naming.validate('block--mod--val__elem--mod--val').should.be.false;
        });

        it('should not validate block name with illegal literals', function () {
            naming.validate('block_elem').should.be.false;
        });

        it('should support CamelCase', function () {
            naming.validate('BlockName').should.be.true;
        });
    });
});
