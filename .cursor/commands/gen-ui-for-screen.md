# gen-ui-for-screen

🎯 Task: Generate ReactNative UI Web for screen from Figma design specs provided.

You will be provided:

- <specs-folder>

## Step 1: Understand the Design Context & Structure

- Check `README.md` in the design specs folder to understand the content structure.
- Do NOT read other files referenced at this step, only read `README.md`.

## Step 2: Parse the Screen Specification

- Analyze preview of screen in `/previews/<screen_name>.png` to understand visualize structure.
- Read main screen spec file identified in Step 1 (e.g., `screen.yaml` or `frame.yaml`).
- Read it thoroughly from top to bottom.
- ❌ Do not retrieve or read any referenced component files at this step.
- **FOR EACH INSTANCE_REF in the specification:**
  - Retrieve the corresponding component spec file
  - Cross-reference with existing code components
  - Note any status/variant mappings

📌 Construct a **UI hierarchy diagram** based solely on the screen spec.

Note:

- Diagram must included component's fields.
- Diagram must be non-mermaid format

## \*\*Step 3: Identify Code Component Definitions in Design Specs

For each component node in the design, check if it has a codeFilePath field.
→ If yes, locate and load the corresponding source file.

- **Mandatory: Examine ALL component's StoryBook in detail**
- **Pay special attention to Stories that show:**
  - Status components and their type mappings
  - Complex content usage patterns
  - Component composition examples
- **Cross-reference Story patterns with design spec requirements**

For components without a codeFilePath, treat them as new components.
→ Use their corresponding spec file (e.g., components/<name>.yaml) as the sole authoritative source for defining the new component.
→ Do not guess or invent props, behavior, or layout unless explicitly stated in specs.

### Summary results

- A list of all existing components, including (in table format):
  - Name
  - Code location

- A list of all new components to be generated
- A reflection of each compnt’s design spec parameters vs. actual code

## **Step 4: Generate UI Code**

- **Before writing JSX**, read the `screen-layout-patterns` rule (`.cursor/rules/screen-layout-patterns.mdc`) and select the correct screen skeleton (Pattern A, B, or C) based on the design spec's header structure.
- Generate UI based on the analyze result of Step 3, using the selected skeleton as the structural foundation.
- Introduce new route to the screen as page.
- Navigate to the page.

## **Step 5: Visual Adjustment with Screenshot** - Use Subagent

Use built-in `Cursor Browser` that already resized in mobile screen size to open app for capture screenshot.

1. Get design screenshot in folder `<specs-folder/previews/<screen_name>.png` , compare the generated UI against it.
2. Make necessary adjustments to ensure accuracy and alignment.

_This task is complicated, MUST summon subagent_

## **Step 6: Summary**

Provide a report (in table format) summarizing all identified components from the design.

Categorize them into:

- Used in generated UI
- Not used in generated UI

For components not used, include a brief explanation for each (e.g., redundant, incomplete spec, outside screen scope, etc.).

# Important reminders

- Examine `Code Component` story (properties and behaviors) before use them in component.
- Following existing css design system (typography, colors, gradients, padding, spacing, ...)

## Lessons Learned (Common Pitfalls)

### Each list item may have unique content

- When the design shows a list of items, carefully check each item's `exposedInstances` and `overrides` in main spec yaml — they often have different icons, labels, or data.
- Do NOT copy-paste the first item's props for all items. Map each item individually from the spec.

### Negative margin overlap pattern

- The header-body overlap uses `spacing: -xx` in the Container's auto-layout, which translates to `marginTop: -xx` on the Body.
- The header's `paddingBottom: xx` creates the space that the body overlaps into. Both values must stay in sync.

This command will be available in chat with /gen-ui-for-screen
