module.exports = async function (context, req) {
    const responseMessage = "Hello friend! This is Lumart Chryssomallis, thank you for testing this Hello endpoint."
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}