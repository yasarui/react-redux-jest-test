import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import moxios from 'moxios';
import App from 'App';

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments/1',{
        status: 200,
        response: {
            data:{
                body:"Yasar Arafat"
            }
        }
    });
});

afterEach(()=>{
    moxios.uninstall();
})

it("Can fetch a list of comments and display them",(done)=>{
    const wrapped = mount(<Root><App/></Root>);
    wrapped.find('.fetch-comment').simulate('click');
    moxios.wait(()=>{
        wrapped.update(); // Application update
        expect(wrapped.find('li').length).toEqual(1);
        done();
        wrapped.unmount();
    })
})