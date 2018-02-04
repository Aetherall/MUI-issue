// THIS IS HOT RELOADED

import express from 'express';
import handleRender from './handleRender'

const app = express()

app.get('/', handleRender)

// The exported member of this file is used as a middleware in the /dev/index.js file
export default (compilerOptions) => app