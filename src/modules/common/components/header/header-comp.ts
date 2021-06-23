let headerObj: Record<string, unknown> | PromiseLike<Record<string, unknown>> = {
	title: 'unknwon'
};
(async function headerComp(): Promise<Record<string, unknown>> {
	// get it from
	headerObj = {
		title: 'My Portfolio',
		imageUrl: './static/image/my-image.JPG'
	};
	return headerObj;
})();

export default headerObj;
