import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/modules/App';
import Header from '../src/modules/Header';

describe('App', () => {

    it("contains spec with an expectation", function() {
        expect(shallow(<App />).contains(<Header/>)).toEqual(true);
    });

});
