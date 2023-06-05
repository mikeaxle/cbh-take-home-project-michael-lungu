# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- Removed unnecessary nesting: The original code had excessive nesting with multiple if statements. I simplified it by removing some of the nesting to improve readability.

- Utilized optional chaining: I used optional chaining (?.) when assigning the candidate variable to event.partitionKey. This helps avoid nested if statements and provides a concise way to check for the existence of event.partitionKey.

- Removed TRIVIAL_PARTITION_KEY constant because it's only used once in the code and can be directly assigned to the candidate if event.partitionKey is undefined.

- Consistent data type handling: Instead of checking the candidate data type twice, I moved the check to a single location. This ensures that the candidate is always a string or gets converted to a string using JSON.stringify().

- Reordered the conditions: I reordered the conditions in a logical manner to avoid unnecessary checks. If candidate is already defined, there's no need to check its length before proceeding to other conditions.

- Refactored `createHash` into a function because the same logic is used in multiple places.

- Added code comments: Adding descriptive comments at appropriate places to further enhance code readability, especially for complex logic.