import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";


describe("_saveQuestion", () => {
  it("will return the question if valid", async () => {
    const author = "sarahedo";
    const optionOneText = "Test 1 y";
    const optionTwoText = "Test 1 t";
    var result = await _saveQuestion({ author, optionOneText, optionTwoText });

    expect(result.author).toEqual(author);
    expect(result.optionOne.text).toEqual(optionOneText);
    expect(result.optionTwo.text).toEqual(optionTwoText);
  });

  it("will return error if input isn't valid", async () => {
    
    const optionOneText = "Test 1 y";
    const optionTwoText = "Test 1 t";
    jest.setTimeout(10 * 1000);
    await expect(_saveQuestion({optionOneText,optionTwoText})).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    
    
  });
});




describe("_saveQuestionAnswer", () => {
  it("will return true if an answer is added", async () => {
    const authedUser = "sarahedo";
    const qid = "vthrdm985a262al8qx3do";
    const answer = "optionOne";
    var result = await _saveQuestionAnswer({ authedUser, qid, answer });

    expect(result).toEqual(true);
   
  });
  it("will return an error if the answer isn't added", async () => {
    
    const qid = "vthrdm985a262al8qx3do";
    const answer = "optionThree";
    
    await expect(_saveQuestionAnswer({qid,answer})).rejects.toEqual("Please provide authedUser, qid, and answer");
    
   
  });
});


