// creating error handler function
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode: 500;

    res.status(statusCode)

    res.json({
        message: err.message,
    })
};

// exporting modules
module.exports = {
    errorHandler,
}