# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here


### Ticket 1: Update Agent table to include custom ID field
#### Description:
The first step is to update the Agent table in the database to include a custom ID field. This will allow Facilities to save their own IDs for each Agent they work with.

#### Acceptance Criteria:
- Add a new column called `custom_id` to the Agent table.
- The "custom_id" column should be of `VAR_CHAR` data type to store the custom ID provided by the Facilities.
- The `custom_id` column should be nullable, as not all Facilities may choose to provide a custom ID.
- the `custom_id` column should be unique, as each Agent should have a unique custom ID if NOT NULL.
- Existing Agents should have a null value in the `custom_id` column by default.
- Provide a migration script to update the database schema and add the new column.
- Test the migration on a development environment to ensure it executes successfully.

#### Effort Estimate: 2 hours

#### Implementation Details:
- Write a database migration script to add the `custom_id` column to the Agent table.
- Run the migration script on a development environment and verify that the column is added correctly.
- Document the migration process for future reference.

*** 

### Ticket 2: Update getShiftsByFacility function to include custom Agent IDs
#### Description:
Currently, the `getShiftsByFacility` function returns all Shifts worked by a Facility for a given quarter, but it does not include the custom IDs associated with the Agents. We need to modify this function to include the custom Agent IDs when retrieving the Shifts.

#### Acceptance Criteria:
- Modify the `getShiftsByFacility` function to retrieve the custom Agent IDs along with the Shifts.
- Update the model returned by the function to include the custom Agent IDs.
- Ensure that the existing functionality of the function remains intact.
- Write unit tests to validate the updated function behavior.

#### Effort Estimate: 4 hours

#### Implementation Details:
- Modify the `getShiftsByFacility` function code to include the retrieval of custom Agent IDs from the Agent table when fetching Shifts.
- Update the model returned by the function to include the custom Agent IDs.
- Write unit tests to verify that the function returns the expected results, including the custom Agent IDs.

***

### Ticket 3: Update generateReport function to use custom Agent IDs
#### Description:
Currently, the `generateReport` function converts Shifts into a PDF report. However, it uses the internal database IDs of Agents. We need to update the function to use the custom Agent IDs provided by the Facilities when generating reports.

### Acceptance Criteria:
- Modify the `generateReport` function to use the custom Agent IDs if available, instead of internal database IDs.
- Update the PDF report generation logic to include the custom Agent IDs.
- Ensure that the existing functionality of the function remains intact and records without Custom Agent IDs do not break.
- Write unit tests to validate the updated function behavior.

#### Effort Estimate: 6 hours

#### Implementation Details:
- Modify the `generateReport` function code to use the custom Agent IDs (if available) when generating the PDF report.
- Update the PDF generation logic to include the custom Agent IDs in the report.
- Write unit tests to verify that the function generates reports correctly with the custom Agent IDs.

***

### Ticket 4: Update Facility UI to allow saving custom Agent IDs

#### Description:
To enable Facilities to save custom IDs for Agents, we need to update the user interface (UI) to include a feature that allows them to input and save custom IDs.

#### Acceptance Criteria:
- Design and implement a UI component for Facilities to input and save custom IDs for Agents.
- Integrate the UI component into the existing Facility management interface.
- Validate the input to ensure it meets any defined criteria or constraints.
- Save the custom IDs to the Agent table in the database when the Facility saves the changes.
- Update any relevant documentation or tooltips to guide Facilities in using the new feature.

#### Effort Estimate: 8 hours
#### Implementation Details:
- Design a UI component and add to existing Figma designs that allows Facilities to input and save custom IDs for Agents
- Implement the UI component according to the design specifications.
- Integrate the UI component into the existing Facility management interface.
- Implement input validation to ensure the custom IDs meet any defined criteria or constraints.
- Submit validated input to the API endpoint that handles the saving of custom IDs to the Agent table.
- Test the new feature on various devices and browsers to ensure compatibility.