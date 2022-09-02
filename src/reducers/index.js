import { combineReducers } from 'redux'

import videos from './videos'
import modal from './modal'
import login from './login'
import signup from './signup'
import loading from './loading'

export default combineReducers({ videos, modal, login, signup, loading })