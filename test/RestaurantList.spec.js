import React from 'react';
import { shallow } from 'enzyme';
import RestaurantList from '../src/modules/RestaurantList';

describe('RestaurantList', () => {

    it("should contain ol", function() {
        const wrapper = shallow(<RestaurantList />);
        const ol = wrapper.find('ol');

        expect(ol.length).toBe(1);
    });

});
