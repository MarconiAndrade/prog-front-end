export function getImageUrl(person, size = "s") {
  return '/' + person.imageId + size + ".jpeg"; 
}