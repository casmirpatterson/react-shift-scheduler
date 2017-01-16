var React = require("react");
var helpers = require("../utils/helpers");
var ScheduleView =  require("./ScheduleView");
var AnnouncementsView =  require("./AnnouncementsView");

var EmployeeHome = React.createClass({
    render: function() {
        return (
            <div>
                <AnnouncementsView />
                <div className="divider"></div>
                <ScheduleView />
            </div>
        );
    }
});

module.exports = EmployeeHome;