import React from 'react';

/**
 * enzyme: allows us to work easier with tests in REACT
 * mount: allows me to mount the component and work over the whole DOM to check elements or items from the component
 */
import { mount } from 'enzyme';
import { create } from 'react-test-renderer'; // allows us to create snapshots

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render of the component', () => {
    // check that Footer is mounted in the DOM
    expect(footer.length).toEqual(1);
  });

  test('Renders title', () => {
    // check that the title exists by finding the element in the DOM via "className"
    // once we found the element we access to the "text" with ".text()"
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

/**
 * snapshots: are useful when you have a component that the styles (UI) shouldn't change.
 * To work with snapshots we need to convert to an object our component, in order to do that the library "react-test-renderer" is required
 */
describe('snapshot', () => {
  test('check the UI of the component', () => {
    const footer = create(<Footer />);

    // toJSON: creates an object of the component "footer"
    // toMatchSnapshot(): if the snapshot doesn't exist it creates it and when we run again the test it will compare it
    // once the snapshot is created it will store it under the following folder name "__snapshot__"
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
