import htmlmin from 'html-minifier-next';
import * as critical from 'critical';
const buildDir = 'dist';

const shouldTransformHTML = (outputPath) =>
    outputPath &&
    outputPath.endsWith('.html') &&
    process.env.ELEVENTY_ENV === 'production';

const isHomePage = (outputPath) => outputPath === `${buildDir}/index.html`;

process.setMaxListeners(Infinity);
export default {
    htmlmin: function (content, outputPath) {
        if (shouldTransformHTML(outputPath)) {
            return htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            });
        }
        return content;
    },

    critical: async function (content, outputPath) {
        if (shouldTransformHTML(outputPath) && isHomePage(outputPath)) {
            try {
                const config = {
                    base: `${buildDir}/`,
                    html: content,
                    inline: true,
                    width: 1280,
                    height: 800,
                };
                const { html } = await critical.generate(config);
                return html;
            } catch (err) {
                console.error(err);
            }
        }
        return content;
    },
};
