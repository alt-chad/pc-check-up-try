async function runCheck() {

    document.getElementById("status").innerText =
        "Checking your PC...";

    // Operating System
    let os = navigator.platform;

    if (navigator.userAgent.includes("Windows")) {
        os = "Windows";
    } else if (navigator.userAgent.includes("Mac")) {
        os = "macOS";
    } else if (navigator.userAgent.includes("Linux")) {
        os = "Linux";
    }

    document.getElementById("os").innerText = os;


    // Browser
    let browser = "Unknown";

    if (navigator.userAgent.includes("Chrome")) {
        browser = "Google Chrome";
    } else if (navigator.userAgent.includes("Firefox")) {
        browser = "Mozilla Firefox";
    } else if (navigator.userAgent.includes("Edge")) {
        browser = "Microsoft Edge";
    } else if (navigator.userAgent.includes("Safari")) {
        browser = "Safari";
    }

    document.getElementById("browser").innerText = browser;


    // RAM
    if (navigator.deviceMemory) {
        document.getElementById("ram").innerText =
            navigator.deviceMemory + " GB";
    } else {
        document.getElementById("ram").innerText =
            "Not available in this browser";
    }


    // Screen Resolution
    document.getElementById("screen").innerText =
        screen.width + " × " + screen.height;


    // Internet
    if (navigator.onLine) {
        document.getElementById("internet").innerText =
            "Connected";
    } else {
        document.getElementById("internet").innerText =
            "Offline";
    }


    // CPU Cores
    document.getElementById("cpu").innerText =
        navigator.hardwareConcurrency
        ? navigator.hardwareConcurrency + " logical cores"
        : "Not available";


    // Device
    let device = "Desktop / PC";

    if (/Android/i.test(navigator.userAgent)) {
        device = "Android";
    } else if (/iPhone|iPad/i.test(navigator.userAgent)) {
        device = "iPhone / iPad";
    }

    document.getElementById("device").innerText = device;


    // Battery
    if ("getBattery" in navigator) {

        try {

            const battery = await navigator.getBattery();

            let percentage =
                Math.round(battery.level * 100);

            let charging =
                battery.charging ? "Charging" : "Not charging";

            document.getElementById("battery").innerText =
                percentage + "% - " + charging;

        } catch {

            document.getElementById("battery").innerText =
                "Battery information unavailable";
        }

    } else {

        document.getElementById("battery").innerText =
            "Battery information unavailable";
    }


    // Final status
    document.getElementById("status").innerText =
        "PC check completed!";


    document.getElementById("summary").innerText =
        "Your browser successfully collected the available PC information.";
}
