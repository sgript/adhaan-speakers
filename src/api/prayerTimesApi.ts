export async function fetchPrayerTimes(
    year: number,
    month: number,
    city: string,
    country: string,
    method: number
) {
    try {
        const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=${method}`;

        const response = await fetch(url);
        const data = await response.json();
        if (!data || !data.data || !data.data.timings) {
            throw new Error("Invalid response data");
        }

        const prayerTimes = data.data.timings;

        // run some code after the time for Fajr, Dhuhr, Asr, Maghrib, Isha
        /*
        data returns:
        {"code":200,"status":"OK","data":{"timings":{"Fajr":"04:44","Sunrise":"06:16","Dhuhr":"12:09","Asr":"15:19","Sunset":"18:04","Maghrib":"18:04","Isha":"19:36","Imsak":"04:34","Midnight":"00:10","Firstthird":"22:08","Lastthird":"02:12"},"date":{"readable":"14 Mar 2024","timestamp":"1710399600","hijri":{"date":"04-09-1445","format":"DD-MM-YYYY","day":"04","weekday":{"en":"Al Khamees","ar":"الخميس"},"month":{"number":9,"en":"Ramaḍān","ar":"رَمَضان"},"year":"1445","designation":{"abbreviated":"AH","expanded":"Anno Hegirae"},"holidays":[]},"gregorian":{"date":"14-03-2024","format":"DD-MM-YYYY","day":"14","weekday":{"en":"Thursday"},"month":{"number":3,"en":"March"},"year":"2024","designation":{"abbreviated":"AD","expanded":"Anno Domini"}}},"meta":{"latitude":51.509648,"longitude":-0.099076,"timezone":"Europe/London","method":{"id":2,"name":"Islamic Society of North America (ISNA)","params":{"Fajr":15,"Isha":15},"location":{"latitude":39.70421229999999,"longitude":-86.39943869999999}},"latitudeAdjustmentMethod":"ANGLE_BASED","midnightMode":"STANDARD","school":"STANDARD","offset":{"Imsak":0,"Fajr":0,"Sunrise":0,"Dhuhr":0,"Asr":0,"Maghrib":0,"Sunset":0,"Isha":0,"Midnight":0}}}}

        */
    } catch (e) {
        {
        }
    }
}

export const parseScheduledTime = (scheduledTimeStr) => {
    const [hours, minutes] = scheduledTimeStr
        .split(":")
        .map((val) => parseInt(val, 10));
    return new Date(new Date().setHours(hours, minutes)).getTime();
};

export const schedulePrayerExecution = (scheduledTimeStr, prayerName) => {
    const scheduledTime = parseScheduledTime(scheduledTimeStr);
    const currentTime = new Date().getTime();
    const timeoutDuration = Math.max(0, scheduledTime - currentTime);

    console.log(timeoutDuration);
    setTimeout(() => {
        console.log(`It is time for ${prayerName} prayer.`);
    }, timeoutDuration);
};
