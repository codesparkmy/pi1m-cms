/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

    /***************************************************************************
     *                                                                          *
     * Any other custom config this Sails app should use during development.    *
     *                                                                          *
     ***************************************************************************/
    // mailgunDomain: 'transactional-mail.example.com',
    // mailgunSecret: 'key-testkeyb183848139913858e8abd9a3',
    // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
    // …


    /***************************************************************************
     *                                                                          *
     * API INTEGRATION  START  *
     *                                                                          */
    generateTokenUrl: 'https://cims-api.skmm.gov.my/HttpAuthentication/?bG9naW4vP3VzZXJbVXNlck5hbWVdPTkzMDYxNjA3NTA3OCZ1c2VyW1Bhc3N3b3JkXT1hZ2lsZTEyMw==',
    govBaseUrl: 'https://cims-api.skmm.gov.my/data/',

    /* TRAINING COURSE DETAILS */
    trainingCourseDetail: {
        'select': 'select/mcmccims/usp_im.v_pi1m_cms_tc_detail:*?$token=',
        'upsert': 'upsert/mcmccims/usp_im.v_pi1m_cms_tc_detail:pi1m_refid,service_provider,training_id,course_status,course_category,course_detail,training_start_datetime,training_end_datetime,training_minutes,collaboration_type,collaboration_name;pi1m_refid,service_provider,training_id?$token=',
    },
    trainingCourseAttendanceDetail: {
        'select': 'select/mcmccims/usp_im.v_pi1m_cms_ta_detail:*?$token=',
        'upsert': '',
        'insert': 'insert/mcmccims/usp_im.v_pi1m_cms_ta_detail:pi1m_refid,service_provider,training_id,attendee_ic?$token='
    },
    staffDeails: {
        'select': 'select/mcmccims/usp_im.v_pi1m_cms_staff_details:*?$token=',
        'upsert': 'upsert/mcmccims/usp_im.v_pi1m_cms_staff_details:pi1m_refid,service_provider,staff_ic,staff_name,contact_number,contact_email,position,status;service_provider,staff_ic?$token=',
    },
    staffAttendanceDetails: {
        'select': 'select/mcmccims/usp_im.v_pi1m_cms_staff_att:*?$token=',
        'upsert': 'upsert/mcmccims/usp_im.v_pi1m_cms_staff_att:pi1m_refid,service_provider,staff_ic,checkin_date,checkin_time,checkout_time,checkin_status,position;pi1m_refid,service_provider,staff_ic,checkin_date?$token=',
    },
    memberDetails: {
        'select': 'select/mcmccims/usp_im.v_pi1m_cms_member_detail:*?$token=',
        'upsert': 'upsert/mcmccims/usp_im.v_pi1m_cms_member_detail:member_id,member_name,gender,birthdate,race,occupation,oku_status,member_status,last_login,member_type,pi1m_refid,service_provider,member_ic;service_provider,member_ic?$token=',
    },
    nms: {
        'select': 'select/mcmccims/usp_im.v_pi1m_network_statistic:*?$token=',
        'upsert': 'upsert/mcmccims/usp_im.v_pi1m_network_statistic:utilization,throughput,uptime,pi1m_refid,service_provider,date_time;pi1m_refid,service_provider,date_time?$token=',
    },
    cmsRevenue: {
        'select': 'select/mcmccims/usp_im.v_pi1m_cms_revenue_collection:*?$token=',
        'upsert': 'upsert/mcmccims/usp_im.v_pi1m_cms_revenue_collection:pi1m_refid,service_provider,collection_category,collection_date,collection_amount;pi1m_refid,service_provider,collection_category,collection_date?$token=',
    },



    /***************************************************************************
     * API INTEGRATION  END  *
     ***************************************************************************/


    jwtKey: 'hihelloworld',
    timeToLive: 60 * 60 * 24,
    mailerService: 'Gmail',
    mailerSecure: true,
    mailerPort: 465,
    mailerUser: 'mailuser',
    mailerPassword: 'mailerpassword',


    /** 
     * Api prefix for the malsian gov
     */

    // authenticationUrl: 'https://cims-api.skmm.gov.my/HttpAuthentication/login/?',
    // authenticationEncodedUrl: 'https://cims-api.skmm.gov.my/HttpAuthentication/login/?',

    // urlwithToken: 'https://cims-api.skmm.gov.my/data/select/mcmccims/',
    // urlwithTokenEncodedUrl: 'https://cims-api.skmm.gov.my/data/select/mcmccims/?',


};