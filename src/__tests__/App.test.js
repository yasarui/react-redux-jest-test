import React from 'react';
import App from 'App';
import { shallow,configure } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentsList from 'components/CommentsList';
//import Adapter from 'enzyme-adapter-react-16';

//configure({adapter: new Adapter()});
let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App />);
})

describe("<App />",()=>{
   it("shows a comment box",()=>{
        expect(wrapped.find(CommentBox).length).toEqual(1);
   })
   it("Shows a comment list",()=>{
       expect(wrapped.find(CommentsList).length).toEqual(1);
   })
})

