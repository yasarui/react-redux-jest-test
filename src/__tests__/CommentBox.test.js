import React from 'react';
import CommentBox from 'components/CommentBox';
import {
    mount,
    configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Root from 'Root';


let wrapped;

beforeEach(() => {
    wrapped = mount(<Root> < CommentBox /> </Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it('Has a Text area and a Button', () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
})

describe('The Text area', function () {

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change', {
            target: {
                value: 'new Comment'
            }
        })
        wrapped.update();
    })

    it('has a text area thar users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new Comment')
    })

    it('Textarea should be clear on formsubmit', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new Comment')
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual("");
    })
})