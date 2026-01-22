# n8n Blog Automation Workflows - Setup Guide

This directory contains two n8n workflows that create an automated blog research, creation, and publishing pipeline.

## Workflow Overview

### 1. Daily Blog Ideas Research Pipeline (`1-daily-blog-ideas-pipeline.json`)

**Triggers:** Daily at 8 AM

**What it does:**

1. Fetches trending content from multiple sources:
   - Google News RSS (AI, ML, Frontend, Design Systems)
   - Reddit (r/MachineLearning, r/reactjs, r/webdev, r/Frontend)
   - Hacker News front page
   - Dev.to (JavaScript, React, AI, Frontend, Design Systems)
2. Processes and deduplicates the feed items
3. Sends the data to OpenRouter (Claude 3.5 Sonnet) to generate 5 unique blog ideas
4. Emails you the ideas with a beautiful HTML template

### 2. Blog Creation & Publishing Pipeline (`2-blog-creation-publishing-pipeline.json`)

**Triggers:** Monitors Gmail for replies/requests (every 5 minutes)

**What it does:**

1. Watches for emails with subjects containing "Re: Daily Blog Ideas", "Create Blog", or "Write Blog"
2. Parses your request to extract the idea number or custom topic
3. Uses OpenRouter to write a full blog post (1500-2500 words)
4. Publishes to Cockpit CMS
5. Posts a promotional update to LinkedIn
6. Sends you a confirmation email with the blog URL

---

## Prerequisites

- n8n instance (self-hosted or cloud)
- OpenRouter API key
- Gmail account with OAuth2 configured
- Cockpit CMS instance with API access
- LinkedIn account with OAuth2 configured

---

## Setup Instructions

### Step 1: Import Workflows

1. Open your n8n instance
2. Go to **Workflows** > **Import from File**
3. Import both JSON files

### Step 2: Configure Credentials

#### OpenRouter API

1. Go to [OpenRouter](https://openrouter.ai/) and get an API key
2. In n8n, create a new **HTTP Header Auth** credential:
   - Name: `OpenRouter API`
   - Header Name: `Authorization`
   - Header Value: `Bearer YOUR_OPENROUTER_API_KEY`

#### Gmail OAuth2

1. In n8n, go to **Credentials** > **Add Credential** > **Gmail OAuth2 API**
2. Follow the OAuth2 setup flow to connect your Gmail account
3. Ensure you grant permissions for:
   - Reading emails
   - Sending emails
   - Modifying labels

#### Cockpit CMS API

1. In your Cockpit CMS, go to **Settings** > **API Keys**
2. Create a new API key with permissions for the `blogs` collection
3. In n8n, create a new **HTTP Header Auth** credential:
   - Name: `Cockpit CMS API`
   - Header Name: `Api-Key`
   - Header Value: `YOUR_COCKPIT_API_KEY`

#### LinkedIn OAuth2

1. In n8n, go to **Credentials** > **Add Credential** > **LinkedIn OAuth2 API**
2. Follow the setup to connect your LinkedIn account
3. Ensure you grant permissions for posting

### Step 3: Configure Environment Variables

In n8n, set the following environment variables (Settings > Environment Variables):

```
MY_EMAIL=your-email@gmail.com
COCKPIT_CMS_URL=https://your-cockpit-instance.com
WEBSITE_URL=https://your-website.com
```

### Step 4: Update Credential IDs

In each workflow, you'll need to update the credential references to match your actual credential IDs. Look for nodes with credentials and update them.

### Step 5: Configure Cockpit CMS Collection

Create a `blogs` collection in Cockpit CMS with the following fields:

| Field Name        | Type                     | Required |
| ----------------- | ------------------------ | -------- |
| title             | Text                     | Yes      |
| slug              | Text                     | Yes      |
| excerpt           | Textarea                 | Yes      |
| content           | Markdown/WYSIWYG         | Yes      |
| tags              | Tags                     | No       |
| seoTitle          | Text                     | No       |
| seoDescription    | Textarea                 | No       |
| estimatedReadTime | Text                     | No       |
| author            | Text                     | No       |
| publishedAt       | Date                     | No       |
| status            | Select (draft/published) | No       |
| createdAt         | Date                     | No       |

### Step 6: Activate Workflows

1. Open each workflow in n8n
2. Click the toggle to activate them

---

## Usage

### Receiving Blog Ideas

Every day at 8 AM, you'll receive an email with 5 blog ideas based on trending topics.

### Creating a Blog

Reply to the ideas email (or send a new email with subject "Create Blog") with:

**Option 1: Select an idea by number**

```
Idea #2
```

**Option 2: Provide a custom topic**

```
Topic: How to build a design system with React and Tailwind CSS
```

**Option 3: Add additional instructions**

```
Idea #3

Please include code examples in TypeScript and focus on performance optimization.
```

### What Happens Next

1. The workflow generates a full blog post
2. Publishes it to your Cockpit CMS
3. Posts a promotional message to LinkedIn
4. Sends you a confirmation email with the blog URL

---

## Customization

### Change Research Sources

Edit the RSS feed URLs in the first workflow to add/remove sources:

- Update the `RSS - AI & Tech News` node URL
- Modify the Reddit subreddits in `RSS - Reddit Tech Subs`
- Change Dev.to tags in `RSS - Dev.to`

### Adjust AI Prompts

The AI prompts can be customized in:

- `OpenRouter - Generate Ideas` node (for idea generation)
- `OpenRouter - Write Blog` node (for blog writing)

### Change Trigger Schedule

Edit the `Daily 8 AM Trigger` node to change when ideas are generated.

### Add More Platforms

You can extend the publishing workflow to post to:

- Twitter/X
- Medium
- Dev.to
- Your own newsletter

---

## Troubleshooting

### No Ideas Received

- Check if the RSS feeds are working
- Verify your Gmail OAuth2 credentials
- Check n8n execution logs

### Blog Not Publishing

- Verify Cockpit CMS API credentials
- Check if the `blogs` collection exists
- Review the collection field structure

### LinkedIn Not Posting

- Refresh LinkedIn OAuth2 credentials
- Ensure you have posting permissions
- Check LinkedIn API rate limits

---

## Support

If you encounter issues:

1. Check n8n execution logs for detailed error messages
2. Verify all credentials are properly configured
3. Ensure environment variables are set correctly
