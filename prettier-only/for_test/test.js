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

// special case(describe, it, test)
describe("NodeRegistry", () => {
  it("makes no request if there are no nodes to prefetch, even if the cache is stale", async () => {
    // The above line exceeds the print width but stayed on one line anyway.
  });
});

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

// long html strings(use template literal)
var widgetStructure = "<div id=${widgetID}>" +
                           "<h2 id=${widgetTitleID}>${widgetTitle}</h2>" +
                            "<div id=${widgetContentID} style=${widgetContentStyles}" +
                                (function() {
                                    var paras = '';
                                    for (var i = 0; i < paraItems.length; ++i) {
                                        paras += '<p>' + paraItems[i] + '</p>';
                                    }
                                    return paras;
                                })() +
                            '</div>' +
                        '</div>';
