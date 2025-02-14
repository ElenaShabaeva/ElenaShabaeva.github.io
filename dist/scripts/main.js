(function () {
    "use strict";

    /*header*/
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
        root.classList.toggle("show-nav");
    });

    /*pp*/
    const eventPP = document.querySelector("#js-eventPP");
    if (eventPP) {
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

        const closeEventPP = function (event) {
            function close() {
                document.removeEventListener("keyup", closeEventPP);
                eventPP.removeEventListener("click", closeEventPP);

                root.classList.remove("show-event-pp");
            }

            switch (event.type) {
                case "keyup":
                    if (event.key === "Escape" || event.keyCode === 27) close();
                    break;

                case "click":
                    if (
                        event.target === this ||
                        event.target.classList.contains("js-ppCloseBtn")
                    )
                        close();
                    break;
            }
        };

        eventOpenBtn.addEventListener("click", function () {
            root.classList.add("show-event-pp");

            document.addEventListener("keyup", closeEventPP);
            eventPP.addEventListener("click", closeEventPP);
        });

        /*1й вариант*/
        // eventPP.addEventListener("click", function(event) {
        //     if(
        //         event.target === this || event.target.classList.contains("js-ppCloseBtn")
        //     ) {
        //         root.classList.remove("show-event-pp");
        //     }
        // });

        // document.addEventListener("keyup", function(event) {
        //     if(event.key === "Escape" || event.keyCode === 27) {
        //         root.classList.remove("show-event-pp");
        //     }
        // });
    }

    /*swiper на главной странице*/
    const swipers = document.querySelectorAll(".js-swiper");
    swipers.forEach(function (swpr) {
        new Swiper(swpr, {
            updateOnWindowResize: true,
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 0,
            speed: 500,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-arrow-next",
                prevEl: ".swiper-arrow-prev",
                disabledClass: "arrow--disabled",
            },
        });
    });

    /*карта на главной странице*/
    const contactsMap = document.querySelector("#js-contactsMap");
    if (contactsMap) {
        const mapStyles = [
            {
                elementType: "geometry",
                stylers: [
                    {
                        color: "#242f3e",
                    },
                ],
            },
            {
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#746855",
                    },
                ],
            },
            {
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#242f3e",
                    },
                ],
            },
            {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#d59563",
                    },
                ],
            },
            {
                featureType: "poi",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#d59563",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#263c3f",
                    },
                ],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#6b9a76",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#38414e",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#212a37",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#9ca5b3",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#746855",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [
                    {
                        color: "#1f2835",
                    },
                ],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#f3d19c",
                    },
                ],
            },
            {
                featureType: "transit",
                stylers: [
                    {
                        visibility: "off",
                    },
                ],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#2f3948",
                    },
                ],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#d59563",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    {
                        color: "#17263c",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [
                    {
                        color: "#515c6d",
                    },
                ],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [
                    {
                        color: "#17263c",
                    },
                ],
            },
        ];
        const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
        const mapOptions = {
            center: mapCenter,
            disableDefaultUI: true,
            draggable: true,
            gestureHandling: "cooperative",
            scrollwheel: false,
            styles: mapStyles,
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM,
            },
        };
        const map = new google.maps.Map(contactsMap, mapOptions);

        const point = new google.maps.LatLng(56.49385, 84.96274);
        const mapPin = new google.maps.MarkerImage(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABHCAMAAABf/MtLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAADAUExURUdwTK8wILwyJL0zI70yJbwyI79AIL0yJL8wILs0JLw0JLsyJL0zJbwyJbwzJB8eHv///3Nycjs6OldWVsRMP4+OjsRNP8fHx+Pj492ZkUlISOazrauqqu7MyMfGxsBAMS0sLMlZTc1mW/vy8sBAMvvy8WVkZMVMQPbl48lZTtmMg81mWtmMhMxmW4+Pj/fm4/fl5OGmnvHx8Z2cnMVNQPLZ1tWAdt6ZktBzaHNzc9V/duq/u+Gmn8hZTNFzabm5uYZR+N4AAAAOdFJOUwAQz9/f3xB/EIDPz9/ftWbT5QAAAWxJREFUWMPt1VlTwjAQAGDEaluPJiQhYGjtAeUQxPu+/v+/cpO2DC+OI7PRYcw+JOlO55vMdpO2WmtBNo3W9+FsZzvb2c529l/Y45hXi/iG6yA8fuKMkGUMqS5X1RvLONvA7tJOtaD9au5AginSo5A6hUem3+hRhmUTwhubjNFttbKzDwT7GqqtGpv0G5vE2Ptes9FrsvqW/9FmXDGIjHCuZwYJc0wUHCn9aYlJKO7uKmf/sh39LJxtxx7lObJ9e1emMA1oISN5OUmFmNMrIQSGnd/TM2M/w3iRwCDpCdK+i9EwMfY5jMkU056l0SvNtf0GT0PUfT9K+a6tAYUKP0wFpl3oSpTansuXchIh2jM9LKDWet/SlATNLkxjg2lqsjAtg9cnOqCbU1Ev9Ji6+wTTdv/LLbJdbHnsh160GwZW6ANz+Ns28LC+WXwL9lFt71mwv7gSUcKzuG/fYr2DtqEPd2w0YeAfR55vg/4EpN3f8dlAXnoAAAAASUVORK5CYII=",
            new google.maps.Size(91, 71), //size
            new google.maps.Point(0, 0), //origin point
            new google.maps.Point(0, 71) //offset point
        );
        new google.maps.Marker({
            position: point,
            map: map,
            icon: mapPin,
            title: "TAGREE digital",
        });
    }

    /*стилизация select в pp*/
    const jsSelectric = $(".js-selectric");
    if (jsSelectric.length) {
        jsSelectric.selectric({
            nativeOnMobile: false,
        });
    }

    /*добавление маски на поле ввода телефона в pp*/
    const mobileMask = $(".js-mobileMask");
    if (mobileMask.length) {
        mobileMask.mask("+7 (000) 000 00 00", {
            placeholder: "+7 (___) ___ __ __",
        });
    }

    /*стилизация полей ввода даты в pp*/
    const dateField = $(".js-dateField");
    if (dateField.length) {
        const pickerInit = function (pick) {
            const dateInput = pick.find(".js-dateInput");
            const dateDay = pick.find(".js-dateDay");
            const dateMonth = pick.find(".js-dateMonth");
            const dateYear = pick.find(".js-dateYear");
            const dateConfig = {
                autoClose: true,
                minDate: new Date(),
                navTitles: {
                    days: "MMMM <i>yyyy</i>",
                },
                onSelect: function ({ date }) {
                    dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
                    dateMonth.val(
                        date ? ("0" + (date.getMonth() + 1)).slice(-2) : ""
                    );
                    dateYear.val(date ? date.getFullYear() : "");
                },
            };
            new AirDatepicker(dateInput[0], dateConfig);
        };
        $.each(dateField, function (i) {
            pickerInit($(this));
        });
    }

    /*ajax-запрос для формы в footer*/
    const subscribeForm = $("#js-subscribeForm");
    if (subscribeForm.length) {
        const subscribeAction = subscribeForm.attr("action");
        const subscribeEmail = subscribeForm.find("#js-subscribeEmail");
        subscribeForm.validate({
            errorElement: "span",
            submitHandler: function (form, event) {
                event.preventDefault();
                $.ajax({
                    url: subscribeAction,
                    method: "POST",
                    data: {
                        email: subscribeEmail.val(),
                    },
                    success: function () {
                        subscribeEmail.val("");
                        subscribeEmail.blur();
                        toastr.success("Вы успешно подписались на рассылку новостей", "")
                    },
                    error: function () {
                        alert("Что-то пошло не так, попробуйте еще раз");
                    },
                });
            },
        });
    }

    /*выбор столиков на странице event.html*/
    const TotalCostElement = document.querySelector('#js-total-cost');
    const TicketElementRed = document.querySelector("#js-count-ticket-red");
    const TicketSumRed = document.querySelector("#js-sum-ticket-red");
    const TicketElementBlack = document.querySelector("#js-count-ticket-black");
    const TicketSumBlack = document.querySelector("#js-sum-ticket-black");
    let totalCost = 0;
    let countRed = 0;
    let sumRed = 0;
    let sumBlack = 0;
    let countBlack = 0;
    let price = 0;

    const checkboxes = document.querySelectorAll(".check__input");
    checkboxes.forEach(item => {
        item.addEventListener("change", function(){
            const checkID = this.id;
            const checkNum = checkID.replace("table", "");
            const svgID = `#table-svg-${checkNum}`;
            const tableElemet = document.querySelector(svgID);

            if(item.checked){
                tableElemet.classList.add("selected");

                if(tableElemet.classList.contains("js-red")){
                    tableElemet.classList.add("scene__table--red");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1400"]').dataset.price);
                    countRed ++;
                    sumRed += price;
                }
                else if(tableElemet.classList.contains("js-black")){
                    tableElemet.classList.add("scene__table--black");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1250"]').dataset.price);
                    countBlack++;
                    sumBlack += price;
                }
                totalCost += price
            }
            else{
                tableElemet.classList.remove("selected");

                if(tableElemet.classList.contains("js-red")){
                    tableElemet.classList.remove("scene__table--red");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1400"]').dataset.price);
                    countRed--;
                    sumRed -= price;
                }
                else if(tableElemet.classList.contains("js-black")){
                    tableElemet.classList.remove("scene__table--black");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1250"]').dataset.price);
                    countBlack--;
                    sumBlack -= price;
                }

                totalCost -= price;
            }

            TicketElementRed.textContent = countRed;
            TicketElementBlack.textContent = countBlack;
            TicketSumRed.textContent = sumRed;
            TicketSumBlack.textContent = sumBlack;
            TotalCostElement.textContent = totalCost;
        });
    });

    const tables = document.querySelectorAll(".scene__table");
    tables.forEach(item => {
        item.addEventListener("click", function(){
            const svgID = this.id;
            const svgNum = svgID.replace("table-svg-", "");
            const checkID = `#table${svgNum}`;
            const tableElemet = document.querySelector(`#${svgID}`);

            if(tableElemet.classList.contains("js-red")){
                price = parseInt(document.querySelector('.legend__check-label[data-price="1400"]').dataset.price);
            }
            else if(tableElemet.classList.contains("js-black")){
                price = parseInt(document.querySelector('.legend__check-label[data-price="1250"]').dataset.price);
            }

            this.classList.toggle('selected');
            if (this.classList.contains('selected')) {
                if(tableElemet.classList.contains("js-red")){
                    tableElemet.classList.add("scene__table--red");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1400"]').dataset.price);
                    countRed++;
                    sumRed += price
                }
                else if(tableElemet.classList.contains("js-black")){
                    tableElemet.classList.add("scene__table--black");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1250"]').dataset.price);
                    countBlack++;
                    sumBlack += price;
                }
                totalCost += price;
            } 
            else {
                if(tableElemet.classList.contains("js-red")){
                    tableElemet.classList.remove("scene__table--red");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1400"]').dataset.price);
                    countRed--;
                    sumRed -= price;
                }
                else if(tableElemet.classList.contains("js-black")){
                    tableElemet.classList.remove("scene__table--black");
                    price = parseInt(document.querySelector('.legend__check-label[data-price="1250"]').dataset.price);
                    countBlack--;
                    sumBlack -= price;
                }
                totalCost -= price;
            }

            const checkbox = document.querySelector(checkID);
            checkbox.checked = !checkbox.checked;

            TicketElementRed.textContent = countRed;
            TicketElementBlack.textContent = countBlack;
            TicketSumRed.textContent = sumRed;
            TicketSumBlack.textContent = sumBlack;
            TotalCostElement.textContent = totalCost;
        });
    });

})();
