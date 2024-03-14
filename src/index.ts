import { fetchPrayerTimes } from "./api/prayerTimesApi";

async function main() {
    try {
        const year = 2024;
        const month = 3;
        const city = "London";
        const country = "United Kingdom";
        const method = 2;
        const prayerTimes = await fetchPrayerTimes(
            year,
            month,
            city,
            country,
            method
        );

        console.log("Adhaan scheduled successfully.");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

main();
