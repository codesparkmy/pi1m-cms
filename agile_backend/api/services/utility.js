module.exports.time_convert = (data) => {
    var hours = Math.floor(data / 60);
    var minutes = data % 60;
    return hours + ":" + minutes;
}