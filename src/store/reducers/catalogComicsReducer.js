export const ADD_COMICS = 'ADD_COMICS';
export const DELETE_COMICS = 'DELETE_COMICS';
export const LOAD_COMICS = 'LOAD_COMICS';

let initialState = [
	{
		name: 'Batman Redux',
		link_url: 'https://www.tvmaze.com/shows/975/batman',
		img_src: 'https://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg',
		rating: 7.7,
		premiered: '1966-01-12',
		desc: '<p>Wealthy entrepreneur Bruce Wayne and his ward Dick Grayson lead a double life: they are actually crime fighting duo Batman and Robin. A secret Batpole in the Wayne mansion leads to the Batcave, where Police Commissioner Gordon often calls with the latest emergency threatening Gotham City. Racing to the scene of the crime in the Batmobile, Batman and Robin must (with the help of their trusty Bat-utility-belt) thwart the efforts of a variety of master criminals, including Catwoman, Egghead, The Joker, King Tut, The Penguin, and The Riddler.</p>',
		id: 975,
	},
	{
		name: 'Batman Beyond',
		link_url: 'https://www.tvmaze.com/shows/504/batman-beyond',
		img_src: 'https://static.tvmaze.com/uploads/images/original_untouched/4/10842.jpg',
		rating: 8,
		premiered: '1999-01-10',
		desc: "<p><b>Batman Beyond</b> tells the story of Terry McGinnis was just an ordinary teenager...until his father was mysteriously murdered. Suspecting foul play at his father's company Wayne/Powers Corporation, Terry meets Bruce Wayne and learns a secret identity hidden for decades. Now too old to battle injustice, Wayne is a bitter shell of his former self and refuses to help. So Terry does what any brash young kid would do: steal the Batsuit and take matters into his own hands! Vowing to avenge his father's death, Terry dons the high-tech suit - tricked out with jetpacks for flying, a supersensitive microphone for eavesdropping and even camouflage capabilities - in search of his father's assassin.</p>",
		id: 504,
	},
	{
		name: 'The Batman',
		link_url: 'https://www.tvmaze.com/shows/481/the-batman',
		img_src: 'https://static.tvmaze.com/uploads/images/original_untouched/3/9370.jpg',
		rating: 7.7,
		premiered: '2004-09-11',
		desc: "<p>Hidden in the shadows, The Batman casts a protective eye while tracking the thugs, thieves and criminal masterminds that claim Gotham City's dark alleys each night. In one magnificent swoop, he descends up on opponents and battles with a fierceness that seems almost inhuman. This is the young Bruce Wayne who assumes the role of Gotham's greatest defender in a fresh retelling of the Dark Knight's beginnings.</p><p>With incredible gadgets, awesome animation and a cool new vibe, these 13 exciting episodes from the hit series showcase The Batman taking on your favourite villains – The Joker, The Penguin, Mr. Freeze, Catwoman, Bane – and new crazies you'll love to hate!</p>",
		id: 481,
	},
];

export const catalogComicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMICS:
			return state;
		case DELETE_COMICS:
			return state.filter((el, i) => i !== action.payload);
		case LOAD_COMICS:
			return state;
		default:
			return state;
	}
};
