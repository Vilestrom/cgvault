var mtg = require('mtgsdk')
var json = require('JSON')
var jj= { 'type' : 'elf'}
var x
get(jj,body => {x = body
	console.log(x)});
function get(jj,callback) {
	return mtg.card.where(jj).then(body => {callback(body)});
}

/*
 * name:
 * names:
 * mansCost:
 * cmc:
 * colors:
 * colorIdentity:
 * type:
 * types:
 * supertypes:
 * subtypes:
 * rarity:
 * set:
 * setName:
 * text:
 * number:
 * power:
 * toughness:
 * layout:
 * multiverseid:
 * imageUrl:
 * printings:
 * id: 
 */
