/**
 * function will take an argument called success (boolean)
 */

function getPaymentTokenFromAPI(success){
    if (success)
        return Promise.resolve({data: 'Successful response from the API' })
}
module.exports = getPaymentTokenFromAPI;
