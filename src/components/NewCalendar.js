import React from 'react';
import { Dimensions, View } from 'react-native';
import moment from 'moment';
import EventCalendar from './EventCalendar';
import _ from 'lodash';

let { width } = Dimensions.get('window');

class Lecture {
    constructor(start, end, title, summary) {
        this.start = start;
        this.end = end;
        this.title = title;
        this.summary = summary;
    }
}

export default class NewCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: false,
        };
    }

    componentDidMount() {
        this.getICS();
    }

    getICS() {
        fetch('https://studentcal.simge.edu.sg/SIMCalendar/5b2ce3d901680312e0530ac45c0b98e8.ics')
            .then(response => response.text())
            .then(data => {
                this.getLectures(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getLectures(res) {
        var modulesTakenThisYear = [];
        var lectures = [];
        var lines = res.split('\n');
        var lectures_i = 0;

        String.prototype.splice = function (idx, rem, str) {
            return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
        };

        var moment = require('moment');

        for (i = 0; i < lines.length; i++) {
            var starttime, endtime, name, location;

            if (lines[i].includes('DTSTART;')) {
                var starttimeline = lines[i].split(':');
                starttime = starttimeline[1].trim();
                starttime = moment(starttime).utc().format('YYYY-MM-DD HH:mm:ss');
                lectures[lectures_i] = new Lecture(starttime, endtime, name, location);

            } else if (lines[i].includes('SUMMARY')) {
                var nameline = lines[i].split(':');
                name = nameline[1];
                lectures[lectures_i] = new Lecture(starttime, endtime, name, location);

            } else if (lines[i].includes('DTEND;')) {
                var endtimeline = lines[i].split(':');
                endtime = endtimeline[1].trim();
                endtime = moment(endtime).utc().format('YYYY-MM-DD HH:mm:ss');
                lectures[lectures_i] = new Lecture(starttime, endtime, name, location);
                // lectures[lectures_i] = { starttime, endtime, name, location };
            } else if (lines[i].includes('LOCATION')) {
                var locline = lines[i].split(':');
                location = locline[1];
                lectures[lectures_i] = new Lecture(starttime, endtime, name, location);
                lectures_i++;
            }
        }

        for (i = 0; i < lectures.length; i++) {
            this.state.events.push(
                {
                    end: lectures[i].end,
                    start: lectures[i].start,
                    summary: lectures[i].summary,
                    title: lectures[i].title,
                },
            );
        };
    };

    _eventTapped(event) {
        alert(JSON.stringify(event));
    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 15 }}>
                <EventCalendar
                    eventTapped={this._eventTapped.bind(this)}
                    events={this.state.events}
                    width={width}
                    // initDate={new Date()}
                    initDate={new Date("March 19 2020 12:30")}
                    scrollToFirst
                    upperCaseHeader
                    uppercase
                    scrollToFirst={true}
                />
            </View>
        );
    }
}
