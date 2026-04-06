var x = 5;
var y = 7;
var z = x + y;

//console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;

//console.log(C);

function sumnPrint(x1,x2) {
var result = x1 + x2;
//console.log(result);
}

//sumnPrint(x, y);
//sumnPrint(A, B);

if (C.length > z) {
    //console.log(C)
    if (C.length < z) {
        //console.log(z)
    }
} else {
    //console.log("good job!")
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(array) {
    var i
    for (i=0; i<array.length; i++) {

        if (array[i] == "Banana"){
            alert("Banana found!");
        }
    }

}

//findTheBanana(L1);
//findTheBanana(L2);

function findTheBanana2(array) {
    array.forEach(checkifBanana)

    function checkifBanana(item){
        if (item == "Banana"){
            alert("Banana found!");
        }
    }
}

//findTheBanana2(L1);
//findTheBanana2(L2);


var now = new Date();
var hour = now.getHours();

function greeting(h) {

    var greet = document.getElementById("greeting");

    if (greet !== null) {
        if (h < 5 || h >= 20) {
            greet.innerHTML = "Good night! Welcome to American Museum of Natural History.";

        } else if (h < 12) {
            greet.innerHTML = "Good morning! Welcome to American Museum of Natural History.";

        } else if (h < 18) {
            greet.innerHTML = "Good afternoon! Welcome to American Museum of Natural History.";

        } else {
            greet.innerHTML = "Good evening! Welcome to American Museum of Natural History.";
        }
    }
}

greeting(hour);

function selectDate(day) {
    var buy_form = document.getElementById("ticket-form");
    buy_form.style.display = "block";

    var dateInput = document.getElementById("visitDate");
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    month = String(month).padStart(2, '0');
    day = String(day).padStart(2, '0');

    dateInput.value = year + "-" + month + "-" + day;
}

function calculatePrice() {
    var qty = parseInt(document.getElementById("quantity").value) || 1;
    document.getElementById("totalPrice").textContent = qty * 18;
}

function placeOrder() {
    var errors = [];

    var date = document.getElementById("visitDate").value;
    var ticketType = document.getElementById("ticketType").value;
    var qty = parseInt(document.getElementById("quantity").value);
    var email = document.getElementById("email").value.trim();
    if (!date) errors.push("Visit date is required.");
    if (!ticketType) errors.push("Ticket type is required.");
    if (!qty || qty < 1 || qty > 10) errors.push("Quantity must be between 1 and 10.");

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.push("Email is required.");
    } else if (!emailRegex.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    var errorDiv = document.getElementById("form-errors");
    if (errors.length > 0) {
        errorDiv.innerHTML = errors.map(function(e) { return '<p class="form-error">' + e + '</p>'; }).join("");
        return;
    }

    errorDiv.innerHTML = "";
    var total = qty * 18;
    var mailing = document.getElementById("mailingList").checked ? "Yes" : "No";

    alert(
        "Order Confirmed!\n\n" +
        "Visit Date: " + date + "\n" +
        "Ticket Type: " + ticketType + "\n" +
        "Quantity: " + qty + "\n" +
        "Total Cost: $" + total + "\n" +
        "Email: " + email + "\n" +
        "Mailing List: " + mailing + "\n\n" +
        "Thank you for your purchase!"
    );
    location.reload();
}

function updateScheduleToCurrentMonth() {
    const table = document.getElementById("scheduleTable");
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = today.getDate();

    let html = `
        <tr>
            <th colspan="7">${monthNames[month]} ${year}</th>
        </tr>
        <tr>
            <th colspan="7">Select a date</th>
        </tr>
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    `;

    let day = 1;

    for (let week = 0; week < 6; week++) {
        html += "<tr>";

        for (let i = 0; i < 7; i++) {
            if ((week === 0 && i < firstDay) || day > daysInMonth) {
                html += "<td></td>";
            } else {
                if (day < currentDay) {
                    html += `<td><span class="date passed">${day}</span></td>`;
                } else {
                    html += `<td><span class="date" onclick="selectDate(${day})">${day}</span></td>`;
                }
                day++;
            }
        }

        html += "</tr>";

        if (day > daysInMonth) {
            break;
        }
    }

    table.innerHTML = html;
}

if (window.location.href.includes("buytickets.html")) {
    updateScheduleToCurrentMonth();
}

// When the "Read Less" button is clicked
$("#readLess").click(function() {
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button
});

// When the "Read More" button is clicked
$("#readMore").click(function() {
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button
});

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav li a');
    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

function ResponsiveNavBar() {
    var nav = document.getElementById('navbar');
    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}

function addYear() {
    var year = document.getElementById("copyYear");
    var currentYear = new Date().getFullYear();
    year.innerHTML = "© " + currentYear + " American Museum of Natural History. All rights reserved."

}

if (window.location.href.includes("explore.html")) {
    var map = L.map('map').setView([40.7813, -73.9740], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([40.7813, -73.9740]).addTo(map);
}
