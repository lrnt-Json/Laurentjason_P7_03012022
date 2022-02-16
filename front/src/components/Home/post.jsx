
import * as React from 'react';

const axios = require('axios').default;

function post(){

          axios({
                    method: 'get',
                    url: 'http://localhost:4000/api/post'
          })
}


export default post;