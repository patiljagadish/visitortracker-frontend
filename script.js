// When page loads, send visit
$(document).ready(function() {
    $.ajax({
        url: "https://visitortracker-backend-l5dc.onrender.com/visit",
        type: "POST",
        success: function(response) {
            console.log(response.message);
            fetchStats();
        }
    });

    function fetchStats() {
        $.ajax({
            url: "https://visitortracker-backend-l5dc.onrender.com/stats",
            type: "GET",
            success: function(data) {
                $('#totalVisitors').text(data.totalVisitors);
                $('#uniqueVisitors').text(data.uniqueVisitors);
            }
        });
    }
});