const TrainingRepo = require('../repositories/trainingRepo');
const mysql = require('mysql');
var fs = require('fs');
var pdf = require("pdf-creator-node");
var html = fs.readFileSync('./views/pdfTemplates/leave.ejs', 'utf8');
const os = require('os');
const { exit } = require('process');

/**
 * TrainingController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

let config = {
    host: 'localhost',
    user: 'root',
    password: 'doodleblue',
    database: 'agiles'
};
let connection = mysql.createConnection(config);

module.exports = {
    async create(req, res) {
        try {
            req.body.start_hour = req.body.startTime;
            req.body.end_hour = req.body.endTime;

            req.body.duration = req.body.hours + ':' + req.body.minutes;
            req.body.startTime = req.body.trainingDate +' '+req.body.startTime; 
            req.body.endTime = req.body.trainingDate +' '+req.body.endTime; 
            req.body.courseDuration = getDuration(req.body.startTime, req.body.endTime);
            const training = await TrainingRepo.create(req.body);
            if (!!training) {
                return res.status(200).json({ message: 'successfully created' });
            }
            return res.status(403).json({ message: 'Bad request' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getOne(req, res) {
        try {
            const { trainingId } = req.params;
            const training = await TrainingRepo.getOne(trainingId);
            if (training) {
                return res.status(200).json(training);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getAll(req, res) {
        try {
            var data = [];
            const { page, limit } = req.query;
            const training = await TrainingRepo.getAll(page || 1, limit || "");
            if (training) {
                for (var available of training) {
                    available.totalRegistered = 0
                    available.totalAttended = 0
                    if(available.RegisteredRecords) {
                        var totalAttendedcounts = 0;
                        for (const record of available.RegisteredRecords) {
                            if(record.attendance) {
                                totalAttendedcounts = parseInt(totalAttendedcounts) + 1;
                            }
                        }
                        available.enrolled = available.RegisteredRecords.length;
                        available.totalRegistered = available.RegisteredRecords.length
                        available.totalAttended = totalAttendedcounts
                    }
                    data.push(available);
                }
                return res.status(200).json(data);
            }
            return res.status(202).json({ message: 'No data found' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async update(req, res) {
        try {
            const { trainingId } = req.params;
            
            req.body.start_hour = req.body.startTime;
            req.body.end_hour = req.body.endTime;
            
            req.body.duration = req.body.hours + ':' + req.body.minutes;
            req.body.startTime = req.body.trainingDate +' '+req.body.startTime+':00'; 
            req.body.endTime = req.body.trainingDate +' '+req.body.endTime+':00'; 
            req.body.courseDuration = getDuration(req.body.startTime, req.body.endTime);

            const training = await TrainingRepo.update(trainingId, req.body);
            if (!!training) {
                return res.status(200).json({ message: 'Successfully updated' });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async CourseRegisteration(req, res) {
        try {
            const data =[];
            var trainings = await TrainingRepo.getOne(req.body.trainingId);
            if (trainings.maximumSubscription == trainings.availabeTraining) {
                return res.status(202).json({ message: 'This is not valid training' });
            }
            var availabeTraining = trainings.availabeTraining + 1;
            
            for(var courseDetail of req.body.courseRegisteration) {
                trainings = await TrainingRepo.getOne(req.body.trainingId);
                const trainingUpdate = await TrainingRepo.update(req.body.trainingId, { availabeTraining });
                courseDetail.trainingId = req.body.trainingId;
                const training = await TrainingRepo.CourseRegisteration(courseDetail);
                data.push(training)
            }
            if(data.length) {
                return res.status(200).json({ data: data, message: 'Registration Successfully' });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async exportExcel(req, res) {
        let trainers = await TrainingRepo.getAllDetails();
        const filename = "./reports/excel/output-" + Date.now() + ".csv"
        const output = [];
        const headers = []
        const header = [{
            course: 'course',
            courseCode: 'courseCode',
            courseType: 'courseType',
            duration: 'duration',
            durationType: 'durationType',
            fee: 'fee',
            // enrolled: 'enrolled',
            maximumSubscription: 'maximumSubscription',
            trainer: 'trainer',
            courseDuration: 'courseDuration',
            location: 'location',
            status: 'status',
            availabeTraining: 'availabeTraining'

        }]
        header.forEach((d) => {
            headers.push(d.course)
            headers.push(d.courseCode)
            headers.push(d.courseType)

            headers.push(d.duration)
            headers.push(d.durationType)
            headers.push(d.fee)
            // headers.push(d.enrolled)

            headers.push(d.maximumSubscription)
            headers.push(d.trainer)
            headers.push(d.courseDuration)
            headers.push(d.location)
            headers.push(d.status)
            headers.push(d.availabeTraining)


            output.push(headers.join())
        })
        fs.writeFileSync(filename, output.join(os.EOL));
        trainers.forEach((obj) => {
            const row = [];
            row.push(obj.course);
            row.push(obj.courseCode);
            row.push(obj.courseType);
            row.push(obj.duration);
            row.push(obj.durationType);

            row.push(obj.fee);
            // row.push(obj.enrolled);
            row.push(obj.maximumSubscription);
            row.push(obj.trainer);
            row.push(obj.courseDuration);
            row.push(obj.location);
            row.push(obj.status);
            row.push(obj.availabeTraining);

            output.push(row.join());

        });
        fs.writeFileSync(filename, output.join(os.EOL));
        return res.status(200).json({ message: "Excel reported successully", path: filename })
    },
    //getCourse...
    async getCourseResgisterDetails(req, res) {
        try {
            const { trainingId } = req.params;
            const { page, limit } = req.query;
            const training = await TrainingRepo.getCourseResgisterDetails(page || 1, limit || 10, trainingId);
            if (training) {
                return res.status(200).json(training);
            }
            return res.status(403).json({ message: 'Not found' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async updateTrainingStatus(req, res) {
        try {
            const { trainingId } = req.params;
            const training = await TrainingRepo.update(trainingId, req.body);
            if (!!training) {
                return res.status(200).json({ message: 'TrainingStatus Successfully updated' });
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },

    async getTrainingReport(req, res) {
        try {
            const { fromdate, todate, location } = req.body;
            const training = await TrainingRepo.getTrainingReport(fromdate, todate, location);
            if (training) {
                return res.status(200).json(training);
            }
            return res.status(403).json({ message: 'Something went wrong' });
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getOneCron(req, res) {
        try {
            const { trainingId } = req.params;
            const training = await TrainingRepo.getOne(trainingId);
            if (!!training) {
                // insert statment  

                // execute the insert statment
                connection.query("INSERT INTO training (createdAt,updatedAt,course,courseCode,courseType,duration,durationType,fee,maximumSubscription,courseDuration,status,trainer,location) VALUES ('" + new Date(training.createdAt).toISOString().substr(0, 10) + "','" + new Date(training.updatedAt).toISOString().substr(0, 10) + "'," + training.course + ",'" + training.courseCode + "'," + training.courseType + "," + training.duration + "," + training.durationType + "," + training.fee + "," + training.maximumSubscription + ",'" + training.courseDuration + "'," + training.status + "," + training.trainer.id + "," + training.location + ")");

                connection.end();
                return res.json({ message: "successfully inserted" });
            }
            return res.notFound();
        } catch (error) {
            res.serverError(error);
        }
    },

    async getPDF(req, res) {
        try {
            var data = [];
            var options = {
                format: "A3",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "20mm",
                    contents: '<div style="text-align: center;"><h1>Training List</h1></div>'
                }
            };

            const training = await TrainingRepo.getPDF();
            if (training) {
                for (var available of training) {
                    if (available.maximumSubscription != available.availabeTraining) {
                        data.push(available);
                    }
                }

                var document = {
                    html: html,
                    data: {
                        getreport: data
                    },
                    path: "./reports/pdf/TrainingList-" + Date.now() + ".pdf"
                };

                pdf.create(document, options)
                    .then(pdfResponse => {
                        return res.status(200).json({ message: "PDF Created Successfully", path: document.path });
                    })
                    .catch(error => {
                        console.log(error);
                        return res.status(403).json({ message: 'Not found' });
                    });
            } else {
                return res.status(202).json({ message: 'No data found' });
            }

        } catch (error) {
            return res.serverError(error);
        }
    },
    async attendance(req, res) {
        try {
            const { attendance, courseRegisterId, trainingId, memberId } = req.body;
            const findregisterd = await TrainingRepo.trainingRegistered(courseRegisterId,trainingId, memberId);
            if(findregisterd.length) {
                const training = await TrainingRepo.updateTrainingRegistered(courseRegisterId, { attendance });
                if (!!training) {
                    return res.status(200).json({ message: 'Successfully updated' });
                }
            }
            return res.status(403).json({ message: 'No data found' });
        } catch (error) {
            return res.serverError(error);
        }
    },
   

    async updateTrainingHqDetails(req, res) {
        try {
            const list = await TrainingRepo.traininghqcmsRecord(req.body);
            if(list) {
                const list = await TrainingRepo.traininghqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await TrainingRepo.traininghqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },

    
    async updateTrainingRegisterHqDetails(req, res) {
        try {
            const list = await TrainingRepo.trainingRegisterhqcmsRecord(req.body);
            if(list) {
                const list = await TrainingRepo.trainingRegisterhqcmsupdate(req.body);
                return res.status(200).json({ data: list });        

            } else {
                const list = await TrainingRepo.trainingRegisterhqcmscreate(req.body);
                return res.status(200).json({ data: list });        
            }

     
        } catch (error) {
            return res.serverError(error);
        }
    },










};

function getDuration(date1, date2) {

    var calculateTime = Math.abs(new Date(date1) - new Date(date2)) / 1000;
        var minutes = Math.floor(calculateTime / 60) % 60;
        calculateTime -= minutes * 60;
        var hours = Math.floor(calculateTime / 3600) % 24;
        calculateTime -= hours * 3600;
        
        if(hours<10) hours = "0" + hours;
        if(minutes<10) minutes = "0" + minutes;
        
        return  hours +':'+ minutes

}

