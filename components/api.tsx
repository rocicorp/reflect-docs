import { Callout } from "nextra/components";
import style from "./api.module.css";

type ResourceProps = {
  method: string;
  path: string;
  body?: string;
};

export const Resource = ({
  method,
  path,
  body,
}: ResourceProps): JSX.Element => {
  // The hard-coded styling is copied from the result of a markdown codeblock.
  return (
    <div>
      <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
        <pre
          className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
          data-theme="default"
        >
          <code className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10">
            <span className="line">
              <span className={style.method}>{method} </span>
              <span className={style.baseURL}>
                https://api.reflect-server.net/v1
              </span>
              <span className={style.path}>
                {tokenize(`/apps/{app-id}${path}`).map((part) => (
                  <span
                    className={part.startsWith("{") ? style.placeHolder : ""}
                  >
                    {part}
                  </span>
                ))}
              </span>
            </span>
          </code>
        </pre>
      </div>
      <p className="nx-mt-6 nx-leading-7 first:nx-mt-0">
        <h4>Example</h4>
      </p>
      <div className="nextra-code-block nx-relative nx-mt-6 first:nx-mt-0">
        <pre
          className="nx-bg-primary-700/5 nx-mb-4 nx-overflow-x-auto nx-rounded-xl nx-subpixel-antialiased dark:nx-bg-primary-300/10 nx-text-[.9em] contrast-more:nx-border contrast-more:nx-border-primary-900/20 contrast-more:nx-contrast-150 contrast-more:dark:nx-border-primary-100/40 nx-py-4"
          data-language="bash"
          data-theme="default"
        >
          <code
            className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
            dir="ltr"
            data-language="bash"
            data-theme="default"
          >
            <span className="line">
              curl -X {method}{" "}
              'https://api.reflect-server.net/v1/apps/&#123;app-id&#125;{path}'
              \
            </span>
            <span className="line">
              {"     "}
              -H 'Authorization: Basic &#123;api-key&#125;' {body ? "\\" : ""}
            </span>
            {body ? (
              <span className="line">
                {"     "}
                -d '{body}'
              </span>
            ) : (
              ""
            )}
          </code>
        </pre>
      </div>
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

type PermissionProps = {
  name: string;
};

export const Permission = ({ name }: PermissionProps): JSX.Element => {
  return (
    <Callout emoji="🔑">
      <a href="/rest/overview#authorization">API key permission</a>{" "}
      <code
        className="nx-border-black nx-border-opacity-[0.04] nx-bg-opacity-[0.03] nx-bg-black nx-break-words nx-rounded-md nx-border nx-py-0.5 nx-px-[.25em] nx-text-[.9em] dark:nx-border-white/10 dark:nx-bg-white/10"
        dir="ltr"
      >
        <span className={style.permission}>{name}</span>
      </code>
    </Callout>
  );
};
