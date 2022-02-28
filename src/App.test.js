import React from 'react';
import App from './App';
import PaginationComponent from './pagination';
import Modal from './Modal';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('App', () =>{
  it('should contain text', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('div h1');
    expect(text.text()).toBe('Welcome to the actors database!');
  })
});

describe('rendering components', () =>{
  it('renders App component without crashing', ()=> {
    shallow(<App />);
  });
});

