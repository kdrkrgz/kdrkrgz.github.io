$(document).ready(function() {
    setTimeout(function() {
        $("body").removeClass("overflow_hidden");
        $("#progress_bar").attr("class", "nodisplay");
        $("#main_window").attr("class", "window animated fadeInDown")
    }, 2200);
    var lca = ["Integrating Curves...", "Calibrating Blue Skies...", "Fixing Bugs...", "Code Scaffolding...", "Building...", "Debugging..."];
    var randomNumber = Math.floor(Math.random() * lca.length);
    $('#load_content').html(lca[randomNumber])
});
$(document).ready(function() {
    var skills_chart = new Chart(ctx, config);
    $(document).on("click", "#software-button", function() {
        var data = skills_chart.config.data;
        data.type = 'bar';
        data.datasets[0].data = software_data;
        data.labels = software_labels;
        skills_chart.config.options.title.text = software_title;
        skills_chart.update()
    }).on("click", "#programming-button", function() {
        var data = skills_chart.config.data;
        data.type = 'bar';
        data.datasets[0].data = programming_data;
        data.labels = programming_labels;
        skills_chart.config.options.title.text = programming_title;
        skills_chart.update()
    })
});
var ctx = document.getElementById("skills_chart").getContext('2d');
var software_labels = ["Statistics", "Power BI", "IBM SPSS", "Weka", "QlikView", "Pandas", "Scikit-learn", "ML", "R", "..."];
var software_data = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
var programming_labels = [".Net Core/Classic","Angular", "Entity Framework", "Web Services", "SQL/NoSQL", "Python", "Django", "OOP", "AOP", "..."];
var programming_data = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
var programming_title = "Programming";
var software_title = "Data Science";
var config = {
    scaleFontColor: "white",
    type: 'bar',
    data: {
        labels: software_labels,
        datasets: [{
            label: 'not levels just names',
            data: software_data,
            fillOpacity: .3,
            backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(9, 185, 47, 0.6)', 'rgba(153, 51, 51, 0.6)', 'rgba(153, 51, 153, 0.6)', 'rgba(51, 153, 153, 0.6)'],
            borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(9, 185, 47, 1)', 'rgba(153, 51, 51, 1)', 'rgba(153, 51, 153, 1)', 'rgba(51, 153, 153, 1'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: !0,
        maintainAspectRatio: !1,
        legend: {
            display: !0,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: !0,
                    fontColor: "white"
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: !0,
                    fontColor: "white"
                }
            }]
        },
        title: {
            fontSize: 18,
            fontColor: "white",
            display: !0,
            text: software_title,
            position: 'top'
        }
    }
};
$(document).on('click', '.sidebar-contact', function() {
    $("#window-contact").css("display", "inherit");
    $("#contact-form").attr("action", 'https://www.getform.org/f/eb8636f2-8a39-4e5c-8629-d3999f4c7fa0')
}).on("click", ".hide-windowc", function() {
    $("#window-contact").css("display", "none")
});
$(document).on('click', '#sidebar-skills', function() {
    $("#window-skills").css("display", "inherit")
}).on("click", ".hide-windows", function() {
    $("#window-skills").css("display", "none")
});
$(document).on("click", "#tbtn", function() {
    var value = document.getElementById('ttext').value;
    if (value === "1" || value === 'portfolio') {
        $("#input-form").attr("action", "/portfolio");
        setTimeout(function() {
            $("#tbtn").click()
        }, 1000); /*window.location.href = "/portfolio";*/
    } else if (value === "2" || value === 'skills') {
        $("#window-skills").show()
    } else if (value === "3" || value === 'contact') {
        $("#window-contact").show();
        $("#contact-form").attr("action", 'https://www.getform.org/f/eb8636f2-8a39-4e5c-8629-d3999f4c7fa0');
        setTimeout(function() {}, 1000)
    } else {
        alert("Invalid Selection")
    }
});
$(document).on("click", ".hide-windows", function() {
    $("#window-skills").hide();
    $("#ttext").focus()
}).on("click", ".hide-windowc", function() {
    $("#window-skills").hide();
    $("#ttext").focus()
});
setTimeout(function() {
    $(".element0").typed({
        strings: ["python kadir.py"],
        typeSpeed: 50,
        backDelay: 750,
        loop: !1,
        loopCount: !1,
        callback: function() {}
    })
}, 3500);
setTimeout(function() {
    $(".element2").css("display", "inherit").typed({
        strings: ["Hi, There! I'm Kadir"],
        typeSpeed: 20,
        backDelay: 750,
        loop: !1,
        loopCount: !1,
        callback: function() {}
    })
}, 5200);
setTimeout(function() {
    $(".element3").css("display", "inherit").typed({
        strings: ["Software developer and experienced in data science"],
        typeSpeed: 30,
        backDelay: 750,
        loop: !1,
        loopCount: !1,
        callback: function() {}
    })
}, 6200);
setTimeout(function() {
    $(".options").css("display", "inherit");
    $("#input-form").css("display", "inherit")
}, 9500)