import type { PageServerLoad } from "./$types";
import sleep from 'async-sleep';

const mockApi = async (image: any) => {
    await sleep(1000);
    return image;
}

export const load = (async ({ url }) => {

    const image = url.searchParams.get('q');

    console.log("Running load function for image", image);

    return {
        image: mockApi(image)
    };
}) satisfies PageServerLoad;