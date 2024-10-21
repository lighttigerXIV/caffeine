use std::{fs, path::PathBuf, process::Command};

use dirs::data_local_dir;

fn get_lock_file_path() -> PathBuf {
    let mut path = data_local_dir().unwrap();
    path.push("dev-lighttigerxiv-caffeine/session.lock");
    path
}

fn write_lock_file(id: &str) {
    let lock_file_path = get_lock_file_path();
    let local_dir = lock_file_path.parent().unwrap();

    if !local_dir.exists() {
        fs::create_dir_all(local_dir).expect("Error creating local directory");
    }

    fs::write(lock_file_path, &id.as_bytes()).expect("Error writing lock file");
}

fn get_session_id() -> String {
    return fs::read_to_string(get_lock_file_path()).expect("Error reading lock file");
}

#[tauri::command]
pub fn enable_caffeine() {
    let command = Command::new("sh")
        .arg("-c")
        .arg("gdbus call --session --dest org.freedesktop.ScreenSaver --object-path /org/freedesktop/ScreenSaver --method org.freedesktop.ScreenSaver.Inhibit 'Caffeine' 'Caffeine app - Prevent from locking screen'")
        .output()
        .expect("Error running command");

    if command.status.success() {
        let output = String::from_utf8_lossy(&command.stdout).to_string();
        let id = output.replace("(uint32 ", "").replace(",)", "");

        write_lock_file(&id);
    }
}

#[tauri::command]
pub fn disable_caffeine() {
    let id = get_session_id();

    Command::new("sh")
        .arg("-c")
        .arg(format!("gdbus call --session --dest org.freedesktop.ScreenSaver --object-path /org/freedesktop/ScreenSaver --method org.freedesktop.ScreenSaver.UnInhibit {id}"))
        .spawn()
        .expect("Error running cancel command");

    fs::remove_file(get_lock_file_path()).expect("Error removing lock file");
}
