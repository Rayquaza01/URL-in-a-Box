function saveOptions(e) {
    var url = document.querySelector("#url").value || "https://wikipedia.org";
    browser.storage.local.set({
        url: url
    });
    browser.browserAction.setPopup({
        popup: url
    });
    e.preventDefault();
}
function restoreOptions() {
    browser.storage.local.get("url").then((res) => {
        document.querySelector("#url").value = res.url || "https://wikipedia.org";
    });
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("url").addEventListener("input", saveOptions);
