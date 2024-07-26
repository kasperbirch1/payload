/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    'disable-publish': DisablePublish;
    posts: Post;
    'autosave-posts': AutosavePost;
    'draft-posts': DraftPost;
    'draft-with-max-posts': DraftWithMaxPost;
    'version-posts': VersionPost;
    'custom-ids': CustomId;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'autosave-global': AutosaveGlobal;
    'draft-global': DraftGlobal;
    'draft-with-max-global': DraftWithMaxGlobal;
    'disable-publish-global': DisablePublishGlobal;
  };
  locale: 'en' | 'es';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish".
 */
export interface DisablePublish {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  relationToAutosaves?: (string | null) | AutosavePost;
  relationToVersions?: (string | null) | VersionPost;
  relationToDrafts?: (string | null) | DraftPost;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-posts".
 */
export interface AutosavePost {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "version-posts".
 */
export interface VersionPost {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-posts".
 */
export interface DraftPost {
  id: string;
  title: string;
  description: string;
  radio?: 'test' | null;
  select?: ('test1' | 'test2')[] | null;
  blocksField?:
    | {
        text?: string | null;
        localized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  relation?: (string | null) | DraftPost;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-posts".
 */
export interface DraftWithMaxPost {
  id: string;
  title: string;
  description: string;
  radio?: 'test' | null;
  select?: ('test1' | 'test2')[] | null;
  blocksField?:
    | {
        text?: string | null;
        localized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  relation?: (string | null) | DraftWithMaxPost;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "custom-ids".
 */
export interface CustomId {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "autosave-global".
 */
export interface AutosaveGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-global".
 */
export interface DraftGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "draft-with-max-global".
 */
export interface DraftWithMaxGlobal {
  id: string;
  title: string;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disable-publish-global".
 */
export interface DisablePublishGlobal {
  id: string;
  title?: string | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}