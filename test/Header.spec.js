import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/modules/Header';

describe('Header', () => {

    it("should contain nav", function() {
        const wrapper = shallow(<Header />);
        const nav = wrapper.find('nav');

        expect(nav.length).toBe(1);
        expect(nav.text()).toEqual('this is a nav');
    });

});
