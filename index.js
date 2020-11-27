
$('#bottomSubmit').on('click',function() {
	$('#middleUserCommentContainer').append(`
	<div id="middleCommentEditDelete">
		<div id="middleComment">
			<div id="middleCommentIconUserText">
				<div id="middleUserIcon"><img src="userProfile.png" alt="Profile Image" height=50px weight=50px></div>
				<div>
					<div id="middleCommentUser">
						<h3>${$('#bottomDisplayName').val()}</h3>
					</div>
					<div id="middleCommentText">
						<h1>${$('#bottomComment').val()}</h1>
					</div>
				</div>
			</div>
			<div id="middleEditDelete">
				<p id="middleEdit">Edit</p>
				<p id="middleDelete">Delete</p>
			</div>
		</div>
		<div class="middleCommentSubmit noDisplay">
			<input type="text" id="middleCommentEdit" placeholder="Edit Comment">
			<p id="middleSubmit">Submit</p>
		</div>
	</div>
`)
})

$('#middleUserCommentContainer').on('click', '#middleDelete', function() {	  
	let parent = $(this).parents()[1];
	$(parent).remove();
})

$('#middleUserCommentContainer').on('click', '#middleEdit', function() {	  
	let parent = $(this).parents()[2]; // #middleCommentEditDelete
	let child = $(parent).children()[1]; // #middleCommentSubmit
	$(child).toggleClass('noDisplay');
})

$('#middleUserCommentContainer').on('click', '#middleSubmit', function() {	  
	let parent1 = $(this).parents()[1]; // #middleCommentEditDelete
	let child1 = $(parent1).children()[0]; // #middleComment
	let child2 = $(child1).children()[0]; // #middleCommentIconUserText
	let child3 = $(child2).children()[1]; // blank div
	let child4 = $(child3).children()[1]; // #middleCommentText
	let child5 = $(child4).children()[0]; // h1 tag
	let editText = $(this).prev().val(); // new text typed in by user after clicking the submit button
	$(child5).text(editText); // update h1 tag to editText value
	let parent2 = $(this).parents()[0]; // #middleCommentsSubmit
	$(parent2).toggleClass('noDisplay'); // toggle class to noDisplay
})