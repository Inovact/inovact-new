//? This is the boilerplate for setting up projects page, with redux and hooks

import React, { MouseEventHandler, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getProjects, likeProject } from '../../actions/project';
import { project } from '../../constants/interfaceTypes';
import Project from './Project';

const Projects = (state: any): JSX.Element => {
	const [count, setCount] = useState(0);
	const [like, setLike] = useState(false);

	const dispatch = useDispatch();
	const { projects, isLoading } = useSelector(
		(state: RootStateOrAny) => state.projects
	);
	React.useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	// const handleLike: MouseEventHandler<HTMLButtonElement> = () => {
	// 	dispatch(likeProject(2, 3));
	// };

	if (isLoading) return <p>loading....</p>;

	return (
		<div>
			<h1>Projects</h1>
			{projects?.map((project: project) => {
				return (
					<div>
						<Project project={project} />
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
