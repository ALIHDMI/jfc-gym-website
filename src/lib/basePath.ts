export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(
  /\/$/,
  "",
);

/** Prefix local asset paths for GitHub Pages (`NEXT_PUBLIC_BASE_PATH`). */
export function assetPath(path: string) {
  return withBasePath(path);
}

export function withBasePath(path: string) {
  if (!path) return BASE_PATH || "";
  if (/^(https?:)?\/\//.test(path)) return path;
  if (!BASE_PATH) return path;
  if (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
}

