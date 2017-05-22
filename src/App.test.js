import React from 'react';
import { shallow } from 'enzyme';
import App, { Foo } from './App';

// the shallow smoke test from create-react-app docs
it('renders without crashing', () => {
  shallow(<App />);
});

it('no child components', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  const testme = <Foo />;

  // shallow rendering limits you to asserts against the component in question
  // only, not it's children
  expect(wrapper.contains(welcome)).toEqual(true);
  // you can assert that the component under test has a direct child
  expect(wrapper.contains(testme)).toEqual(true);
  // but you can't assert what's in that child
  expect(wrapper.find('h3').length).toEqual(0);
  // to do that you can .dive()
  expect(wrapper.find(Foo).dive().find('h3').length).toEqual(1);
});
