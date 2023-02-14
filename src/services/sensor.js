import axios from "axios"

export async function getData(){
    try{
        const res = await axios.get("https://airquality.zeqa.net/air_quality/get_last_ten_minutes_logs/")
        return res.data
    }catch(err){
        console.log(err)
    }
}