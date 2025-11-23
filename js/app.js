async function loadPresets() {
    const cameras = await fetch("/presets/cameras.json").then(r => r.json());
    const styles = await fetch("/presets/styles.json").then(r => r.json());
    const lighting = await fetch("/presets/lighting.json").then(r => r.json());
    const subjects = await fetch("/presets/subjects.json").then(r => r.json());
    const movement = await fetch("/presets/movement.json").then(r => r.json());
    const environment = await fetch("/presets/environment.json").then(r => r.json());
    const mood = await fetch("/presets/mood.json").then(r => r.json());
    const effects = await fetch("/presets/effects.json").then(r => r.json());

    populateDropdown("cameraSelect", cameras.cameras);
    populateDropdown("styleSelect", styles.styles);
    populateDropdown("lightingSelect", lighting.lighting);
    populateDropdown("subjectSelect", subjects.subjects);
    populateDropdown("movementSelect", movement.movement);
    populateDropdown("environmentSelect", environment.environment);
    populateDropdown("moodSelect", mood.mood);
    populateDropdown("effectsSelect", effects.effects);
}

function populateDropdown(selectId, items) {
    const select = document.getElementById(selectId);

    // Add blank/default option
    const blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "— Select —";
    select.appendChild(blank);

    // Add real preset values
    items.forEach(item => {
        const option = document.createElement("option");
        option.value = item.prompt;
        option.textContent = item.label;
        select.appendChild(option);
    });
}

function buildPrompt() {
    const parts = [];

    // Subject text has highest priority
    const subjectText = document.getElementById("subjectText").value.trim();
    const subjectPreset = document.getElementById("subjectSelect").value;

    if (subjectText !== "") {
        parts.push(subjectText);
    } else if (subjectPreset !== "") {
        parts.push(subjectPreset);
    }

    // Helper to add only if selected
    function add(id) {
        const v = document.getElementById(id).value;
        if (v && v.trim() !== "") parts.push(v);
    }

    // Cinematography-aligned order
    add("environmentSelect");
    add("moodSelect");
    add("lightingSelect");
    add("cameraSelect");
    add("movementSelect");
    add("styleSelect");
    add("effectsSelect");

    // Final assembly
    const result = parts.join(". ") + ".";

    document.getElementById("output").value = result;
}

document.getElementById("generateBtn").addEventListener("click", buildPrompt);

loadPresets();
