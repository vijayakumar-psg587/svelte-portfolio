import type { MediaModel } from '../../models/media.model';

let headerObj: Record<string, unknown> | PromiseLike<Record<string, unknown>> = {
	title: 'unknwon'
};

let models = [];
const links: Record<string, unknown>[] = [];
(async function headerComp(): Promise<Record<string, unknown>> {
	// get it from
	headerObj = {
		title: 'My Portfolio',
		imageUrl: './static/image/my-image.JPG'
	};

	const twitterModel: MediaModel = {
		src: './static/png/twitter1.png',
		name: 'Twitter',
		class: 'twitterImageClass',
		altImageName: 'Twitter Image',
		customStyle: `width: 3.4em;
                        position: relative;
                        top: 0.2em; filter:sepia(12%) contrast(144%) drop-shadow(2px 4px 6px gray);`
	};

	const githubModel: MediaModel = {
		src: './static/png/github1.png',
		name: 'Github',
		class: 'githubImageClass',
		altImageName: 'GitHub Image',
		customStyle: `width: 3.4em;
		position: relative;
		top: 0.2em; filter:sepia(12%) contrast(144%) drop-shadow(2px 4px 6px gray);`
	};

	const linkedInModel: MediaModel = {
		src: './static/png/linkedin1.png',
		name: 'LinkedIn',
		class: 'linkedInImageClass',
		altImageName: 'LinkedIn Image',
		customStyle: `width: 3.4em;
		position: relative;
		top: 0.2em; filter:sepia(12%) contrast(144%) drop-shadow(2px 4px 6px gray);`
	};

	const academyLink = {
		icon: `<svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z"></path><path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>`
	};

	const archiveLink = {
		icon: `<svg width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" color="#000000"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>`
	};

	links.push(academyLink, archiveLink);
	models.push(twitterModel, githubModel, linkedInModel);
})();

export const HEADEROBJ = headerObj;
export const MODELLIST = models;
export const LINKS = links;
