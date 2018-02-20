# React-Static with Netlify CMS | Starter App

React-Static Basic template with added configuration for blog post deployment via Netlify CMS and GitHub.

To get started, click below to deploy to Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tsgriff/react-static-netlifycms)

Or, copy this folder and signup with [Netlify](https://www.netlify.com), click "New site from Git", select GitHub (or another service), and add "yarn build" as the "Build command" and "dist" as the "Publish directory".

## Authorization and Access to Netlify CMS

Once your site is deployed to GitHub, or one of the other options, configure authorization in Netlify by following the instructions below.

[Information on authentication and logging into Netlify CMS from Netlify's documentation:](https://www.netlifycms.org/docs/add-to-your-site/#authentication)

1. Go to Settings > Identity, and select Enable Identity service.

2. Under Registration preferences, select Open or Invite only. In most cases, you’ll want only invited users to access your CMS, but if you’re just experimenting, you can leave it open for convenience.

3. If you’d like to allow one-click login with services like Google and GitHub, check the boxes next to the services you’d like to use, under External providers.

4. Scroll down to Services > Git Gateway, and click Enable Git Gateway. This will authenticate with GitHub and generate a GitHub API access token. In this case, we’re leaving the Roles field blank, which means any logged in user may access the CMS. 

If you set your registration preference to “Invite only,” you’ll need to invite yourself (and anyone else you choose) as a site user. To do this, select the Identity tab from your site dashboard, and then select the Invite users button. Invited users will receive an email invitation with a confirmation link. Clicking the link will take you to your site with a login prompt.

If you left your site registration open, or for return visits after confirming an email invitation, you can access your site’s CMS at "yoursite.com/admin/".

## Accessing Netlify CMS Data

After you've logged in to the CMS, the fields available for posts are dictated by the public/admin/config.yml file.
If you'd like to remove any, simply comment out the object. For example, I don't plan on using the thumbnail and rating for each post, so I'll remove (or comment out) and remove: 
<pre> 
- {label: "Featured Image", name: "thumbnail", widget: "image"}
- {label: "Rating (scale of 1-5)", name: "rating", widget: "number"}
</pre>
, the <pre>dataObj.data.thumbnail</pre> obj from static.config.js, and the corresponding image element in Post.js.

When posts are submitted, the file paths are dictated by the public/admin/config.yml file.

## More Info:

[React-Static GitHub Repository](https://github.com/nozzle/react-static)

[Netlify CMS GitHub Repository](https://github.com/netlify/netlify-cms.git)