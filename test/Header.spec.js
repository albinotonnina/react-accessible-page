import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/modules/Header';
import NavComponent from '../src/modules/Nav';

describe('Header', () => {

    it("should contain nav", function() {
        const wrapper = shallow(<Header />);
        const navComponent = wrapper.find(NavComponent);

        expect(navComponent.length).toBe(1);
    });

});
