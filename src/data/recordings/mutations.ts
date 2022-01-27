import { gql } from '@apollo/client';

export const CREATE_TAG_MUTATION = gql`
  mutation TagCreate($siteId: ID!, $recordingId: ID!, $name: String!) {
    tagCreate(input: { siteId: $siteId, recordingId: $recordingId, name: $name }) {
      id
      name
    }
  }
`;

export const REMOVE_TAG_MUTATION = gql`
  mutation TagRemove($siteId: ID!, $recordingId: ID!, $tagId: ID!) {
    tagRemove(input: { siteId: $siteId, recordingId: $recordingId, tagId: $tagId }) {
      id
    }
  }
`;

export const DELETE_TAG_MUTATION = gql`
  mutation TagDelete($siteId: ID!, $tagId: ID!) {
    tagDelete(input: { siteId: $siteId, tagId: $tagId }) {
      id
    }
  }
`;

export const DELETE_TAGS_MUTATION = gql`
  mutation TagsDelete($siteId: ID!, $tagIds: [ID!]!) {
    tagsDelete(input: { siteId: $siteId, tagIds: $tagIds }) {
      id
    }
  }
`;

export const UPDATE_TAG_MUTATION = gql`
  mutation TagUpdate($siteId: ID!, $tagId: ID!, $name: String!) {
    tagUpdate(input: { siteId: $siteId, tagId: $tagId, name: $name }) {
      id
      name
    }
  }
`;

export const CREATE_NOTE_MUTATION = gql`
  mutation NoteCreate($siteId: ID!, $recordingId: ID!, $body: String!, $timestamp: Int) {
    noteCreate(input: { siteId: $siteId, recordingId: $recordingId, body: $body, timestamp: $timestamp }) {
      id
      body
      timestamp
      user {
        fullName
      }
    }
  }
`;

export const DELETE_NOTE_MUTATION = gql`
  mutation NoteDelete($siteId: ID!, $recordingId: ID!, $noteId: ID!) {
    noteDelete(input: { siteId: $siteId, recordingId: $recordingId, noteId: $noteId }) {
      id
    }
  }
`;

export const UPDATE_NOTE_MUTATION = gql`
  mutation NoteUpdate($siteId: ID!, $recordingId: ID!, $noteId: ID!, $body: String, $timestamp: Int) {
    noteUpdate(input: { siteId: $siteId, recordingId: $recordingId, noteId: $noteId, body: $body, timestamp: $timestamp }) {
      id
      body
      timestamp
      user {
        fullName
      }
    }
  }
`;

export const DELETE_RECORDING_MUTATION = gql`
  mutation DeleteRecording($input: RecordingsDeleteInput!) {
    recordingDelete(input: $input) {
      id
    }
  }
`;

export const VIEWED_RECORDING_MUTATION = gql`
  mutation ViewedRecording($input: RecordingsViewedInput!) {
    recordingViewed(input: $input) {
      id
      viewed
    }
  }
`;

export const BOOKMARK_RECORDING_MUTATION = gql`
  mutation BookmarkRecording($input: RecordingsBookmarkedInput!) {
    recordingBookmarked(input: $input) {
      id
      bookmarked
    }
  }
`;

export const DELETE_RECORDINGS_MUTATION = gql`
  mutation DeletedRecordings($input: RecordingsDeleteBulkInput!) {
    recordingsDelete(input: $input) {
      id
    }
  }
`;

export const VIEWED_RECORDINGS_MUTATION = gql`
  mutation ViewedRecordings($input: RecordingsViewedBulkInput!) {
    recordingsViewed(input: $input) {
      id
      viewed
    }
  }
`;
