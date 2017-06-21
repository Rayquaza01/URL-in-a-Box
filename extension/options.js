function saveOptions(e) {
    var url = document.querySelector("#url").value || "https://wikipedia.org";
    var urlSidebar = document.querySelector("#urlSidebar").value || "https://wikipedia.org";
    browser.storage.local.set({
        url: url,
        urlSidebar: urlSidebar
    });
    browser.browserAction.setPopup({
        popup: url
    });
    browser.sidebarAction.setPanel({
        panel: urlSidebar
    });
    e.preventDefault();
}
function restoreOptions() {
    browser.storage.local.get().then((res) => {
        document.querySelector("#url").value = res.url || "https://wikipedia.org";
        document.querySelector("#urlSidebar").value = res.urlSidebar || "https://wikipedia.org";
    });
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("url").addEventListener("change", saveOptions);
document.getElementById("urlSidebar").addEventListener("change", saveOptions);
