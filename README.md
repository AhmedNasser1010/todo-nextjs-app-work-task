# Code review

## Issues
1. Task Card Edit Icon Disappears: **DONE**
When the edit modal opens, the edit icon on the task card disappears, which is inconsistent and creates a jarring user experience.
Recommendation: Keep the edit icon visible and consistent, even when the edit modal is open. This ensures a smoother and more intuitive UI.

3. Task Card Delete Icon Disappears: **DONE**
Similar to the edit icon issue, the delete icon disappears when the remove modal is opened.
Recommendation: Ensure that the delete icon remains visible and consistent for better UX and visual feedback.


2. Edit Action Triggered Without Changes: **DONE**
The edit action is enabled and triggered even if no changes are made to the task's details, leading to unnecessary operations.
Recommendation: Only enable and allow the edit action to be triggered if there are actual changes detected in the task details.


4. Edit Resets Completed Task to Uncompleted: **DONE**
Editing a completed task causes it to reset to an uncompleted state, which is a significant functional issue.
Recommendation: Preserve the task's "completed" status during the edit operation unless explicitly changed by the user.


5. Scrolling Issue: **DONE**
When the number of task cards exceeds the page height, the cards are not scrollable, making some tasks inaccessible.
Recommendation: Implement proper scrolling or pagination to ensure all task cards are accessible, regardless of their quantity.


6. Excessive Component Splitting: **Hmmm**
The codebase contains an overabundance of small, fragmented components (e.g., the "Modal" folder in the uploaded image). While modularization is good, excessive splitting can increase complexity and reduce maintainability.
Recommendation: Merge closely related components into a single reusable component. For example:
Consolidate components like DialogTitle, DialogHeader, and DialogFooter into a single Dialog component with configurable slots or props.
Simplify component structure to improve clarity and reduce unnecessary boilerplate.
