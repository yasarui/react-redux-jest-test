import { commentsReducer } from 'reducers';

it("handles action of type ADD_COMMENT",()=>{
    const action = {
        type:"ADD_COMMENT",
        payload:"New Comment"
    }
    const newState = commentsReducer([],action);
    expect(newState).toEqual(["New Comment"]);
})

it("handles action of unkown type",()=>{
   const action = {
       type:"UNKNOW_ACTION",
       payload:"Random Comment"
   }
   const newState = commentsReducer([],action);
   expect(newState).toEqual([]);
})