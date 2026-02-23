const variableRegex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;

export const extractVariables = (content: string): string[] => {
  const values = new Set<string>();
  let match: RegExpExecArray | null;
  while ((match = variableRegex.exec(content)) !== null) {
    values.add(match[1]);
  }
  return [...values];
};

export const renderTemplate = (content: string, vars: Record<string, string>): string => {
  return content.replace(variableRegex, (_, key: string) => {
    const value = vars[key];
    if (!value || value.trim() === "") {
      throw new Error(`Missing variable ${key}`);
    }
    return value;
  });
};
