use features::caffeine::{disable_caffeine, enable_caffeine};
use tauri::{
    menu::{Menu, MenuItem},
    tray::TrayIconBuilder,
    Manager,
};

pub mod features;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let show_item = MenuItem::with_id(app, "show", "Show", true, None::<&str>)?;
            let quit_item = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;

            let menu =
                Menu::with_items(app, &[&show_item, &quit_item]).expect("Error creating menu");

            TrayIconBuilder::new()
                .menu(&menu)
                .icon(app.default_window_icon().unwrap().clone())
                .on_menu_event(|app, event| match event.id.as_ref() {
                    "show" => {
                        if let Some(window) = app.get_webview_window("main") {
                            window.center().unwrap();
                            window.show().unwrap();
                        }
                    }
                    _ => {
                        disable_caffeine();
                    }
                })
                .build(app)
                .unwrap();

            Ok(())
        })
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![disable_caffeine, enable_caffeine])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
