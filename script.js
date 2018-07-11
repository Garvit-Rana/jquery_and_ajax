var button=$('#append-button');
console.log(button);
var message="message";
button.click(function () {
	var mytext=$('<p>',{
'html':message,
'class': 'large-text blue',
'css':{
	'border':'1px solid grey',
	'color':'tomato'
}

	});
	$('#text-container').append(mytext);
});
var dogimagebutton=$('#get-dog-image');
function updateimagetag(imagelink){
	$('#dog-random-image').attr('src',imagelink);
}
function getimage(){
	var breed=$('#breed').val();
$.ajax({
type: 'get',
url: 'https://dog.ceo/api/breed/'+ breed+ '/images/random',
success: function(response){
	updateimagetag(response.message);
}, 
error:function(){
console.log('some error')
}

});


}
dogimagebutton.click(function(){

	getimage();

});
var marsform=$('#marsform');
function createimage(imagelink)
{
	let newimg=$('<img>',{
'src':imagelink

	});
	$('#imagegrid').append(newimg);
}

marsform.submit(function(){
event.preventDefault();
$.ajax({
type:'get',
url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', 
data:{
sol:$('#sol').val(),
page:$('#page').val(),
api_key:'FvsCfoLfwe0zYiCAnFfdwlWvyqCkM4EPEDAFrwGr'
},
success:function(response){
	let photos=response.photos;
	$('#imagegrid').empty();
for (let i=0;i<photos.length;i++){
	createimage(photos[i].img_src);
}

},
error:function(){
	console.log("error");
}







})

});


//FvsCfoLfwe0zYiCAnFfdwlWvyqCkM4EPEDAFrwGr



