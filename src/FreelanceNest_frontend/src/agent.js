import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../../declarations/FreelanceNest_backend/FreelanceNest_backend.did.js';

import { AuthClient } from '@dfinity/auth-client';

const agent = new HttpAgent({ host: 'http://localhost:4943' });

const FreelanceNest_backend = Actor.createActor(idlFactory, {
  agent,
  canisterId: process.env.CANISTER_ID_FREELANCENEST_BACKEND,
});

export { FreelanceNest_backend, AuthClient };
