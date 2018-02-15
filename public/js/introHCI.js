'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage(event) {
	$('.project a').click(addProjectDetails);
	//$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(event) {
	// Prevent following the link
	event.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');

		// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	$.get("http://localhost:3000/project/" + idNumber, callBackFn)

	console.log("User clicked on project " + idNumber);
}

function callBackFn(result) {
	console.log(result)
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="detailsImage">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>' + '<p>' + result['summary'] + '</p>'; 

		$("#project" + result.id + " .details").html(projectHTML);
}
