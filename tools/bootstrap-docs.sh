#!/usr/bin/env sh
# bootstrap-docs.sh
# Creates the documentation skeleton for The Long Reign.
# Idempotent: never overwrites existing files.

set -e

REPO_ROOT="$HOME/Projects/the-long-reign"
DOCS_DIR="${REPO_ROOT}/docs"

dirs_created=0
files_created=0
files_skipped=0

# ---- Template ----
write_template() {
    file="$1"
    if [ -f "$file" ]; then
        files_skipped=$((files_skipped + 1))
        return
    fi
    cat <<'EOF' > "$file"
---
title:
id:
version: 0.1.0
status: Draft

author:

last_updated:

depends_on: []

used_by: []

tags: []
---

# Purpose

TODO

---

# Overview

TODO

---

# Notes

TODO
EOF
    files_created=$((files_created + 1))
}

# ---- Directory helper ----
ensure_dir() {
    dir="$1"
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir"
        dirs_created=$((dirs_created + 1))
    fi
}

# =============================================
echo "Bootstrapping documentation skeleton..."
echo ""

# ---- Create directories ----
ensure_dir "${DOCS_DIR}/00-foundation"
ensure_dir "${DOCS_DIR}/01-vision"
ensure_dir "${DOCS_DIR}/02-gameplay"
ensure_dir "${DOCS_DIR}/03-simulation"
ensure_dir "${DOCS_DIR}/04-economy"
ensure_dir "${DOCS_DIR}/05-world"
ensure_dir "${DOCS_DIR}/06-ui"
ensure_dir "${DOCS_DIR}/07-art"
ensure_dir "${DOCS_DIR}/08-technical"
ensure_dir "${DOCS_DIR}/09-roadmap"
ensure_dir "${DOCS_DIR}/10-decisions"
ensure_dir "${DOCS_DIR}/11-rfc"
ensure_dir "${DOCS_DIR}/glossary"
ensure_dir "${DOCS_DIR}/templates"
ensure_dir "${DOCS_DIR}/parking-lot"

# ---- 00-foundation ----
write_template "${DOCS_DIR}/00-foundation/README.md"
write_template "${DOCS_DIR}/00-foundation/Why.md"
write_template "${DOCS_DIR}/00-foundation/Principles.md"
write_template "${DOCS_DIR}/00-foundation/Documentation Standards.md"
write_template "${DOCS_DIR}/00-foundation/Project Structure.md"
write_template "${DOCS_DIR}/00-foundation/ADR Process.md"
write_template "${DOCS_DIR}/00-foundation/RFC Process.md"
write_template "${DOCS_DIR}/00-foundation/Glossary.md"

# ---- 01-vision ----
write_template "${DOCS_DIR}/01-vision/Vision Statement.md"
write_template "${DOCS_DIR}/01-vision/Core Gameplay Loop.md"
write_template "${DOCS_DIR}/01-vision/Design Pillars.md"
write_template "${DOCS_DIR}/01-vision/Respect the Player's Time.md"
write_template "${DOCS_DIR}/01-vision/The Six-Month Return Test.md"

# ---- 02-gameplay ----
write_template "${DOCS_DIR}/02-gameplay/Buildings.md"
write_template "${DOCS_DIR}/02-gameplay/Resources.md"
write_template "${DOCS_DIR}/02-gameplay/Production Chains.md"
write_template "${DOCS_DIR}/02-gameplay/Research.md"
write_template "${DOCS_DIR}/02-gameplay/Combat.md"
write_template "${DOCS_DIR}/02-gameplay/Exploration.md"
write_template "${DOCS_DIR}/02-gameplay/Progression.md"
write_template "${DOCS_DIR}/02-gameplay/Events.md"

# ---- 03-simulation ----
write_template "${DOCS_DIR}/03-simulation/Villagers.md"
write_template "${DOCS_DIR}/03-simulation/Families.md"
write_template "${DOCS_DIR}/03-simulation/Professions.md"
write_template "${DOCS_DIR}/03-simulation/Heroes.md"
write_template "${DOCS_DIR}/03-simulation/Roads and Logistics.md"
write_template "${DOCS_DIR}/03-simulation/Settlement Growth.md"
write_template "${DOCS_DIR}/03-simulation/Chronicle.md"
write_template "${DOCS_DIR}/03-simulation/Living Memories.md"
write_template "${DOCS_DIR}/03-simulation/Seasons.md"
write_template "${DOCS_DIR}/03-simulation/Weather.md"

# ---- 04-economy ----
write_template "${DOCS_DIR}/04-economy/Economy Overview.md"
write_template "${DOCS_DIR}/04-economy/Trade.md"
write_template "${DOCS_DIR}/04-economy/Crafting.md"
write_template "${DOCS_DIR}/04-economy/Luxury Goods.md"
write_template "${DOCS_DIR}/04-economy/Agriculture.md"
write_template "${DOCS_DIR}/04-economy/Industries.md"
write_template "${DOCS_DIR}/04-economy/Resource Flow.md"

# ---- 05-world ----
write_template "${DOCS_DIR}/05-world/World Overview.md"
write_template "${DOCS_DIR}/05-world/Regions.md"
write_template "${DOCS_DIR}/05-world/Capital.md"
write_template "${DOCS_DIR}/05-world/Colonies.md"
write_template "${DOCS_DIR}/05-world/Points of Interest.md"
write_template "${DOCS_DIR}/05-world/World Generation.md"

# ---- 06-ui ----
write_template "${DOCS_DIR}/06-ui/HUD.md"
write_template "${DOCS_DIR}/06-ui/Menus.md"
write_template "${DOCS_DIR}/06-ui/Accessibility.md"
write_template "${DOCS_DIR}/06-ui/Input.md"
write_template "${DOCS_DIR}/06-ui/Notifications.md"
write_template "${DOCS_DIR}/06-ui/UX Principles.md"

# ---- 07-art ----
write_template "${DOCS_DIR}/07-art/Art Direction.md"
write_template "${DOCS_DIR}/07-art/Pixel Art Style.md"
write_template "${DOCS_DIR}/07-art/Animation.md"
write_template "${DOCS_DIR}/07-art/Audio.md"
write_template "${DOCS_DIR}/07-art/Visual Identity.md"

# ---- 08-technical ----
write_template "${DOCS_DIR}/08-technical/Architecture.md"
write_template "${DOCS_DIR}/08-technical/AI Development Workflow.md"
write_template "${DOCS_DIR}/08-technical/AI Routing Policy.md"
write_template "${DOCS_DIR}/08-technical/Context Packaging Strategy.md"
write_template "${DOCS_DIR}/08-technical/Save System.md"
write_template "${DOCS_DIR}/08-technical/Data Models.md"
write_template "${DOCS_DIR}/08-technical/Performance.md"
write_template "${DOCS_DIR}/08-technical/Technology Stack.md"
write_template "${DOCS_DIR}/08-technical/Coding Standards.md"

# ---- 09-roadmap ----
write_template "${DOCS_DIR}/09-roadmap/MVP.md"
write_template "${DOCS_DIR}/09-roadmap/Vertical Slice.md"
write_template "${DOCS_DIR}/09-roadmap/Alpha.md"
write_template "${DOCS_DIR}/09-roadmap/Beta.md"
write_template "${DOCS_DIR}/09-roadmap/Release.md"
write_template "${DOCS_DIR}/09-roadmap/Future Expansions.md"

# ---- 10-decisions ----
write_template "${DOCS_DIR}/10-decisions/Project Genesis - Brainstorming History.md"
write_template "${DOCS_DIR}/10-decisions/Decision Log.md"

# ---- 11-rfc ----
write_template "${DOCS_DIR}/11-rfc/README.md"

# ---- glossary ----
write_template "${DOCS_DIR}/glossary/README.md"

# ---- templates ----
write_template "${DOCS_DIR}/templates/Design Document Template.md"
write_template "${DOCS_DIR}/templates/Technical Specification Template.md"
write_template "${DOCS_DIR}/templates/ADR Template.md"
write_template "${DOCS_DIR}/templates/RFC Template.md"
write_template "${DOCS_DIR}/templates/Glossary Entry Template.md"
write_template "${DOCS_DIR}/templates/Meeting Notes Template.md"
write_template "${DOCS_DIR}/templates/Milestone Template.md"

# ---- parking-lot ----
write_template "${DOCS_DIR}/parking-lot/Interesting Ideas.md"
write_template "${DOCS_DIR}/parking-lot/Future Mechanics.md"

# =============================================
echo ""
echo "=== Summary ==="
echo "  Directories created: ${dirs_created}"
echo "  Files created:       ${files_created}"
echo "  Files skipped:       ${files_skipped}"
echo ""
echo "Done."
