var chai = require('chai')
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var SubViewHandler = require('../subViewHandler');
var expect = chai.expect;

chai.use(sinonChai);

module.exports = {
    'subViewHandler': {
        'can add and destroy views': function() {
            var view = {
                destroy: sinon.spy()
            };

            var subViewHandler = new SubViewHandler();

            subViewHandler.addSubView(view);

            subViewHandler.destroySubViews();

            expect(view.destroy.calledOnce).to.be.true;
        },

        'will only add the same view once': function() {
            var view = {
                destroy: sinon.spy()
            };

            var subViewHandler = new SubViewHandler();

            subViewHandler.addSubView(view);
            subViewHandler.addSubView(view);
            subViewHandler.addSubView(view);

            subViewHandler.destroySubViews();

            expect(view.destroy.calledOnce).to.be.true;
        },

        'throws an exception when adding "undefined"': function() {
            var subViewHandler = new SubViewHandler();

            var add = function() {
                subViewHandler.addSubView(undefined);
            };

            expect(add).to.throw();
        }
    }
};

