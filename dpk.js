const crypto = require("crypto");

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };


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