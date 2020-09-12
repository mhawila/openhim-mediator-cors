'use strict'

import unirest from 'unirest'
import { NHIF_API_BASE_URL } from './config/config'


exports = module.exports = {
    makeApiCall: (req, res, next) => {
        let url = NHIF_API_BASE_URL + req.originalUrl;

        // Return a promise
        let apiClient = unirest(req.method, url)
        if(req.path.startsWith('/nhifservice/Token')) {
            apiClient.header('Content-Type', 'application/x-www-form-urlencoded')
        }
        // console.log('makeApiCall: req.body: ', req.body)
        return apiClient.send(req.body);
    }
}