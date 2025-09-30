window.addEventListener("load", () => {
    let services_texts = document.getElementsByClassName("service_text");
    let services_texts_height = [];
    for (let i = 0; i < services_texts.length; i++) {
        services_texts_height.push(services_texts[i].offsetHeight);
        services_texts[i].classList.add("hidden");
    }
    window.addEventListener("click", (e) => {
            if (e.target.className === "services_header") {
                let parent = e.target.parentNode;
                let service = parent.getElementsByClassName("service_text")[0];
                for (let i = 0; i < services_texts.length; i++) {
                    if (service === services_texts[i]) {
                        OnServiceClick(service, services_texts_height[i]);
                    }
                }
            }
        }
    );
});
function OnServiceClick(service, height) {
    let text = service;

    if (text.classList.contains("visible")) {
        text.style.height = "0" + "px";
        text.classList.replace("visible", "hidden");
    } else if (text.classList.contains("hidden")) {
        text.style.height = height + "px";
        text.classList.replace("hidden", "visible");
    } else {
        text.style.height = height + "px";
        text.classList.add("visible");
    }
}
