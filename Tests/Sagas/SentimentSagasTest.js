/* ***********************************************************
* Wiring Instructions
* To make this test work, you'll need to:
*  - Add a Fixture named getSentiment to the
*    ./App/Services/FixtureApi file. You can just keep adding
*    functions to that file.
*************************************************************/

import test from 'ava'
import FixtureAPI from '../../App/Services/FixtureApi'
import { call, put } from 'redux-saga/effects'
import { getSentiment } from '../../App/Sagas/SentimentSagas'
import SentimentActions from '../../App/Redux/SentimentRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('first calls API', t => {
  const step = stepper(getSentiment(FixtureAPI, {data: 'taco'}))
  // first yield is the API
  t.deepEqual(step(), call(FixtureAPI.getSentiment, 'taco'))
})

test('success path', t => {
  const response = FixtureAPI.getSentiment('taco')
  const step = stepper(getSentiment(FixtureAPI, {data: 'taco'}))
  // Step 1: hit the api
  step()
  // Second step successful return and data!
  t.deepEqual(step(response), put(SentimentActions.sentimentSuccess(21)))
})

test('failure path', t => {
  const response = {ok: false}
  const step = stepper(getSentiment(FixtureAPI, {data: 'taco'}))
  // Step 1: hit the api
  step()
  // Second step failed response
  t.deepEqual(step(response), put(SentimentActions.sentimentFailure()))
})
