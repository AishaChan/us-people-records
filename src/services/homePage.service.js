import axios from "axios";

export const findData = async (
  number

) => {
  try {

    const url = `https://phpstack-1272451-4595197.cloudwaysapps.com/api/uspeopleclone/find/number`;
    const result = await axios.post(url, {
      number

    }
    );
    return result;
  } catch (err) {
    throw err;
  }
};


export const checkDNC = async (
  number

) => {
  try {

    const url = `https://phpstack-1272451-4595197.cloudwaysapps.com/api/uspeopleclone/checkDNC/number`;
    const result = await axios.post(url, {
      number

    }
    );
    return result;
  } catch (err) {
    throw err;
  }
};


export const findNumberDetails = async (
  number

) => {
  try {

    const url = `https://phpstack-1272451-4595197.cloudwaysapps.com/api/uspeopleclone/client/number?phone=${number}`;
    const result = await axios.get(url
    );
    return result;
  } catch (err) {
    throw err;
  }
};


export const getIPAddress = async (

) => {
  try {

    const url = `https://api.ipify.org/?format=json`;
    const result = await axios.get(url
    );
    return result;
  } catch (err) {
    throw err;
  }
};

export const postTraffic = async (
  user_ip,
  page

) => {
  try {

    const url = `https://phpstack-1272451-4595197.cloudwaysapps.com/api/uspeopleclone/handshake`;
    const result = await axios.post(url, {
      user_ip,
      page

    }
    );
    return result;
  } catch (err) {
    throw err;
  }
};
