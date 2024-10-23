import { FC } from 'react';
import HeaderTask from './Task/HeaderTask';
import TabView from './Task/Tab/TabView';

import classes from './Index.module.scss';

const Todos: FC = () => {
	return (
		<main className={classes.todos}>
			<HeaderTask />
			<TabView />
		</main>
	);
};

export default Todos;
