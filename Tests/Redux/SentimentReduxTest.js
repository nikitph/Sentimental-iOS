import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/SentimentRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.sentimentRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.sentimentSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.sentimentFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
