browser.storage.local.get().then((res) => {
    var title = res.title || "URL in a Box";
    var icon = res.icon || "/icons/icon-96.png";
    var titleSidebar = res.titleSidebar || "URL in a Box";
    var iconSidebar = res.iconSidebar || "/icons/icon-96.png";
    browser.browserAction.setTitle({
        title: title
    });
    browser.browserAction.setIcon({
        path: icon
    });
    browser.sidebarAction.setTitle({
        title: titleSidebar
    });
    browser.sidebarAction.setIcon({
        path: iconSidebar
    });
});
