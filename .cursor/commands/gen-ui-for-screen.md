# gen-ui-for-screen

🎯 Task: Generate Jetpack Compose UI for screen from Figma design specs provided.

You will be provided:

- <specs-folder>

## Step 1: Understand the Design Context & Structure

- Check `README.md` in the design specs folder to understand the content structure.
- Do NOT read other files referenced at this step, only read `README.md`.

## Step 2: Parse the Screen Specification

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

- **Mandatory: Examine ALL @Preview functions in detail**
- **Pay special attention to @Preview functions that show:**
  - Status components and their type mappings
  - Complex content usage patterns
  - Component composition examples
- **Cross-reference Preview patterns with design spec requirements**

For components without a codeFilePath, treat them as new components.
→ Use their corresponding spec file (e.g., components/<name>.yaml) as the sole authoritative source for defining the new component.
→ Do not guess or invent props, behavior, or layout unless explicitly stated in specs.

### Summary results

- A list of all existing components, including (in table format):
  - Name
  - Code location
  - Relevant `@Preview` functions — selected based on visual or semantic match with design intent

- A list of all new components to be generated
- A reflection of each compnt’s design spec parameters vs. actual code

## **Step 4: Generate Compose UI Code**

Generate Compose UI based on the analyze result of Step 3.

Add Preview UI for:

- The Screen
- Any Newly Created Components

## **Step 5: Visual Adjustment with Screenshot**

1. Get design screenshot, compare the generated UI against it.
2. Make necessary adjustments to ensure accuracy and alignment.

### Icon handling:

- Reuse existing vector drawable if possible
- Else, use `spek-cli` command to convert SVG icons from specs

## **Step 6: Summary**

Provide a report (in table format) summarizing all identified components from the design.

Categorize them into:

- Used in generated UI
- Not used in generated UI

For components not used, include a brief explanation for each (e.g., redundant, incomplete spec, outside screen scope, etc.).

# Important to reminders

- Examine `Code Component` usecases (properties and behaviors) before use them in component.
- Run `gradlew` build command to make sure project can build success, no complie errors.
- DON'T use emoj as icon, Use `spek-cli svg-to-vd` cli command to convert svg icon to android vector drawable. Run `spek-cli svg-to-vd -h` for discover usage pattern.

This command will be available in chat with /gen-ui-for-screen
