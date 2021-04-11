const notification = (function () {
    let bodyElement = document.querySelector("body");
    let notificationPlace = document.createElement("ul");
    notificationPlace.classList.add("notificaton-place");
    bodyElement.appendChild(notificationPlace);
    notificationPlace.style.position = "fixed";
    notificationPlace.style.top = "10px";
    notificationPlace.style.right = "10px";
    notificationPlace.style.zIndex = "9999";
    return {
        success: function (notiText) {
            let liElement = document.createElement("li");
            liElement.style.display = "flex";
            liElement.style.alignItems = "center";
            liElement.style.opacity = "0";
            liElement.style.boxSizing = "border-box";
            liElement.style.padding = "10px 20px";
            liElement.style.marginBottom = "5px";
            liElement.style.borderRadius = "4px";
            liElement.style.color = "#FFFFFF";
            liElement.style.width = "300px";
            liElement.style.boxShadow = "rgb(0 0 0 / 60%) 2px 2px 8px";
            liElement.style.transform = "translate(0, 20px)";
            liElement.style.transition = ".5s";
            notificationPlace.appendChild(liElement);
            let divElementIcon = document.createElement("div");
            divElementIcon.classList.add("alert-icon");
            divElementIcon.style.marginRight = "20px";
            divElementIcon.style.color = "#FFFFFF";
            liElement.appendChild(divElementIcon);
            let divElementBottom = document.createElement("div");
            divElementBottom.classList.add("alert-content");
            liElement.appendChild(divElementBottom);
            liElement.classList.add("success-notification");
            divElementIcon.innerHTML = `<i class="fas fa-check"></i>`;
            liElement.style.background = "#60d691";
            if (!notiText || notiText.length == 0) {
                divElementBottom.innerText = "This is a success notification";
            } else {
                divElementBottom.innerText = notiText;
            }
            setTimeout(function () {
                liElement.style.opacity = "1";
                liElement.style.transform = "translate(0, 0)";
            });
            setTimeout(function () {
                liElement.style.opacity = "0";
                liElement.style.transform = "translate(300px, 0)";
            }, 3000);
            setTimeout(function () {
                liElement.remove();
            }, 3500);
        },
        error: function (notiText) {
            let liElement = document.createElement("li");
            liElement.style.display = "flex";
            liElement.style.alignItems = "center";
            liElement.style.opacity = "0";
            liElement.style.boxSizing = "border-box";
            liElement.style.padding = "10px 20px";
            liElement.style.marginBottom = "5px";
            liElement.style.borderRadius = "4px";
            liElement.style.color = "#FFFFFF";
            liElement.style.width = "300px";
            liElement.style.boxShadow = "rgb(0 0 0 / 60%) 2px 2px 8px";
            liElement.style.transform = "translate(0, 20px)";
            liElement.style.transition = ".5s";
            notificationPlace.appendChild(liElement);
            let divElementIcon = document.createElement("div");
            divElementIcon.classList.add("alert-icon");
            divElementIcon.style.marginRight = "20px";
            divElementIcon.style.color = "#FFFFFF";
            liElement.appendChild(divElementIcon);
            let divElementBottom = document.createElement("div");
            divElementBottom.classList.add("alert-content");
            liElement.appendChild(divElementBottom);
            liElement.classList.add("error-notification");
            divElementIcon.innerHTML = `<i class="fas fa-times"></i>`;
            liElement.style.background = "red";
            if (!notiText || notiText.length == 0) {
                divElementBottom.innerText = "This is an error notification";
            } else {
                divElementBottom.innerText = notiText;
            }
            setTimeout(function () {
                liElement.style.opacity = "1";
                liElement.style.transform = "translate(0, 0)";
            });
            setTimeout(function () {
                liElement.style.opacity = "0";
                liElement.style.transform = "translate(300px, 0)";
            }, 3000);
            setTimeout(function () {
                liElement.remove();
            }, 3500);
        }
    };
})();