'use strict'

var foo = {
  bar: 'bar string',
  baz: 11,
}

function hoge() {
    name = prompt("Hey!")
    return false
}

// several lines
import {
  CollectionDashboard,
  DashboardPlaceholder
} from "../components/collections/collection-dashboard/main";

// long html strings
var widgetStructure = '<div id=' + widgetID + '>' +
                           '<h2 id="' + widgetTitleID + '">' + widgetTitle + '</h2>' +
                            '<div id="' + widgetContentID + '" style="' + widgetContentStyles + '">' +
                                (function() {
                                    var paras = '';
                                    for (var i = 0; i < paraItems.length; ++i) {
                                        paras += '<p>' + paraItems[i] + '</p>';
                                    }
                                    return paras;
                                })() +
                            '</div>' +
                        '</div>';
