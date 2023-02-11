import axios from "axios";
export const GetData_10min = async () => {
  const baseURL =
    "https://airquality.zeqa.net/air_quality/get_last_ten_minutes_logs/";
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (err) {
    return null;
  }
};

export const GetData_recent = async () => {
  const baseURL =
    "https://airquality.zeqa.net/air_quality/get_most_recent_log/";
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (err) {
    return null;
  }
};
export const GetData_LED = async () => {
  const baseURL = "https://airquality.zeqa.net/air_quality/get_led_status/";

  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (err) {
    return null;
  }
};
