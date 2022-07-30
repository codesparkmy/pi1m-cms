var customFile = sails.config.customFile;


/* conver string format to encode format */
module.exports.stringtoEncode = (data) => {
    let bufferObj = Buffer.from(data, "utf8");
    return bufferObj.toString("base64");
}

/* conver encode format to Decode format */
module.exports.encodetoDecode = (data) => {
    let DecodebufferObj = Buffer.from(data, "base64");
    return DecodebufferObj.toString("utf8");
}


/* get api from custom file based on type and methods */
module.exports.findPrefix = (type, method) => {

    if (type == 'courseDetails') {
        if (method == 'select') {
            return customFile.courseDetails.select;
        } else if (method == 'upsert') {
            return customFile.courseDetails.upsert;
        }

    } else if (type == 'staffDeails') {
        if (method == 'select') {
            return customFile.staffDeails.select;
        } else if (method == 'upsert') {
            return customFile.staffDeails.upsert;
        }

    } else if (type == 'memberDetails') {
        if (method == 'select') {
            return customFile.memberDetails.select;
        } else if (method == 'upsert') {
            return customFile.memberDetails.upsert;
        }

    } else if (type == 'nms') {
        if (method == 'select') {
            return customFile.nms.select;
        } else if (method == 'upsert') {
            return customFile.nms.upsert;
        }

    } else if (type == 'cmsRevenue') {
        if (method == 'select') {
            return customFile.cmsRevenue.select;
        } else if (method == 'upsert') {
            return customFile.cmsRevenue.upsert;
        }

    } else if (type == 'staffAttendanceDetails') {
        if (method == 'select') {
            return customFile.staffAttendanceDetails.select;
        } else if (method == 'upsert') {
            return customFile.staffAttendanceDetails.upsert;
        }

    } else if (type == 'trainingCourseAttendanceDetail') {
        if (method == 'select') {
            return customFile.trainingCourseAttendanceDetail.select;
        } else if (method == 'upsert') {
            return customFile.trainingCourseAttendanceDetail.upsert;
        }

    }

}