const baBox = document.getElementById("ba-box");
const baURL = document.getElementById("ba-url");
console.log(baBox);
const baTitle = document.getElementById("ba-title");
const baIcon = document.getElementById("ba-icon");
const baIconPrev = document.getElementById("ba-icon-prev");
const baIconReset = document.getElementById("ba-icon-reset");

const siBox = document.getElementById("si-box");
const siURL = document.getElementById("si-url");
const siTitle = document.getElementById("si-title");
const siIcon = document.getElementById("si-icon");
const siIconPrev = document.getElementById("si-icon-prev");
const siIconReset = document.getElementById("si-icon-reset");

function saveOptions() {
    var url = baURL.value || "https://wikipedia.org";
    var title = baTitle.value || "URL in a Box";
    var urlSidebar = siURL.value || "https://wikipedia.org";
    var titleSidebar = siTitle.value || "URL in a Box";
    browser.storage.local.set({
        url: url,
        title: title,
        urlSidebar: urlSidebar,
        titleSidebar: titleSidebar
    });
    browser.browserAction.setPopup({
        popup: url
    });
    browser.browserAction.setTitle({
        title: title
    });
    browser.sidebarAction.setPanel({
        panel: urlSidebar
    });
    browser.sidebarAction.setTitle({
        title: titleSidebar
    });
}

function getIcon(type) {
    var file = this.files[0];
    var reader = new FileReader()
    reader.addEventListener("load", () => {
        switch (type) {
            case "ba":
                baIconPrev.src = reader.result;
                browser.browserAction.setIcon({path: reader.result});
                browser.storage.local.set({icon: reader.result});
                break;
            case "si":
                siIconPrev.src = reader.result;
                browser.sidebarAction.setIcon({path: reader.result});
                browser.storage.local.set({iconSidebar: reader.result});
                break;
        }
    });
    reader.readAsDataURL(file);
}

function resetIcon(type) {
    switch(type) {
        case "ba":
            baIconPrev.src = "/icons/icon-96.png";
            browser.browserAction.setIcon({path: "/icons/icon-96.png"});
            browser.storage.local.set({icon: "/icons/icon-96.png"});
            break;
        case "si":
            siIconPrev.src = "/icons/icon-96.png";
            browser.sidebarAction.setIcon({path: "/icons/icon-96.png"});
            browser.storage.local.set({icon: "/icons/icon-96.png"});
            break;
    }
}

async function restoreOptions() {
    var res = await browser.storage.local.get()
    baURL.value = res.url || "https://wikipedia.org";
    baTitle.value = res.title || "URL in a Box";
    baIconPrev.src = res.icon || "/icons/icon-96.png";

    siURL.value = res.urlSidebar || "https://wikipedia.org";
    siTitle.value = res.titleSidebar || "URL in a Box";
    siIconPrev.src = res.iconSidebar || "/icons/icon-96.png";
}

baBox.addEventListener("change", saveOptions);
siBox.addEventListener("change", saveOptions);
baIcon.addEventListener("change", getIcon.bind(baIcon, "ba"));
siIcon.addEventListener("change", getIcon.bind(siIcon, "si"));
baIconReset.addEventListener("click", resetIcon.bind(null, "ba"));
siIconReset.addEventListener("click", resetIcon.bind(null, "si"));
document.addEventListener("DOMContentLoaded", restoreOptions);
