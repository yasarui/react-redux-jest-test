import { addComment } from 'actions';

// it("Should return an action of type ADD_COMMENT",()=>{
//     const action = addComment("Sample Comment");
//     const payloadExpected = {
//         type:"ADD_COMMENT",
//         payload:"Sample Comment"
//     }
//     expect(action).toEqual(payloadExpected);
// });

describe("addComment",()=>{
    
    it("has the correct type",()=>{
         const action = addComment();
         expect(action.type).toEqual("ADD_COMMENT");
    });

    it("has the correct payload",()=>{
         const action = addComment("Sample Comment");
         expect(action.payload).toEqual("Sample Comment");
    });

})