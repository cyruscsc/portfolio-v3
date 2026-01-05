import { redirect } from '@sveltejs/kit';
import config from '$lib/assets/config.json';

export const load = () => {
	throw redirect(302, config.pages.home.meta.path);
};
