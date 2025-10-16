import EleventyFetch from '@11ty/eleventy-fetch';
import orderBy from 'lodash/orderBy.js';

// if you want to display your most starred github repositories,
// change this to your username. if not, set it to false.
const YOUR_GITHUB_USERNAME = false;

export default async function () {
    if (!YOUR_GITHUB_USERNAME) {
        return [];
    }

    try {
        console.log('Fetching GitHub repos...');
        const repos = await EleventyFetch(
            `https://api.github.com/users/${YOUR_GITHUB_USERNAME}/repos`,
            {
                duration: '1d',
                type: 'json',
            },
        );
        return orderBy(repos, 'stargazers_count', 'desc');
    } catch (e) {
        console.log('Failed fetching GitHub repos');
        return [];
    }
}
