import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../index';

describe('Search Unit tests', () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<Search />)));
  afterEach(() => wrapper.unmount());

  test('should ', () => {
    const input = wrapper.find('input').length;
    const button = wrapper.find('button').length;

    expect(input).toBe(1);
    expect(button).toBe(1);
  });

  test('should should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe('text area updates', () => {
    beforeEach(() => {
      wrapper.find('input').simulate('change', {
        target: {
          value: 'new comment',
        },
      });
      wrapper.update();
    });

    test('updates on change and handles submit', () => {
      const actual = wrapper.find('input').prop('value');
      const expected = 'new comment';

      expect(actual).toEqual(expected);
    });

    test('when form is submitted text is cleared', () => {
      wrapper.find('form').simulate('submit', {
        preventDefault: jest.fn(),
        target: {
          reset: jest.fn(),
        },
      });

      wrapper.update();
      const actual = wrapper.find('input').prop('value');
      const expected = '';
      expect(actual).toEqual(expected);
    });
  });
});
