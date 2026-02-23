const placeholderRegex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;

export const extractVariables = (template: string): string[] => {
  const set = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = placeholderRegex.exec(template)) !== null) {
    set.add(match[1]);
  }
  return [...set];
};

export const renderTemplate = (template: string, data: Record<string, string>): string => {
  return template.replace(placeholderRegex, (_, key: string) => {
    if (!(key in data) || data[key] === "") {
      throw new Error(`Missing required variable: ${key}`);
    }
    return data[key];
  });
};
