import axios from "axios";

const request = axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyAhf6IjX3FMXfpHRyY1YvxWuwKwIKOCFAA",
        // bu oldingi kalit  AIzaSyC5trwX4ebcChuagFnlz47z_i0NzFu7dYY
    }
});

export default request