
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const COLORTERM: string;
	export const HYPRLAND_CMD: string;
	export const XDG_SESSION_PATH: string;
	export const NVM_INC: string;
	export const TERM_PROGRAM_VERSION: string;
	export const XDG_BACKEND: string;
	export const NODE: string;
	export const npm_config_ignore_scripts: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const LC_ADDRESS: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_check_watch: string;
	export const LC_NAME: string;
	export const npm_config_argv: string;
	export const LIBVA_DRIVER_NAME: string;
	export const npm_config_bin_links: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const npm_package_dependencies__tauri_apps_plugin_shell: string;
	export const HL_INITIAL_WORKSPACE_TOKEN: string;
	export const NO_AT_BRIDGE: string;
	export const XCURSOR_SIZE: string;
	export const EDITOR: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_config_save_prefix: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const TAURI_ENV_PLATFORM: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_readmeFilename: string;
	export const npm_package_dependencies__tauri_apps_api: string;
	export const nvm_current_version: string;
	export const npm_package_scripts_build: string;
	export const _: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const npm_config_version_git_tag: string;
	export const LANG: string;
	export const LC_PAPER: string;
	export const npm_package_devDependencies_typescript: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_config_init_license: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__poppanator_sveltekit_svg: string;
	export const STARSHIP_SHELL: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_wrap_output: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_package_devDependencies__tauri_apps_cli: string;
	export const INIT_CWD: string;
	export const CHROME_DESKTOP: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const TAURI_ENV_PLATFORM_VERSION: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const TAURI_ENV_FAMILY: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_package_dependencies_svgo: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const HYPRLAND_INSTANCE_SIGNATURE: string;
	export const TAURI_ENV_TARGET_TRIPLE: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_config_version_git_sign: string;
	export const NVM_CD_FLAGS: string;
	export const MOZ_ENABLE_WAYLAND: string;
	export const npm_config_version_git_message: string;
	export const LC_TELEPHONE: string;
	export const TAURI_CLI_VERBOSITY: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_strict_ssl: string;
	export const DEBUGINFOD_URLS: string;
	export const LC_TIME: string;
	export const BUN_INSTALL: string;
	export const TAURI_ENV_ARCH: string;
	export const npm_package_scripts_dev: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const GDK_BACKEND: string;
	export const BROWSER: string;
	export const PATH: string;
	export const __GLX_VENDOR_LIBRARY_NAME: string;
	export const WEBKIT_DISABLE_COMPOSITING_MODE: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const GBM_BACKEND: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_license: string;
	export const MAIL: string;
	export const NVM_BIN: string;
	export const npm_config_registry: string;
	export const npm_config_ignore_optional: string;
	export const npm_package_devDependencies_postcss: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const npm_package_scripts_tauri: string;
	export const LC_NUMERIC: string;
	export const HYPRCURSOR_SIZE: string;
	export const TERM_PROGRAM: string;
	export const npm_config_init_version: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		COLORTERM: string;
		HYPRLAND_CMD: string;
		XDG_SESSION_PATH: string;
		NVM_INC: string;
		TERM_PROGRAM_VERSION: string;
		XDG_BACKEND: string;
		NODE: string;
		npm_config_ignore_scripts: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_autoprefixer: string;
		LC_ADDRESS: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_check_watch: string;
		LC_NAME: string;
		npm_config_argv: string;
		LIBVA_DRIVER_NAME: string;
		npm_config_bin_links: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		npm_package_dependencies__tauri_apps_plugin_shell: string;
		HL_INITIAL_WORKSPACE_TOKEN: string;
		NO_AT_BRIDGE: string;
		XCURSOR_SIZE: string;
		EDITOR: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		XDG_SEAT: string;
		PWD: string;
		npm_config_save_prefix: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		TAURI_ENV_PLATFORM: string;
		XDG_SESSION_TYPE: string;
		npm_package_readmeFilename: string;
		npm_package_dependencies__tauri_apps_api: string;
		nvm_current_version: string;
		npm_package_scripts_build: string;
		_: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MOTD_SHOWN: string;
		HOME: string;
		npm_config_version_git_tag: string;
		LANG: string;
		LC_PAPER: string;
		npm_package_devDependencies_typescript: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		XDG_CURRENT_DESKTOP: string;
		npm_config_init_license: string;
		npm_package_version: string;
		npm_package_devDependencies__poppanator_sveltekit_svg: string;
		STARSHIP_SHELL: string;
		WAYLAND_DISPLAY: string;
		npm_config_version_commit_hooks: string;
		npm_config_wrap_output: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_package_devDependencies__tauri_apps_cli: string;
		INIT_CWD: string;
		CHROME_DESKTOP: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_version_tag_prefix: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		TAURI_ENV_PLATFORM_VERSION: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		TAURI_ENV_FAMILY: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		npm_package_type: string;
		USER: string;
		npm_package_dependencies_svgo: string;
		VSCODE_GIT_IPC_HANDLE: string;
		HYPRLAND_INSTANCE_SIGNATURE: string;
		TAURI_ENV_TARGET_TRIPLE: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_config_version_git_sign: string;
		NVM_CD_FLAGS: string;
		MOZ_ENABLE_WAYLAND: string;
		npm_config_version_git_message: string;
		LC_TELEPHONE: string;
		TAURI_CLI_VERBOSITY: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		npm_config_strict_ssl: string;
		DEBUGINFOD_URLS: string;
		LC_TIME: string;
		BUN_INSTALL: string;
		TAURI_ENV_ARCH: string;
		npm_package_scripts_dev: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		GDK_BACKEND: string;
		BROWSER: string;
		PATH: string;
		__GLX_VENDOR_LIBRARY_NAME: string;
		WEBKIT_DISABLE_COMPOSITING_MODE: string;
		npm_package_devDependencies__sveltejs_kit: string;
		GBM_BACKEND: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_license: string;
		MAIL: string;
		NVM_BIN: string;
		npm_config_registry: string;
		npm_config_ignore_optional: string;
		npm_package_devDependencies_postcss: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		npm_package_scripts_tauri: string;
		LC_NUMERIC: string;
		HYPRCURSOR_SIZE: string;
		TERM_PROGRAM: string;
		npm_config_init_version: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
