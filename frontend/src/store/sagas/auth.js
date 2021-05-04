import { call, put } from 'redux-saga/effects'
import api from "../../services/api";
import { push } from 'connected-react-router'

import {openNotificationWithIconError} from '../../Components/Toast'

import AuthActions from '../ducks/auth'

export function* signIn({ email, password }) {
    try {
      const response = yield call(api.post, '/sessions', {email, password})

        localStorage.setItem('@codeDojo:token', response.data.token)

        yield put(AuthActions.signInSuccess(response.data.token))

        yield put(push('/'))

    } catch (e) {
        openNotificationWithIconError('error')
    }
}

export function* signOut(){
    localStorage.removeItem("@Omni:token")

    yield put(push('/signin'))
}
