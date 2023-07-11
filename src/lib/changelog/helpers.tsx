export const getCategoryCounts = (body: string): React.ReactNode[] => {
  try {
    const parts = body.split(/<h2>(.*)<\/h2>/).filter(x => !!x);

    let output: React.ReactNode[] = [];

    parts.forEach((part, index) => {
      if (!part.includes('<ul>')) {
        output.push(
          <><b>{parts[index + 1].match(/<li>/g).length}</b> {parts[index]}</>
        );
      }
    });

    return output;
  } catch {
    return null;
  }
};
