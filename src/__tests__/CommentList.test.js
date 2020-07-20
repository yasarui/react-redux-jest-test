import React from 'react';
import CommentList from 'components/CommentsList';
import { mount } from 'enzyme';
import Root from 'Root';
import { isTaggedTemplateExpression } from '@babel/types';

let wrapped;

beforeEach(()=>{
    const initialState = {
        comments: ['Comment 1',"Comment 2","Comment 3"]
    }
    wrapped = mount(<Root initialState={initialState}> <CommentList /> </Root>);
})


it("creates one Li per comment",()=>{
   expect(wrapped.find('li').length).toEqual(3);
});

it("Shows the text for each comment",()=>{
     expect(wrapped.render().text()).toContain('Comment 1');
     expect(wrapped.render().text()).toContain('Comment 2');
     expect(wrapped.render().text()).toContain('Comment 3');
})