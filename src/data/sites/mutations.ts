import { gql } from '@apollo/client';

export const CREATE_SITE_MUTATION = gql`
  mutation SiteCreate($input: SitesCreateInput!) {
    siteCreate(input: $input) {
      id
      name
      url
      ownerName
    }
  }
`;

export const UPDATE_SITE_MUTATION = gql`
  mutation SiteUpdate($input: SitesUpdateInput!) {
    siteUpdate(input: $input) {
      id
      name
      url
      verifiedAt
    }
  }
`;

export const DELETE_SITE_MUTATION = gql`
  mutation SiteDelete($input: SitesDeleteInput!) {
    siteDelete(input: $input) {
      id
    }
  }
`;

export const VERIFY_SITE_MUTATION = gql`
  mutation SiteVerify($input: SitesVerifyInput!) {
    siteVerify(input: $input) {
      id
      verifiedAt
    }
  }
`;

export const CREATE_IP_BLACKLIST_MUTATION = gql`
  mutation SiteIpBlacklistCreate($input: SitesIpBlacklistCreateInput!) {
    ipBlacklistCreate(input: $input) {
      id
      ipBlacklist {
        name
        value
      }
    }
  }
`;

export const DELETE_IP_BLACKLIST_MUTATION = gql`
  mutation SiteIpBlacklistDelete($input: SitesIpBlacklistDeleteInput!) {
    ipBlacklistDelete(input: $input) {
      id
      ipBlacklist {
        name
        value
      }
    }
  }
`;

export const CREATE_DOMAIN_BLACKLIST_MUTATION = gql`
  mutation SiteDomainBlacklistCreate($input: SitesDomainBlacklistCreateInput!) {
    domainBlacklistCreate(input: $input) {
      id
      domainBlacklist {
        type
        value
      }
    }
  }
`;

export const DELETE_DOMAIN_BLACKLIST_MUTATION = gql`
  mutation SiteDomainBlacklistDelete($input: SitesDomainBlacklistDeleteInput!) {
    domainBlacklistDelete(input: $input) {
      id
      domainBlacklist {
        type
        value
      }
    }
  }
`;
