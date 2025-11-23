---
layout: page
title: Sora Prompt Generator
permalink: /generator/
---

<div class="generator-container">

  <!-- SUBJECT: free text comes first -->
  <label for="subjectText">Subject Description:</label>
  <textarea id="subjectText" rows="3" placeholder="Describe the main subject of the scene (e.g., a lone wizard reading a glowing book in a vast library)..."></textarea>

  <!-- Optional subject presets -->
  <label for="subjectSelect">Subject Preset (optional):</label>
  <select id="subjectSelect"></select>

  <!-- ENVIRONMENT / SETTING -->
  <label for="environmentSelect">Environment / Setting:</label>
  <select id="environmentSelect"></select>

  <!-- MOOD / TONE -->
  <label for="moodSelect">Mood / Tone:</label>
  <select id="moodSelect"></select>

  <!-- LIGHTING -->
  <label for="lightingSelect">Lighting:</label>
  <select id="lightingSelect"></select>

  <!-- CAMERA TYPE -->
  <label for="cameraSelect">Camera Type:</label>
  <select id="cameraSelect"></select>

  <!-- CAMERA MOVEMENT -->
  <label for="movementSelect">Camera Movement:</label>
  <select id="movementSelect"></select>

  <!-- ART STYLE -->
  <label for="styleSelect">Art Style:</label>
  <select id="styleSelect"></select>

  <!-- ATMOSPHERIC EFFECTS -->
  <label for="effectsSelect">Atmospheric Effects:</label>
  <select id="effectsSelect"></select>

  <!-- GENERATE BUTTON -->
  <button id="generateBtn">Generate Prompt</button>

  <!-- OUTPUT -->
  <h2>Generated Prompt</h2>
  <textarea id="output" rows="8"></textarea>

</div>

<script src="/js/app.js"></script>
<link rel="stylesheet" href="/assets/css/generator.css">

