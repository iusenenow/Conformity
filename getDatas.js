const axios = require('axios')

const getDatas = async () => {
  const url = "https://us-west-2.cloudconformity.com/v1/services";
  try {
    // Get data from Cloud Conformity Public Rules API
    const response = await axios.get(url);
    const { data } = response
    return data

  } catch (error) {
    console.log(error);
  }
};

module.exports = getDatas