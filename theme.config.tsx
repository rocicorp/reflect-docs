import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'
import styles from '/styles/config.module.css'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg width="195" height="44" viewBox="0 0 177 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
        <path d="M56 33.5484V6.45161H68.6075C70.5645 6.45161 72.233 6.82796 73.6129 7.58064C74.9928 8.33333 76.0466 9.36201 76.7742 10.6667C77.5269 11.9462 77.9032 13.414 77.9032 15.0699C77.9032 16.7509 77.5269 18.2186 76.7742 19.4731C76.0466 20.7276 74.9803 21.7061 73.5753 22.4086C72.1703 23.1111 70.4767 23.4624 68.4946 23.4624H60.2527V18.5323H68.1183C69.2975 18.5323 70.2258 18.2312 70.9032 17.629C71.6057 17.0269 71.957 16.1738 71.957 15.0699C71.957 13.9659 71.6183 13.1129 70.9409 12.5108C70.2634 11.8835 69.3477 11.5699 68.1936 11.5699H60.328L61.8333 10.4409V33.5484H56ZM71.7312 33.5484L64.129 20.9409H70.414L78.6183 33.5484H71.7312Z" fill="#2A2C2E"/>
        <path d="M89.0016 34C87.0697 34 85.351 33.5986 83.8456 32.7957C82.3654 31.9677 81.1987 30.7885 80.3456 29.2581C79.5177 27.7025 79.1037 25.871 79.1037 23.7634C79.1037 21.8817 79.5177 20.1756 80.3456 18.6452C81.1736 17.0896 82.3152 15.8477 83.7704 14.9194C85.2507 13.991 86.9693 13.5269 88.9263 13.5269C90.8833 13.5269 92.5643 13.9534 93.9693 14.8065C95.3743 15.6595 96.4406 16.8889 97.1682 18.4946C97.9209 20.1004 98.2973 22.0323 98.2973 24.2903V25.3065H82.4908V21.9194H93.5177L92.6521 22.7849C92.6521 21.9068 92.5141 21.1165 92.2381 20.414C91.9872 19.7115 91.5858 19.1595 91.0338 18.7581C90.4818 18.3315 89.7793 18.1183 88.9263 18.1183C88.0481 18.1183 87.2829 18.319 86.6306 18.7204C86.0033 19.1219 85.5141 19.7491 85.1628 20.6021C84.8367 21.4301 84.6736 22.4839 84.6736 23.7634C84.6736 25.043 84.8492 26.0968 85.2005 26.9247C85.5517 27.7527 86.0535 28.3674 86.7059 28.7688C87.3582 29.1703 88.1234 29.371 89.0016 29.371C89.9299 29.371 90.67 29.1703 91.222 28.7688C91.799 28.3423 92.2632 27.7903 92.6145 27.1129L97.6198 28.9946C96.9675 30.4749 95.9765 31.6792 94.6467 32.6075C93.317 33.5358 91.4352 34 89.0016 34Z" fill="#2A2C2E"/>
        <path d="M102.135 33.5484V12.3978C102.135 10.3907 102.675 8.82258 103.754 7.69355C104.833 6.56452 106.438 6 108.571 6H111.695V10.9301H109.286C108.182 10.9301 107.63 11.4946 107.63 12.6237V33.5484H102.135ZM98.8612 18.3441V13.9785H111.695V18.3441H98.8612ZM113.99 33.5484V6.45161H119.485V33.5484H113.99Z" fill="#2A2C2E"/>
        <path d="M131.986 34C130.054 34 128.335 33.5986 126.83 32.7957C125.349 31.9677 124.183 30.7885 123.33 29.2581C122.502 27.7025 122.088 25.871 122.088 23.7634C122.088 21.8817 122.502 20.1756 123.33 18.6452C124.158 17.0896 125.299 15.8477 126.754 14.9194C128.235 13.991 129.953 13.5269 131.91 13.5269C133.867 13.5269 135.548 13.9534 136.953 14.8065C138.358 15.6595 139.425 16.8889 140.152 18.4946C140.905 20.1004 141.281 22.0323 141.281 24.2903V25.3065H125.475V21.9194H136.502L135.636 22.7849C135.636 21.9068 135.498 21.1165 135.222 20.414C134.971 19.7115 134.57 19.1595 134.018 18.7581C133.466 18.3315 132.763 18.1183 131.91 18.1183C131.032 18.1183 130.267 18.319 129.615 18.7204C128.987 19.1219 128.498 19.7491 128.147 20.6021C127.821 21.4301 127.658 22.4839 127.658 23.7634C127.658 25.043 127.833 26.0968 128.185 26.9247C128.536 27.7527 129.038 28.3674 129.69 28.7688C130.342 29.1703 131.108 29.371 131.986 29.371C132.914 29.371 133.654 29.1703 134.206 28.7688C134.783 28.3423 135.247 27.7903 135.599 27.1129L140.604 28.9946C139.952 30.4749 138.961 31.6792 137.631 32.6075C136.301 33.5358 134.419 34 131.986 34Z" fill="#2A2C2E"/>
        <path d="M153.06 34C151.154 34 149.435 33.5986 147.904 32.7957C146.374 31.9677 145.157 30.7885 144.254 29.2581C143.376 27.7276 142.937 25.8961 142.937 23.7634C142.937 21.6308 143.376 19.7993 144.254 18.2688C145.157 16.7384 146.374 15.5717 147.904 14.7688C149.435 13.9409 151.154 13.5269 153.06 13.5269C155.645 13.5269 157.74 14.1792 159.345 15.4839C160.976 16.7885 161.992 18.5323 162.394 20.7151L156.899 21.7688C156.698 20.7903 156.272 20.0125 155.619 19.4355C154.992 18.8584 154.139 18.5699 153.06 18.5699C152.182 18.5699 151.417 18.7706 150.765 19.172C150.112 19.5735 149.598 20.1631 149.222 20.9409C148.87 21.6935 148.695 22.6344 148.695 23.7634C148.695 24.8674 148.87 25.8082 149.222 26.586C149.598 27.3638 150.112 27.9534 150.765 28.3548C151.417 28.7563 152.182 28.957 153.06 28.957C154.114 28.957 154.955 28.681 155.582 28.129C156.209 27.5771 156.661 26.7742 156.937 25.7204L162.356 26.9624C162.055 28.4427 161.503 29.7097 160.7 30.7634C159.922 31.8172 158.894 32.6201 157.614 33.172C156.36 33.724 154.842 34 153.06 34Z" fill="#2A2C2E"/>
        <path d="M172.182 33.6237C170.024 33.6237 168.418 33.0591 167.364 31.9301C166.336 30.8011 165.821 29.2581 165.821 27.3011V8.63441H171.316V26.8495C171.316 28.0036 171.918 28.5806 173.122 28.5806H176.208V33.6237H172.182ZM162.547 18.3441V13.9785H175.832V18.3441H162.547Z" fill="#2A2C2E"/>
        <path d="M20 19.3818L9.14043 8.5222L15.7965 1.86616C18.118 -0.455389 21.882 -0.455382 24.2035 1.86616C25.9894 3.65201 26.4016 6.2917 25.4395 8.47173L25.3621 8.6472H25.5539L30.7346 8.6472L20 19.3818ZM38.1338 24.2035L31.4778 30.8596L20.6182 20L31.3528 9.26543L31.3528 14.4461V14.6379L31.5283 14.5605C33.7083 13.5984 36.348 14.0106 38.1338 15.7965C40.4554 18.118 40.4554 21.882 38.1338 24.2035ZM1.86616 15.7965L8.5222 9.14043L19.3818 20L8.6472 30.7346L8.6472 25.5539V25.3621L8.47173 25.4395C6.2917 26.4016 3.65201 25.9894 1.86616 24.2035C-0.455382 21.882 -0.455389 18.118 1.86616 15.7965ZM9.26543 31.3528L20 20.6182L30.8596 31.4778L24.2035 38.1338C21.882 40.4554 18.118 40.4554 15.7965 38.1338C14.0106 36.348 13.5984 33.7083 14.5605 31.5283L14.6379 31.3528H14.4461L9.26543 31.3528Z" fill="#2A2C2E" stroke="white" strokeWidth="0.25"/>
      </svg>
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:description" content="Welcome to the Reflect documentation." />
      <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          href="favicon.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="favicon-dm.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32-dm.png"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16-dm.png"
          media="(prefers-color-scheme: dark)"
        />
    </>
  ),
  darkMode: false,
  feedback: {
    content: null
  },
  editLink: {
    text: null
  },
  nextThemes: {
    defaultTheme: 'light'
  },
  docsRepositoryBase: 'https://hello.reflect.net',
  footer: {
    text: 'Rocicorp',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath == '/') {
      return {
        titleTemplate: 'Hello, Reflect'
      }
    }
    if (asPath !== '/') {
      return {
        titleTemplate: '%s - Hello, Reflect'
      }
    }
  }
}

export default config
