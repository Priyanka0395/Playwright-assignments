
function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("The supprted browser is chrome")
    }
    else if (browserName === "Edge") {
        console.log("The supprted browser is Edge")
    }
    else if (browserName === "Firefox") {
        console.log("The supprted browser is Firefox")
    }
    else {
        console.log("The supported browser is Edge")
    }
}

launchBrowser("Chrome")

function runTests(testType) {
    switch (testType) {
        case "Smoke":
            console.log("The testtype is smoke testing")
            break

        case "Sanity":
            console.log("The testtype is Sanity testing")
            break

        case "Regression":
            console.log("The testype is Regression testing")
            break

        default:
            console.log("Smoke testing")
            break
    }
}
runTests("Uat testing")
