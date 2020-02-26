/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: `prac_gatsuby_tailwind`,
    siteUrl: `https://github.com/ohteru/prac_gatsuby_tailwind`,
    description: `Use ts, react.fc and tailwindCSS in practice`,
    siteName: `prac_gatsuby_tailwind_initial_setting`,
  },

  // プラグイン名のstringか, {resolve: プラグイン名, options: オプションのオブジェクト}
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
        ]
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        // jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      // src以下を監視してファイルを生成するのでdファイルの生成先はsrcの外にする
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `types/graphqlTypes.d.ts`,
      },
    },
    {
      // scss, postcssのプラグインより後に書く
      resolve: "gatsby-plugin-purgecss",
      options: {
        content: [
          require("path").join(
            process.cwd(),
            "src/**/!(*.d).{js,jsx,ts,tsx,md,mdx}"
          ),
        ],
        printRejected: true, // 被害者リストをprintする
        develop: false, // gatsby develop の実行時にもPurgeCSSを発動させるか
        tailwind: true, // Tailwindと使う時にonする
        whitelist: ["emoji"], // ここに書いたのは消されない
      },
    },
  ],
}
