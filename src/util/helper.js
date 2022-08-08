function printdate() {
    const date = new Date().getDate();
    console.log("Current date is : ", date)
}
function printMonth() {
    const month = new Date(). getMonth() + 1;
    console.log("Current month is : ", month)
}
function getbatchinfo() {
    console.log("Plutonium W2D5 and the topic is Nodejs Module System")
}
module.exports.d_ay = printdate
module.exports.mo_nth = printMonth
module.exports.info= getbatchinfo

