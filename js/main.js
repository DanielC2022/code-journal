/* global data */
/* exported data */

var $photoInput = document.querySelector('.photo-input');
var $image = document.querySelector('.image');
var $form = document.querySelector('.form');

$photoInput.addEventListener('input', function (event) {
  var newInput = event.target.value;
  var previewImg = $image.setAttribute('src', newInput);
  return previewImg;
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObj = {};
  newObj.title = event.target.elements.title.value;
  newObj.photo = event.target.elements.photo.value;
  newObj.notes = event.target.elements.notes.value;
  newObj.nextEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(newObj);
  $image.setAttribute('src', '/images/placeholder-image-square.jpg');
  event.target.reset();
});

var newObjEntries = localStorage.getItem('js-local-storage');
if (newObjEntries !== null) {
  data.entries = JSON.parse(newObjEntries);
}

window.addEventListener('beforeunload', function (event) {
  var dataEntries = JSON.stringify(data.entries);
  localStorage.setItem('js-local-storage', dataEntries);
});