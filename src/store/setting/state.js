// Initial Setting State
export const initialState = {
  saveLocal: "sessionStorage",
  storeKey: "huisetting",
  setting: {
    app_name: {
      value: "Hope UI",
    },
    theme_scheme_direction: {
      value: "rtl",
    },
    theme_scheme: {
      value: "light",
    },
    theme_style_appearance: {
      value: ["theme-default"],
    },
    theme_color: {
      colors: {
        "--{{prefix}}primary": "#278036",
        "--{{prefix}}info": "#d592ff",
      },
      value: "theme-color-default",
    },
    theme_transition: {
      value: null,
    },
    theme_font_size: {
      value: "theme-fs-md",
    },
    page_layout: {
      value: "container-fluid",
    },
    header_navbar: {
      value: "default",
    },
    header_banner: {
      value: "default",
    },
    sidebar_color: {
      value: "sidebar-white",
    },
    sidebar_type: {
      value: ["sidebar-soft"],
    },
    sidebar_menu_style: {
      value: "navs-rounded-all",
    },
    footer_style: {
      value: "default",
    },
    body_font_family: {
      value: null,
    },
    heading_font_family: {
      value: null,
    },
  },
};

// Default Setting State
export const defaultState = {
  saveLocal: "sessionStorage",
  storeKey: "huisetting",
  setting: {
    app_name: {
      target: '[data-setting="app_name"]',
      choices: [],
      type: "text",
      value: "Hope UI",
    },
    theme_scheme_direction: {
      target: "html",
      choices: ["ltr", "rtl"],
      type: "layout_design",
      value: "rtl",
    },
    theme_scheme: {
      target: "body",
      choices: ["light", "dark", "auto"],
      type: "layout_design",
      value: "light",
    },
    theme_style_appearance: {
      target: "body",
      choices: ["theme-default", "theme-flat", "theme-bordered", "theme-sharp"],
      type: "layout_design",
      value: ["theme-default"],
    },
    theme_color: {
      target: "body",
      choices: [
        "theme-color-blue",
        "theme-color-red",
        "theme-color-purple",
        "theme-color-cyan",
        "theme-color-green",
        "theme-color-default",
      ],
      type: "default",
      colors: {
        "--{{prefix}}primary": "#50b5ff",
        "--{{prefix}}info": "#d592ff",
      },
      value: "theme-color-default",
    },
    theme_transition: {
      target: "body",
      choices: ["theme-without-animation", "theme-with-animation"],
      type: "layout_design",
      value: null,
    },
    theme_font_size: {
      target: "html",
      choices: ["theme-fs-sm", "theme-fs-md", "theme-fs-lg"],
      type: "layout_design",
      value: "theme-fs-md",
    },
    page_layout: {
      target: "#page_layout",
      choices: ["container", "container-fluid"],
      type: "layout_design",
      value: "container-fluid",
    },
    header_navbar: {
      target: ".iq-navbar",
      choices: [
        "default",
        "fixed",
        "navs-sticky",
        "nav-glass",
        "navs-transparent",
        "boxed",
        "hidden",
      ],
      type: "layout_design",
      value: "default",
    },
    header_banner: {
      target: ".iq-banner",
      choices: ["default", "navs-bg-color", "hide"],
      type: "layout_design",
      value: "default",
    },
    sidebar_color: {
      target: '[data-toggle="main-sidebar"]',
      choices: [
        "sidebar-white",
        "sidebar-dark",
        "sidebar-color",
        "sidebar-transparent",
      ],
      type: "layout_design",
      value: "sidebar-white",
    },
    sidebar_type: {
      target: '[data-toggle="main-sidebar"]',
      choices: ["sidebar-hover", "sidebar-mini", "sidebar-soft"],
      type: "layout_design",
      value: ["sidebar-soft"],
    },
    sidebar_menu_style: {
      target: '[data-toggle="main-sidebar"]',
      choices: [
        "navs-rounded",
        "navs-rounded-all",
        "navs-pill",
        "navs-pill-all",
      ],
      type: "layout_design",
      value: "navs-rounded-all",
    },
    footer_style: {
      target: ".footer",
      choices: ["sticky", "default"],
      type: "layout_design",
      value: "default",
    },
    body_font_family: {
      target: "body",
      choices: [],
      type: "variable",
      value: "Inter",
    },
    heading_font_family: {
      target: "heading",
      choices: [],
      type: "variable",
      value: "Inter",
    },
  },
};
