/**
 * ------------------------------------------------------------------
 * NexfinAI — central site configuration
 * ------------------------------------------------------------------
 * This is the ONLY file you need to edit for links and branding.
 *
 * TODO(deploy): replace `your-org` with your GitHub organization or
 * username before deploying. Also update the matching placeholders in
 * index.html (canonical / Open Graph / JSON-LD URLs).
 */

/** GitHub organization or username (used only for occasional public releases). */
export const GITHUB_ORG = 'nexfinai'

/** Main repository name (used only if/when a public release exists). */
export const GITHUB_REPO = 'nexfinai'

/**
 * Optional GitHub URL.
 * NexfinAI is a closed-source project; this is reserved for the rare
 * tool or library we choose to release publicly. Leave empty to hide
 * GitHub links entirely.
 */
export const GITHUB_URL = `https://github.com/${GITHUB_ORG}/`

/** Canonical site URL (GitHub Pages root site for the org). */
export const SITE_URL = `https://${GITHUB_ORG}.github.io`

/** LinkedIn company page. */
export const LINKEDIN_URL = 'https://www.linkedin.com/company/nexfinai'

/**
 * Contact email or form URL.
 * Leave as an empty string until it exists — buttons render a disabled
 * "coming soon" state instead of a dead link.
 */
export const CONTACT_URL = ''

/* ---------------- Branding ---------------- */

export const SITE_NAME = 'NexfinAI'

export const SITE_TAGLINE = 'Intelligence for the Next Era of Finance'

export const SITE_DESCRIPTION =
  'NexfinAI applies AI and quantitative methods to crypto, prediction markets, forex, and gold through proprietary research and systematic trading systems.'