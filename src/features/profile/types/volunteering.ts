export type Volunteering = {
  id: string;
  /** Role or position held (e.g., "Web Developer", "Team Sub-Lead") */
  role: string;
  /** Organization or event title (e.g., "IET On Campus at IIT") */
  title: string;
  /**
   * Time period of involvement.
   * Format: "YYYY-MM" preferred (e.g., "2025-01"); "YYYY-MM to YYYY-MM" accepted for ranges.
   */
  date: string;
  /** Category or context (e.g., "Volunteering", "Event Contribution") */
  category: string;
  /** Optional rich text description; Markdown and line breaks supported. */
  description?: string;
  /** Optional URL to reference material, site, or certificate. */
  referenceLink?: string;
};