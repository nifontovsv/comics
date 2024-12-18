import React, { useState } from 'react';
import useInput from '../../Hooks/useInput';

function FormComics(props) {
	// let [state, setState] = useState('');
	let name = useInput();
	let link_url = useInput();
	let img_src = useInput();
	let rating = useInput();
	let premiered = useInput();
	let desc = useInput();

	const handlerAddComic = (e) => {
		e.preventDefault();
		let obj = {
			name: name.value,
			link_url: link_url.value,
			img_src: img_src.value,
			rating: rating.value,
			premiered: premiered.value,
			desc: desc.value,
			id: new Date().getTime(),
		};
		props.addComic(obj);
		props.closeModal();
	};

	return (
		<div>
			<div>
				<label htmlFor=''>
					Сomic title:
					<br />
					{/* <input type='text' value={state} onChange={e => setState(e.target.value)} />
					<input type='text' value={name.value} onChange={name.onChange} /> */}
					<input type='text' {...name} />
				</label>
			</div>
			<div>
				<label htmlFor=''>
					Link to comic:
					<br />
					<input type='text' {...link_url} />
				</label>
			</div>
			<div>
				<label htmlFor=''>
					link to image:
					<br />
					<input type='text' {...img_src} />
				</label>
			</div>
			<div>
				<label htmlFor=''>
					Rating:
					<br />
					<input type='text' {...rating} />
				</label>
			</div>
			<div>
				<label htmlFor=''>
					Premiere date:
					<br />
					<input type='text' {...premiered} />
				</label>
			</div>
			<div>
				<label htmlFor=''>
					Description:
					<br />
					<input type='text' {...desc} />
				</label>
			</div>
			<br />
			<button onClick={handlerAddComic}>Add</button>
		</div>
	);
}

export default FormComics;
