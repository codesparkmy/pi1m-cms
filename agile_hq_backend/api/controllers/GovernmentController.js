const { resolve } = require("path");
const { exit } = require("process");
const url = require("url")
var getApiResponse = require('../services/request')
var utility = require('../services/utility');
var customFile = sails.config.custom;


module.exports = {


    /**  ** 
     * Select staff Details
     */

    async getSelectApiQuery(req, res) {
        try {
            _BASE_URL = customFile.govBaseUrl;

            if (req.params.type == 'courseDetails') {
                _PREFIX_API = customFile.trainingCourseDetail.select;
            } else if (req.params.type == 'staffDeails') {
                _PREFIX_API = customFile.staffDeails.select;
            } else if (req.params.type == 'memberDetails') {
                _PREFIX_API = customFile.memberDetails.select;
            } else if (req.params.type == 'nms') {
                _PREFIX_API = customFile.nms.select;
            } else if (req.params.type == 'cmsRevenue') {
                _PREFIX_API = customFile.cmsRevenue.select;
            } else if (req.params.type == 'staffAttendanceDetails') {
                _PREFIX_API = customFile.staffAttendanceDetails.select;
            } else if (req.params.type == 'trainingCourseAttendanceDetail') {
                _PREFIX_API = customFile.trainingCourseAttendanceDetail.select;
            }

            getApiResponse.callRequestApi(customFile.generateTokenUrl, function(response) {
                _encodedString = utility.stringtoEncode(`${_PREFIX_API}'${response.Guid}'`);
                _final_response = getApiResponse.callRequestApi(_BASE_URL + '?' + _encodedString, function(response) {
                    return res.send(response);
                });
            });

        } catch (error) {
            return res.send(error);
        }
    },

    async trainingCourseApi(req, res) {
        try {
            getApiResponse.callRequestApi(customFile.generateTokenUrl, function(response) {
                _encodedString = utility.encodeToDecode(`${customFile.trainingCourseDetail.select}'${response.Guid}'`);
                return res.send(customFile.govBaseUrl + '?' + _encodedString);
            });

        } catch (error) {
            return res.send(error)
        }

    },

    async selectApiDetails(req, res) {
        try {
            if (req.param.type = 'courseDetails') {
                _PREFIX_API = customFile.trainingCourseDetail.select;
                _BASE_URL = customFile.govBaseUrl;
            }
            if (req.param.type = 'staffDeails') {
                _PREFIX_API = customFile.staffDeails.select;
                _BASE_URL = customFile.govBaseUrl;
            }

            getApiResponse.callRequestApi(customFile.generateTokenUrl, function(response) {
                _encodedString = utility.encodeToDecode(`${_PREFIX_API}'${response.Guid}'`);
                return res.send(_BASE_URL + '?' + _encodedString);
            });
        } catch (error) {
            return res.send(error);
        }

    },

    async upsertStaffDetails(req, res) {

        // getApiResponse.callRequestApi(customFile.generateTokenUrl, function(response) {
        //     _encodedString = utility.encodeToDecode(`${customFile.trainingCourseDetail.select}'${response.Guid}'`);
        //     return res.send(customFile.govBaseUrl + '?' + _encodedString);
        // });
        var urls = 'http://localhost:2284/gender';
        // var urls = 'customFile.generateTokenUrl';

        var bodyDetails = {
            "name": "tts",
            "location": "1"
        }
        var header = "";
        getApiResponse.callRequestPostApi(urls, bodyDetails, function(response) {
            console.log('response', response);
            return response;
            // _encodedString = utility.encodeToDecode(`${customFile.trainingCourseDetail.select}'${response.Guid}'`);
            // return res.send(customFile.govBaseUrl + '?' + _encodedString);
        });
    },









    async updatetrainingCourseApi(req, res) {
        var currentUrl = url.parse(req.originalUrl, true)
        var originalString = 'https://cims-api.skmm.gov.my/data/';
        var encodedString = utility.encodeToDecode(`upsert/mcmccims/usp_im.v_pi1m_cms_tc_detail:pi1m_refid,service_provider,training_id,course_status,course_category,course_detail,training_start_datetime,training_end_datetime,training_minutes,collaboration_type,collaboration_name;pi1m_refid,service_provider,training_id?$token='${currentUrl.query.token}'`);
        return res.send(originalString + '?' + encodedString)
    },


    async trainingAttendanceRecord(req, res) {
        var currentUrl = url.parse(req.originalUrl, true)
        var originalString = 'https://cims-api.skmm.gov.my/data/';
        var encodedString = utility.encodeToDecode(`insert/mcmccims/usp_im.v_pi1m_cms_ta_detail:pi1m_refid,service_provider,training_id,attendee_ic?$token='${currentUrl.query.token}'`);
        var urlLink = originalString + '?' + encodedString;

        return res.send(urlLink);
    },

    async stringtoEncode(req, res) {
        var values = url.parse(req.originalUrl, true).query.strings;
        let decodedString = utility.stringtoEncode(values);
        res.send(decodedString)

    },

    async encodetoDecode(req, res) {
        var values = url.parse(req.originalUrl, true).query.strings;
        let encodedString = utility.encodetoDecode(values);
        res.send(encodedString)

    },



};