const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the partition key", () => {
    const event = { partitionKey : "1"}; 
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });
});

it("Returns trivial key that always returns the same output given the same input (deterministic)", () => {
  const trivialKey = deterministicPartitionKey(1);
  const trivialKeyCopy = deterministicPartitionKey(1);
  expect(trivialKey).toEqual(trivialKeyCopy);
});

describe("deterministicPartitionKey", () => {
  it("Returns the stringified partition key when passing non-string", () => {
    const event = { partitionKey : 1}; 
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it('Generates a shorter partition key when the candidate exceeds the maximum length', () => {
    const longCandidate = 'a'.repeat(300);
    const event = { partitionKey: longCandidate };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });
});