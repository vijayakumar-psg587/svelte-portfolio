import type { MediaModel } from '../../models/media.model';

let headerObj: Record<string, unknown> | PromiseLike<Record<string, unknown>> = {
	title: 'unknwon'
};

let models = [];
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
		altImageName: 'Twitter Image'
	};

	const githubModel: MediaModel = {
		src: './static/png/github1.png',
		name: 'Github',
		class: 'githubImageClass',
		altImageName: 'GitHub Image'
	};

	const linkedInModel: MediaModel = {
		src: './static/png/linkedin1.png',
		name: 'LinkedIn',
		class: 'linkedInImageClass',
		altImageName: 'LinkedIn Image'
	};

	models.push(twitterModel, githubModel, linkedInModel);
	return headerObj;
})();

export const HEADEROBJ = headerObj;
export const MODELLIST = models;
