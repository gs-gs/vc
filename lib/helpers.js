/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
const credentialsContext = require('credentials-context');

const {
  constants: {CREDENTIALS_CONTEXT_V1_URL},
} = credentialsContext;
const CREDENTIALS_CONTEXT_V2_URL = 'https://www.w3.org/ns/credentials/v2';

const credentialContextUrls = new Set([
  CREDENTIALS_CONTEXT_V1_URL,
  CREDENTIALS_CONTEXT_V2_URL,
]);

/**
 * Asserts that a context array's first item is a credentials context.
 *
 * @param {object} options - Options.
 * @param {Array} options.context - An array of contexts.
 *
 * @throws {Error} - Throws if the first context
 *   is not a credentials context.
 *
 * @returns {undefined}
 */
function assertCredentialContext({context}) {
  // ensure first context is credentials context url
  if(credentialContextUrls.has(context[0]) === false) {
    // throw if the first context is not a credentials context
    throw new Error(
      `"${CREDENTIALS_CONTEXT_V1_URL}" or "${CREDENTIALS_CONTEXT_V2_URL}"` +
        ' needs to be first in the list of contexts.'
    );
  }
}

/**
 * Checks to see if a VC has a V1 context.
 *
 * @param {object} options - Options.
 * @param {object} options.credential - A VC.
 *
 * @returns {boolean} Indicates whether the VC contains a V1 context.
 */
function hasV1CredentialContext({credential}) {
  return credential?.['@context']?.[0] === CREDENTIALS_CONTEXT_V1_URL;
}

module.exports = {
  assertCredentialContext,
  hasV1CredentialContext,
  CREDENTIALS_CONTEXT_V1_URL,
  CREDENTIALS_CONTEXT_V2_URL,
  credentialContextUrls,
};
