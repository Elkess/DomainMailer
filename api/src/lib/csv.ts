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

  const headers = lines[0].split(",").map((header) => header.trim());
  
  if (!headers.includes("email")) {
    throw new Error("Missing required CSV column: email");
  }

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((value) => value.trim());
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] ?? "";
    });

    return {
      companyName: row.company_name || "",
      domainName: row.domain_name || "",
      firstName: row.first_name || "",
      email: row.email.trim().toLowerCase(),
      customFields: {}
    };
  });
};

export const parseSheetData = (rows: string[][]): ParsedLead[] => {
  if (rows.length <= 1) {
    return [];
  }

  const headers = rows[0].map((header) => header.trim().toLowerCase());
  
  if (!headers.includes("email")) {
    throw new Error("Missing required column: email");
  }

  return rows.slice(1).map((values) => {
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index]?.trim() || "";
    });

    if (!row.email) {
      throw new Error("Empty email field found");
    }

    return {
      companyName: row.company_name || row.companyname || "",
      domainName: row.domain_name || row.domainname || "",
      firstName: row.first_name || row.firstname || "",
      email: row.email.trim().toLowerCase(),
      customFields: {}
    };
  }).filter(lead => lead.email); // Filter out rows without email
};
