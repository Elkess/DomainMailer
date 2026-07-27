export interface ParsedLead {
  companyName: string;
  domainName: string;
  firstName: string;
  email: string;
  customFields: Record<string, string>;
}

export const dedupeLeadsByEmail = (leads: ParsedLead[]): ParsedLead[] => {
  const seenEmails = new Set<string>();
  const uniqueLeads: ParsedLead[] = [];

  for (const lead of leads) {
    const normalizedEmail = lead.email.trim().toLowerCase();
    if (!normalizedEmail || seenEmails.has(normalizedEmail)) {
      continue;
    }

    seenEmails.add(normalizedEmail);
    uniqueLeads.push({
      ...lead,
      email: normalizedEmail
    });
  }

  return uniqueLeads;
};

export const parseLeadCsv = (csv: string): ParsedLead[] => {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) {
    return [];
  }

  const headers = lines[0]
    .split(",")
    .map((header) => header.trim().replace(/^["']|["']$/g, "").toLowerCase());
  
  const emailIndex = headers.findIndex(
    (h) => h === "email" || h === "email address" || h === "email_address" || h === "e-mail" || h === "mail"
  );

  if (emailIndex === -1) {
    throw new Error("Missing required CSV column: email (accepts email, Email, Email Address, e-mail)");
  }

  const firstNameIndex = headers.findIndex((h) => h === "first_name" || h === "firstname" || h === "first name" || h === "name");
  const companyIndex = headers.findIndex((h) => h === "company_name" || h === "companyname" || h === "company" || h === "company name");
  const domainIndex = headers.findIndex((h) => h === "domain_name" || h === "domainname" || h === "domain" || h === "website");

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((value) => value.trim().replace(/^["']|["']$/g, ""));
    const rawEmail = values[emailIndex] ? values[emailIndex].trim().toLowerCase() : "";

    return {
      companyName: companyIndex !== -1 ? (values[companyIndex] || "") : "",
      domainName: domainIndex !== -1 ? (values[domainIndex] || "") : "",
      firstName: firstNameIndex !== -1 ? (values[firstNameIndex] || "") : "",
      email: rawEmail,
      customFields: {}
    };
  }).filter((lead) => lead.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email));
};

export const parseSheetData = (rows: string[][]): ParsedLead[] => {
  if (rows.length <= 1) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim().replace(/^["']|["']$/g, "").toLowerCase());
  
  const emailIndex = headers.findIndex(
    (h) => h === "email" || h === "email address" || h === "email_address" || h === "e-mail" || h === "mail"
  );

  if (emailIndex === -1) {
    throw new Error("Missing required column: email (accepts email, Email, Email Address, e-mail)");
  }

  return rows.slice(1).map((values) => {
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index]?.trim() || "";
    });

    const rawEmail = values[emailIndex]?.trim().toLowerCase() || "";

    return {
      companyName: row.company_name || row.companyname || row.company || "",
      domainName: row.domain_name || row.domainname || row.domain || row.website || "",
      firstName: row.first_name || row.firstname || row.name || "",
      email: rawEmail,
      customFields: {}
    };
  }).filter(lead => lead.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email));
};
