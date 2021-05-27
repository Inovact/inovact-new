import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { project } from '../../constants/interfaceTypes';
import { likeProject } from '../../actions/project';

type ProjectProps = {
	project: project;
};

const Project = (props: ProjectProps): JSX.Element => {
	const [like, setLike] = useState(false);
	const checkLike = (likes: string[]) => {
		const jwt = { user: { _id: '9' } };
		let match = likes.indexOf(jwt.user._id) !== -1;
		return match;
	};

	const dispatch = useDispatch();

	const [values, setValues] = useState({
		like: checkLike(['9', '2']),
		likes: props.project.project_likes_aggregate?.aggregate.count,
	});

	const clickLike = () => {
		setLike(!like);
		dispatch(likeProject(props.project.id, 4));
		const newLikes =
			props.project.project_likes_aggregate?.aggregate.count! + 1;
		setValues({
			...values,
			like: !values.like,
			likes: newLikes,
		});
	};

	return (
		<div>
			<h2>{props.project.caption}</h2>
			<div>
				<button onClick={clickLike}>{like ? 'unlike' : 'like'}</button>
				{values.likes}
			</div>
		</div>
	);
};

export default Project;
