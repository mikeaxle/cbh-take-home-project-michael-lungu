const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  // get partition key from event and assign to candidate
  let candidate = event?.partitionKey ?? '0';

  // if no partition key, create hash from event and assign to candidate
  if (!candidate) {
    const data = JSON.stringify(event);
    candidate = createHash(data);
  }

  // if candidate is not a string, stringify it
  candidate = typeof candidate !== "string" ? JSON.stringify(candidate) : candidate;

  // if candidate length is greater than max partition key length, create hash from candidate and assign to candidate
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createHash(candidate);
  }

  return candidate;
};


function createHash(input) {
  return crypto.createHash("sha3-512").update(input).digest("hex");
}