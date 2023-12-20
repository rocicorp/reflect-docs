import style from "./apiResource.module.css";

type APIResourceProps = {
  method: string;
  path: string;
};

const APIResource = ({ method, path }: APIResourceProps): JSX.Element => {
  // The hard-coded styling is copied from the result of a markdown codeblock.
  return (
    <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
      <pre
        className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
        data-theme="default"
      >
        <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10">
          <span className="line">
            <span className={style.method}>{method} </span>
            <span className={style.baseURL}>
              https://api.reflect-server.net
            </span>
            <span className={style.path}>
              {tokenize(`/v1/apps/{app-id}${path}`).map((part) => (
                <span className={part.startsWith("{") ? style.placeHolder : ""}>
                  {part}
                </span>
              ))}
            </span>
          </span>
        </code>
      </pre>
    </div>
  );
};

function tokenize(path: string): string[] {
  const tokens = [];
  while (path.length) {
    let end = path.length;
    if (path.startsWith("{")) {
      let pos = path.indexOf("}");
      if (pos > 0) {
        end = pos + 1;
      }
    } else {
      let pos = path.indexOf("{");
      if (pos > 0) {
        end = pos;
      }
    }
    tokens.push(path.substring(0, end));
    path = path.substring(end);
  }
  return tokens;
}

export default APIResource;
