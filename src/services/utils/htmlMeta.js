export default function getGeneratedHtml(f) {
return (
`<html lang="${f.siteLang}">
    <head prefix="og: http://ogp.me/ns#">

        <title>${f.pageTitle} - ${f.siteTitle}</title>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="robots" content="${f.moreRobots}">
        <meta name="target" content="${f.moreRobots}">

        <meta name="author" content="${f.moreAuthor}">
        <meta name="owner" content="${f.moreOwner}">
        <meta name="language" content="${f.siteLang}">
        <meta http-equiv="content-language" content="${f.siteLang}">

        <meta name="url" content="${f.siteUrl}">
        <meta name="identifier-URL" content="${f.siteUrl}">
        <link rel="canonical" href="${f.siteUrl}" />

        <meta name="subject" content="${f.moreSubject}">
        <meta name="description" content="${f.pageDesc}" />

        <meta property="og:title" content="${f.pageTitle}" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="${f.pageDesc}" />
        <meta property="og:site_name" content="${f.siteTitle}" />
        <meta property="og:url" content="${f.siteUrl}" />
        <meta property="og:locale" content="${f.siteLang}" />
        <meta property="og:image" content="${f.pageHeroUrl}" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="${f.siteUrl}">
        <meta name="twitter:title" content="${f.pageTitle} - ${f.siteTitle}" />
        <meta name="twitter:description" content="${f.pageDesc}" />
        <meta name="twitter:site" content="${f.siteUrl}" />
        <meta name="twitter:image" content="${f.pageHeroUrl}" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="${f.pageTitle}" />
        <meta name="apple-mobile-web-app-status-bar-style" content="${f.moreThemeColor}">
        <meta name="theme-color" content="${f.moreThemeColor}">

    </head>
</html>
`
);
}