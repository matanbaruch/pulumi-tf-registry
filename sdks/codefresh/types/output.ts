// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AbacRulesAttribute {
    key?: string;
    name: string;
    value: string;
}

export interface AccountBuild {
    /**
     * The number of nodes allowed for this account (default: `1`).
     */
    nodes?: number;
    /**
     * The number of parallel builds allowed for this account.
     */
    parallel: number;
}

export interface AccountIdpAuth0 {
    /**
     * Client ID from Auth0
     */
    clientId: string;
    /**
     * Client secret from Auth0
     */
    clientSecret: string;
    /**
     * The domain of the Auth0 application
     */
    domain: string;
}

export interface AccountIdpAzure {
    /**
     * The Application ID from your Enterprise Application Properties in Azure AD
     */
    appId: string;
    /**
     * Set to true to sync user accounts in Azure AD to your Codefresh account
     */
    autosyncTeamsAndUsers?: boolean;
    /**
     * Client secret from Azure
     */
    clientSecret: string;
    /**
     * The Object ID from your Enterprise Application Properties in Azure AD
     */
    objectId?: string;
    /**
     * Sync interval in hours for syncing user accounts in Azure AD to your Codefresh account. If not set the sync inteval will be 12 hours
     */
    syncInterval?: number;
    /**
     * Azure tenant
     */
    tenant?: string;
}

export interface AccountIdpGithub {
    /**
     * GitHub API host, Defaults to api.github.com
     */
    apiHost?: string;
    /**
     * GitHub API url path prefix, defaults to /
     */
    apiPathPrefix?: string;
    /**
     * Authentication url, Defaults to https://github.com/login/oauth/authorize
     */
    authenticationUrl?: string;
    /**
     * Client ID from Github
     */
    clientId: string;
    /**
     * Client secret from GitHub
     */
    clientSecret: string;
    /**
     * GitHub token endpoint url, Defaults to https://github.com/login/oauth/access_token
     */
    tokenUrl?: string;
    /**
     * GitHub user profile url, Defaults to https://api.github.com/user
     */
    userProfileUrl?: string;
}

export interface AccountIdpGitlab {
    /**
     * Base url for Gitlab API, Defaults to https://gitlab.com/api/v4/
     */
    apiUrl?: string;
    /**
     * Authentication url, Defaults to https://gitlab.com
     */
    authenticationUrl?: string;
    /**
     * Client ID from Gitlab
     */
    clientId: string;
    /**
     * Client secret from Gitlab
     */
    clientSecret: string;
    /**
     * User profile url, Defaults to https://gitlab.com/api/v4/user
     */
    userProfileUrl?: string;
}

export interface AccountIdpGoogle {
    /**
     * Email of a user with admin permissions on google, relevant only for synchronization
     */
    adminEmail?: string;
    /**
     * Comma separated list of groups to sync
     */
    allowedGroupsForSync?: string;
    /**
     * Client ID in Google, must be unique across all identity providers in Codefresh
     */
    clientId: string;
    /**
     * Client secret in Google
     */
    clientSecret: string;
    /**
     * JSON keyfile for google service account used for synchronization
     */
    jsonKeyfile?: string;
    /**
     * Relevant for custom schema-based synchronization only. See Codefresh documentation
     */
    syncField?: string;
}

export interface AccountIdpKeycloak {
    /**
     * Client ID from Keycloak
     */
    clientId: string;
    /**
     * Client secret from Keycloak
     */
    clientSecret: string;
    /**
     * The Keycloak URL
     */
    host: string;
    /**
     * The Realm ID for Codefresh in Keycloak. Defaults to master
     */
    realm?: string;
}

export interface AccountIdpLdap {
    /**
     * To sync only by specified groups - specify a comma separated list of groups, by default all groups will be synced
     */
    allowedGroupsForSync?: string;
    /**
     * For ldaps only: The security certificate of the LDAP server. Do not convert to base64 or any other encoding
     */
    certificate?: string;
    /**
     * The username to be used to search other users in LDAP notation (combination of cn, ou,dc)
     */
    distinguishedName: string;
    /**
     * The password of the user defined in Distinguished name that will be used to search other users
     */
    password: string;
    /**
     * The search-user scope in LDAP notation
     */
    searchBase: string;
    /**
     * Synchronize using a custom search base, by deafult seach_base is used
     */
    searchBaseForSync?: string;
    /**
     * The attribute by which to search for the user on the LDAP server. By default, set to uid. For the Azure LDAP server, set this field to sAMAccountName
     */
    searchFilter?: string;
    /**
     * ldap server url
     */
    url: string;
}

export interface AccountIdpOkta {
    /**
     * The Okta API token generated in Okta, used to sync groups and their users from Okta to Codefresh
     */
    accessToken?: string;
    /**
     * The Codefresh application ID in your OKTA organization
     */
    appId?: string;
    /**
     * The OKTA organization URL, for example, https://<company>.okta.com
     */
    clientHost: string;
    /**
     * Client ID in Okta, must be unique across all identity providers in Codefresh
     */
    clientId: string;
    /**
     * Client secret in Okta
     */
    clientSecret: string;
    /**
     * The names of the additional Codefresh accounts to be synced from Okta
     */
    syncMirrorAccounts?: string[];
}

export interface AccountIdpOnelogin {
    /**
     * Client ID for onelogin API, only needed if syncing users and groups from Onelogin
     */
    apiClientId?: string;
    /**
     * Client secret for onelogin API, only needed if syncing users and groups from Onelogin
     */
    apiClientSecret?: string;
    /**
     * The Codefresh application ID in your Onelogin
     */
    appId?: string;
    /**
     * Client ID from Onelogin
     */
    clientId: string;
    /**
     * Client secret from Onelogin
     */
    clientSecret: string;
    /**
     * The domain to be used for authentication
     */
    domain: string;
}

export interface AccountIdpSaml {
    /**
     * Valid for Okta only: The Okta API token generated in Okta, used to sync groups and their users from Okta to Codefresh
     */
    accessToken?: string;
    /**
     * Valid for Okta only: If set to true, Codefresh will automatically invite and activate new users added during the automated sync, without waiting for the users to accept the invitations. Defaults to false
     */
    activateUsersAfterSync?: boolean;
    /**
     * Valid for GSuite only: Email of a user with admin permissions on google, relevant only for synchronization
     */
    adminEmail?: string;
    /**
     * Valid for GSuite only: Comma separated list of groups to sync
     */
    allowedGroupsForSync?: string;
    /**
     * Valid for Okta only: The Codefresh application ID in Okta
     */
    appId?: string;
    /**
     * The security certificate of your Identity Provider. Paste the value directly on the field. Do not convert to base64 or any other encoding by hand
     */
    applicationCertificate: string;
    /**
     * Valid for Okta/GSuite: Set to true to sync user accounts and teams in okta/gsuite to your Codefresh account
     */
    autosyncTeamsAndUsers?: boolean;
    /**
     * Valid for Okta only: OKTA organization URL, for example, https://<company>.okta.com
     */
    clientHost?: string;
    /**
     * The SSO endpoint of your Identity Provider
     */
    endpoint: string;
    /**
     * Valid for GSuite only: JSON keyfile for google service account used for synchronization
     */
    jsonKeyfile?: string;
    /**
     * SAML provider. Currently supported values - GSuite, okta or empty string for generic provider. Defaults to empty string
     */
    provider?: string;
    /**
     * Valid for Okta/GSuite: Sync interval in hours for syncing user accounts in okta/gsuite to your Codefresh account. If not set the sync inteval will be 12 hours
     */
    syncInterval?: number;
}

export interface AccountLimit {
    /**
     * The number of collaborators allowed for this account.
     */
    collaborators: number;
    /**
     * Specifies the number of weeks for which to store the builds (default: `5`).
     */
    dataRetentionWeeks?: number;
}

export interface ContextSpec {
    config?: outputs.ContextSpecConfig;
    secret?: outputs.ContextSpecSecret;
    secretyaml?: outputs.ContextSpecSecretyaml;
    storageazuref?: outputs.ContextSpecStorageazuref;
    storagegc?: outputs.ContextSpecStoragegc;
    storages3?: outputs.ContextSpecStorages3;
    yaml?: outputs.ContextSpecYaml;
}

export interface ContextSpecConfig {
    /**
     * The map of variables representing the shared config.
     */
    data: {[key: string]: string};
}

export interface ContextSpecSecret {
    /**
     * The map of variables representing the shared config (secret).
     */
    data: {[key: string]: string};
}

export interface ContextSpecSecretyaml {
    /**
     * The YAML string representing the shared config (secret).
     */
    data: string;
}

export interface ContextSpecStorageazuref {
    data: outputs.ContextSpecStorageazurefData;
}

export interface ContextSpecStorageazurefData {
    auth: outputs.ContextSpecStorageazurefDataAuth;
}

export interface ContextSpecStorageazurefDataAuth {
    accountKey: string;
    accountName: string;
    type: string;
}

export interface ContextSpecStoragegc {
    data: outputs.ContextSpecStoragegcData;
}

export interface ContextSpecStoragegcData {
    auth: outputs.ContextSpecStoragegcDataAuth;
}

export interface ContextSpecStoragegcDataAuth {
    jsonConfig: {[key: string]: string};
    type: string;
}

export interface ContextSpecStorages3 {
    data: outputs.ContextSpecStorages3Data;
}

export interface ContextSpecStorages3Data {
    auth: outputs.ContextSpecStorages3DataAuth;
}

export interface ContextSpecStorages3DataAuth {
    jsonConfig: {[key: string]: string};
    type: string;
}

export interface ContextSpecYaml {
    /**
     * The YAML string representing the shared config.
     */
    data: string;
}

export interface GetCurrentAccountUser {
    email: string;
    id: string;
    name: string;
}

export interface GetPipelinesPipeline {
    id: string;
    isPublic: boolean;
    name: string;
    project: string;
    spec: string;
    tags: string[];
}

export interface GetStepTypesVersion {
    stepTypesYaml: string;
    versionNumber: string;
}

export interface GetUserLogin {
    credentials: outputs.GetUserLoginCredential[];
    idps: outputs.GetUserLoginIdp[];
}

export interface GetUserLoginCredential {
    permissions: string[];
}

export interface GetUserLoginIdp {
    clientType: string;
    id: string;
}

export interface GetUserPersonal {
    companyName: string;
    country: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface GetUserShortProfile {
    userName: string;
}

export interface GetUsersUser {
    email: string;
    logins: outputs.GetUsersUserLogin[];
    personals: outputs.GetUsersUserPersonal[];
    roles: string[];
    shortProfiles: outputs.GetUsersUserShortProfile[];
    status: string;
    userId: string;
    userName: string;
}

export interface GetUsersUserLogin {
    credentials: outputs.GetUsersUserLoginCredential[];
    idps: outputs.GetUsersUserLoginIdp[];
}

export interface GetUsersUserLoginCredential {
    permissions: string[];
}

export interface GetUsersUserLoginIdp {
    clientType: string;
    id: string;
}

export interface GetUsersUserPersonal {
    companyName: string;
    country: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export interface GetUsersUserShortProfile {
    userName: string;
}

export interface IdpAuth0 {
    /**
     * Client ID from Auth0
     */
    clientId: string;
    /**
     * Client secret from Auth0
     */
    clientSecret: string;
    /**
     * The domain of the Auth0 application
     */
    domain: string;
}

export interface IdpAzure {
    /**
     * The Application ID from your Enterprise Application Properties in Azure AD
     */
    appId: string;
    /**
     * Set to true to sync user accounts in Azure AD to your Codefresh account
     */
    autosyncTeamsAndUsers?: boolean;
    /**
     * Client secret from Azure
     */
    clientSecret: string;
    /**
     * The Object ID from your Enterprise Application Properties in Azure AD
     */
    objectId?: string;
    /**
     * Sync interval in hours for syncing user accounts in Azure AD to your Codefresh account. If not set the sync inteval will be 12 hours
     */
    syncInterval?: number;
    /**
     * Azure tenant
     */
    tenant?: string;
}

export interface IdpGithub {
    /**
     * GitHub API host, Defaults to api.github.com
     */
    apiHost?: string;
    /**
     * GitHub API url path prefix, defaults to /
     */
    apiPathPrefix?: string;
    /**
     * Authentication url, Defaults to https://github.com/login/oauth/authorize
     */
    authenticationUrl?: string;
    /**
     * Client ID from Github
     */
    clientId: string;
    /**
     * Client secret from GitHub
     */
    clientSecret: string;
    /**
     * GitHub token endpoint url, Defaults to https://github.com/login/oauth/access_token
     */
    tokenUrl?: string;
    /**
     * GitHub user profile url, Defaults to https://api.github.com/user
     */
    userProfileUrl?: string;
}

export interface IdpGitlab {
    /**
     * Base url for Gitlab API, Defaults to https://gitlab.com/api/v4/
     */
    apiUrl?: string;
    /**
     * Authentication url, Defaults to https://gitlab.com
     */
    authenticationUrl?: string;
    /**
     * Client ID from Gitlab
     */
    clientId: string;
    /**
     * Client secret from Gitlab
     */
    clientSecret: string;
    /**
     * User profile url, Defaults to https://gitlab.com/api/v4/user
     */
    userProfileUrl?: string;
}

export interface IdpGoogle {
    /**
     * Email of a user with admin permissions on google, relevant only for synchronization
     */
    adminEmail?: string;
    /**
     * Comma separated list of groups to sync
     */
    allowedGroupsForSync?: string;
    /**
     * Client ID in Google, must be unique across all identity providers in Codefresh
     */
    clientId: string;
    /**
     * Client secret in Google
     */
    clientSecret: string;
    /**
     * JSON keyfile for google service account used for synchronization
     */
    jsonKeyfile?: string;
    /**
     * Relevant for custom schema-based synchronization only. See Codefresh documentation
     */
    syncField?: string;
}

export interface IdpKeycloak {
    /**
     * Client ID from Keycloak
     */
    clientId: string;
    /**
     * Client secret from Keycloak
     */
    clientSecret: string;
    /**
     * The Keycloak URL
     */
    host: string;
    /**
     * The Realm ID for Codefresh in Keycloak. Defaults to master
     */
    realm?: string;
}

export interface IdpLdap {
    /**
     * To sync only by specified groups - specify a comma separated list of groups, by default all groups will be synced
     */
    allowedGroupsForSync?: string;
    /**
     * For ldaps only: The security certificate of the LDAP server. Do not convert to base64 or any other encoding
     */
    certificate?: string;
    /**
     * The username to be used to search other users in LDAP notation (combination of cn, ou,dc)
     */
    distinguishedName: string;
    /**
     * The password of the user defined in Distinguished name that will be used to search other users
     */
    password: string;
    /**
     * The search-user scope in LDAP notation
     */
    searchBase: string;
    /**
     * Synchronize using a custom search base, by deafult seach_base is used
     */
    searchBaseForSync?: string;
    /**
     * The attribute by which to search for the user on the LDAP server. By default, set to uid. For the Azure LDAP server, set this field to sAMAccountName
     */
    searchFilter?: string;
    /**
     * ldap server url
     */
    url: string;
}

export interface IdpOkta {
    /**
     * The Okta API token generated in Okta, used to sync groups and their users from Okta to Codefresh
     */
    accessToken?: string;
    /**
     * The Codefresh application ID in your OKTA organization
     */
    appId?: string;
    /**
     * The OKTA organization URL, for example, https://<company>.okta.com
     */
    clientHost: string;
    /**
     * Client ID in Okta, must be unique across all identity providers in Codefresh
     */
    clientId: string;
    /**
     * Client secret in Okta
     */
    clientSecret: string;
    /**
     * The names of the additional Codefresh accounts to be synced from Okta
     */
    syncMirrorAccounts?: string[];
}

export interface IdpOnelogin {
    /**
     * Client ID for onelogin API, only needed if syncing users and groups from Onelogin
     */
    apiClientId?: string;
    /**
     * Client secret for onelogin API, only needed if syncing users and groups from Onelogin
     */
    apiClientSecret?: string;
    /**
     * The Codefresh application ID in your Onelogin
     */
    appId?: string;
    /**
     * Client ID from Onelogin
     */
    clientId: string;
    /**
     * Client secret from Onelogin
     */
    clientSecret: string;
    /**
     * The domain to be used for authentication
     */
    domain: string;
}

export interface IdpSaml {
    /**
     * Valid for Okta only: The Okta API token generated in Okta, used to sync groups and their users from Okta to Codefresh
     */
    accessToken?: string;
    /**
     * Valid for Okta only: If set to true, Codefresh will automatically invite and activate new users added during the automated sync, without waiting for the users to accept the invitations. Defaults to false
     */
    activateUsersAfterSync?: boolean;
    /**
     * Valid for GSuite only: Email of a user with admin permissions on google, relevant only for synchronization
     */
    adminEmail?: string;
    /**
     * Valid for GSuite only: Comma separated list of groups to sync
     */
    allowedGroupsForSync?: string;
    /**
     * Valid for Okta only: The Codefresh application ID in Okta
     */
    appId?: string;
    /**
     * The security certificate of your Identity Provider. Paste the value directly on the field. Do not convert to base64 or any other encoding by hand
     */
    applicationCertificate: string;
    /**
     * Valid for Okta/GSuite: Set to true to sync user accounts and teams in okta/gsuite to your Codefresh account
     */
    autosyncTeamsAndUsers?: boolean;
    /**
     * Valid for Okta only: OKTA organization URL, for example, https://<company>.okta.com
     */
    clientHost?: string;
    /**
     * The SSO endpoint of your Identity Provider
     */
    endpoint: string;
    /**
     * Valid for GSuite only: JSON keyfile for google service account used for synchronization
     */
    jsonKeyfile?: string;
    /**
     * SAML provider. Currently supported values - GSuite, okta or empty string for generic provider. Defaults to empty string
     */
    provider?: string;
    /**
     * Valid for Okta/GSuite: Sync interval in hours for syncing user accounts in okta/gsuite to your Codefresh account. If not set the sync inteval will be 12 hours
     */
    syncInterval?: number;
}

export interface PipelineSpec {
    /**
     * The maximum amount of concurrent builds that may run for each branch. Zero is unlimited (default: `0`).
     */
    branchConcurrency?: number;
    /**
     * The maximum amount of concurrent builds. Zero is unlimited (default: `0`).
     */
    concurrency?: number;
    /**
     * A list of strings representing the contexts ([shared_configuration](https://codefresh.io/docs/docs/configure-ci-cd-pipeline/shared-configuration/)) to be configured for the pipeline.
     */
    contexts?: string[];
    cronTriggers?: outputs.PipelineSpecCronTrigger[];
    /**
     * Pipeline level encrypted variables. Please note that drift will not be detected for encrypted variables
     */
    encryptedVariables?: {[key: string]: string};
    externalResources?: outputs.PipelineSpecExternalResource[];
    /**
     * The options for the pipeline.
     */
    options?: outputs.PipelineSpecOptions;
    /**
     * SAAS pack (`5cd1746617313f468d669013` for Small; `5cd1746717313f468d669014` for Medium; `5cd1746817313f468d669015` for Large; `5cd1746817313f468d669017` for XL; `5cd1746817313f468d669018` for XXL); `5cd1746817313f468d669020` for 4XL).
     */
    packId?: string;
    /**
     * Defines whether it is permitted to restart builds in this pipeline from failed step. Defaults to true
     */
    permitRestartFromFailedSteps?: boolean;
    /**
     * Helps to organize the order of builds execution in case of reaching the concurrency limit (default: `0`).
     */
    priority?: number;
    /**
     * Minimum disk space required for build filesystem ( unit Gi is required).
     */
    requiredAvailableStorage?: string;
    /**
     * The runtime environment for the pipeline.
     */
    runtimeEnvironments?: outputs.PipelineSpecRuntimeEnvironment[];
    /**
     * The pipeline's spec template.
     */
    specTemplates?: outputs.PipelineSpecSpecTemplate[];
    /**
     * The termination policy for the pipeline.
     */
    terminationPolicy?: outputs.PipelineSpecTerminationPolicy;
    /**
     * The maximum amount of concurrent builds that may run for each trigger (default: `0`).
     */
    triggerConcurrency?: number;
    /**
     * The pipeline's triggers (currently the only nested trigger supported is git; for other trigger types, use the `codefresh_pipeline_*_trigger` resources).
     */
    triggers?: outputs.PipelineSpecTrigger[];
    /**
     * The pipeline's variables.
     */
    variables?: {[key: string]: string};
}

export interface PipelineSpecCronTrigger {
    /**
     * Branch that should be passed for build triggered by this cron trigger.
     */
    branch?: string;
    /**
     * Flag to disable the trigger.
     */
    disabled?: boolean;
    /**
     * Trigger level encrypted variables. Please note that drift will not be detected for encrypted variables
     */
    encryptedVariables?: {[key: string]: string};
    expression: string;
    /**
     * Related git-trigger id. Will by used to take all possible git information by branch.
     */
    gitTriggerId?: string;
    message: string;
    /**
     * The name of the cron trigger.
     */
    name: string;
    /**
     * The trigger's options.
     */
    options?: outputs.PipelineSpecCronTriggerOption[];
    /**
     * The runtime environment for the trigger.
     */
    runtimeEnvironments?: outputs.PipelineSpecCronTriggerRuntimeEnvironment[];
    /**
     * The type of the trigger (default: `cron`; see notes above).
     */
    type?: string;
    /**
     * Trigger variables.
     */
    variables?: {[key: string]: string};
}

export interface PipelineSpecCronTriggerOption {
    /**
     * If false the pipeline will not send notifications to Slack and status updates back to the Git provider.
     */
    enableNotifications?: boolean;
    /**
     * If true, docker layer cache is disabled.
     */
    noCache?: boolean;
    /**
     * If true, extra Codefresh caching is disabled.
     */
    noCfCache?: boolean;
    /**
     * If true, all files on volume will be deleted before each execution.
     */
    resetVolume?: boolean;
}

export interface PipelineSpecCronTriggerRuntimeEnvironment {
    /**
     * The CPU allocated to the runtime environment.
     */
    cpu?: string;
    /**
     * The storage allocated to the runtime environment.
     */
    dindStorage?: string;
    /**
     * The memory allocated to the runtime environment.
     */
    memory?: string;
    /**
     * The name of the runtime environment.
     */
    name?: string;
    /**
     * Minimum disk space required for build filesystem ( unit Gi is required).
     */
    requiredAvailableStorage?: string;
}

export interface PipelineSpecExternalResource {
    /**
     * Context name for the git repository
     */
    context: string;
    id: string;
    /**
     * Whether or not the resource specified in source_path is a folder
     */
    isFolder?: boolean;
    /**
     * git repository url
     */
    repo: string;
    /**
     * Revision/branch in the git repository
     */
    revision: string;
    /**
     * The source folder in the repository (use relative path)
     */
    sourcePath: string;
    /**
     * The target folder in the pipeline workspace where the file/folder will be copied to (use absolute path)
     */
    targetPath: string;
    /**
     * Type of the external resource. Currently only 'git' is supported
     */
    type?: string;
}

export interface PipelineSpecOptions {
    enableNotifications?: boolean;
    /**
     * When build enters 'Pending Approval' state, volume should:
     * 	* Default (attribute not specified): "Use Setting accounts"
     * 	* true: "Remain (build remains active)"
     * 	* false: "Be removed"
     */
    keepPvcsForPendingApproval?: boolean;
    /**
     * Pipeline concurrency policy: Builds on 'Pending Approval' state should be:
     * 	* Default (attribute not specified): "Use Setting accounts"
     * 	* true: "Included in concurrency"
     * 	* false: "Not included in concurrency"
     */
    pendingApprovalConcurrencyApplied?: boolean;
}

export interface PipelineSpecRuntimeEnvironment {
    /**
     * The CPU allocated to the runtime environment.
     */
    cpu?: string;
    /**
     * The storage allocated to the runtime environment.
     */
    dindStorage?: string;
    /**
     * The memory allocated to the runtime environment.
     */
    memory?: string;
    /**
     * The name of the runtime environment.
     */
    name?: string;
    /**
     * Minimum disk space required for build filesystem ( unit Gi is required).
     */
    requiredAvailableStorage?: string;
}

export interface PipelineSpecSpecTemplate {
    /**
     * The Codefresh git context (default: `github`).
     */
    context?: string;
    /**
     * The location of the spec template (default: `git`).
     */
    location?: string;
    /**
     * The relative path to the Codefresh pipeline file.
     */
    path: string;
    /**
     * The repository of the spec template (owner/repo).
     */
    repo: string;
    /**
     * The git revision of the spec template. Possible values: '', *name of branch*. Use '' to autoselect a branch.
     */
    revision: string;
}

export interface PipelineSpecTerminationPolicy {
    /**
     * The following table presents how to configure this block based on the options available in the UI:
     *
     * | Option Description                                                            | Value Selected           | on_create_branch | branch_name | ignore_trigger | ignore_branch |
     * | ----------------------------------------------------------------------------- |:------------------------:|:----------------:|:-----------:|---------------:| -------------:|
     * | Once a build is created terminate previous builds from the same branch        | Disabled                 |        Omit      |     N/A     |       N/A      |      N/A      |
     * | Once a build is created terminate previous builds from the same branch        | From the SAME trigger    |       Defined    |     N/A     |      false     |      N/A      |
     * | Once a build is created terminate previous builds from the same branch        | From ANY trigger         |       Defined    |     N/A     |      true      |      N/A      |
     * | Once a build is created terminate previous builds only from a specific branch | Disabled                 |        Omit      |     N/A     |       N/A      |      N/A      |
     * | Once a build is created terminate previous builds only from a specific branch | From the SAME trigger    |       Defined    |    Regex    |      false     |      N/A      |
     * | Once a build is created terminate previous builds only from a specific branch | From ANY trigger         |       Defined    |    Regex    |      true      |      N/A      |
     * | Once a build is created, terminate all other running builds                   | Disabled                 |        Omit      |     N/A     |       N/A      |      N/A      |
     * | Once a build is created, terminate all other running builds                   | From the SAME trigger    |       Defined    |     N/A     |      false     |      true     |
     * | Once a build is created, terminate all other running builds                   | From ANY trigger         |       Defined    |     N/A     |      true      |      true     |
     */
    onCreateBranch?: outputs.PipelineSpecTerminationPolicyOnCreateBranch;
    /**
     * Enables the policy `Once a build is terminated, terminate all child builds initiated from it`.
     */
    onTerminateAnnotation?: boolean;
}

export interface PipelineSpecTerminationPolicyOnCreateBranch {
    /**
     * A regular expression to filter the branches on with the termination policy applies.
     */
    branchName?: string;
    /**
     * Whether to ignore the branch.
     */
    ignoreBranch?: boolean;
    /**
     * Whether to ignore the trigger.
     */
    ignoreTrigger?: boolean;
}

export interface PipelineSpecTrigger {
    /**
     * A regular expression and will only trigger for branches that match this naming pattern (default: `/.*&#47;gi`).
     */
    branchRegex?: string;
    /**
     * Flag to manage how the `branch_regex` field is interpreted. Possible values: `multiselect-exclude`, `multiselect`, `regex` (default: `regex`).
     */
    branchRegexInput?: string;
    /**
     * A regular expression and will only trigger for pull requests where a comment matches this naming pattern (default: `/.*&#47;gi`).
     */
    commentRegex?: string;
    /**
     * The commit status title pushed to the git provider.
     */
    commitStatusTitle?: string;
    /**
     * The Codefresh git context.
     */
    context?: string;
    /**
     * A list of strings representing the contexts ([shared_configuration](https://codefresh.io/docs/docs/configure-ci-cd-pipeline/shared-configuration/)) to be loaded when the trigger is executed.
     */
    contexts?: string[];
    /**
     * The description of the trigger.
     */
    description?: string;
    /**
     * Flag to disable the trigger.
     */
    disabled?: boolean;
    /**
     * Trigger level encrypted variables. Please note that drift will not be detected for encrypted variables
     */
    encryptedVariables?: {[key: string]: string};
    /**
     * A list of GitHub events for which a Pipeline is triggered.
     */
    events?: string[];
    /**
     * Allows to constrain the build and trigger it only if the modified files from the commit match this glob expression (default: `""`).
     */
    modifiedFilesGlob?: string;
    /**
     * The name of the trigger.
     */
    name?: string;
    /**
     * The trigger's options.
     */
    options?: outputs.PipelineSpecTriggerOption[];
    /**
     * The git provider tied to the trigger.
     */
    provider?: string;
    /**
     * If this trigger is also applicable to git forks.
     */
    pullRequestAllowForkEvents?: boolean;
    /**
     * A regular expression and will only trigger for pull requests to branches that match this naming pattern.
     */
    pullRequestTargetBranchRegex?: string;
    /**
     * The repository name, (owner/repo)
     */
    repo?: string;
    /**
     * The runtime environment for the trigger.
     */
    runtimeEnvironments?: outputs.PipelineSpecTriggerRuntimeEnvironment[];
    /**
     * The type of the trigger (default: `git`; see notes above).
     */
    type?: string;
    /**
     * Trigger variables.
     */
    variables?: {[key: string]: string};
}

export interface PipelineSpecTriggerOption {
    /**
     * If false the pipeline will not send notifications to Slack and status updates back to the Git provider.
     */
    enableNotifications?: boolean;
    /**
     * If true, docker layer cache is disabled
     */
    noCache?: boolean;
    /**
     * If true, extra Codefresh caching is disabled.
     */
    noCfCache?: boolean;
    /**
     * If true, all files on volume will be deleted before each execution.
     */
    resetVolume?: boolean;
}

export interface PipelineSpecTriggerRuntimeEnvironment {
    /**
     * The CPU allocated to the runtime environment.
     */
    cpu?: string;
    /**
     * The storage allocated to the runtime environment.
     */
    dindStorage?: string;
    /**
     * The memory allocated to the runtime environment.
     */
    memory?: string;
    /**
     * The name of the runtime environment.
     */
    name?: string;
    /**
     * Minimum disk space required for build filesystem ( unit Gi is required).
     */
    requiredAvailableStorage?: string;
}

export interface RegistrySpec {
    /**
     * An `acr` block as documented below ([Azure Container Registry](https://codefresh.io/docs/docs/integrations/docker-registries/azure-docker-registry)).
     */
    acr?: outputs.RegistrySpecAcr;
    /**
     * A `bintray` block as documented below ([Bintray / Artifactory](https://codefresh.io/docs/docs/integrations/docker-registries/bintray-io)).
     */
    bintray?: outputs.RegistrySpecBintray;
    /**
     * A `dockerhub` block as documented below ([Docker Hub Registry](https://codefresh.io/docs/docs/integrations/docker-registries/docker-hub/)).
     */
    dockerhub?: outputs.RegistrySpecDockerhub;
    /**
     * An `ecr` block as documented below ([Amazon EC2 Container Registry](https://codefresh.io/docs/docs/integrations/docker-registries/amazon-ec2-container-registry)).
     */
    ecr?: outputs.RegistrySpecEcr;
    /**
     * A `gar` block as documented below ([Google Artifact Registry](https://codefresh.io/docs/docs/integrations/docker-registries/google-artifact-registry)).
     */
    gar?: outputs.RegistrySpecGar;
    /**
     * [Google Container Registry](https://codefresh.io/docs/docs/integrations/docker-registries/google-container-registry).
     */
    gcr?: outputs.RegistrySpecGcr;
    /**
     * `other` provider block described below ([Other Providers](https://codefresh.io/docs/docs/integrations/docker-registries/other-registries)).
     */
    other?: outputs.RegistrySpecOther;
}

export interface RegistrySpecAcr {
    /**
     * The Client ID.
     */
    clientId: string;
    /**
     * The Client Secret.
     */
    clientSecret: string;
    /**
     * The ACR registry domain.
     */
    domain: string;
    /**
     * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
     */
    repositoryPrefix?: string;
}

export interface RegistrySpecBintray {
    /**
     * The Bintray domain.
     */
    domain: string;
    /**
     * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
     */
    repositoryPrefix?: string;
    /**
     * The Bintray token.
     */
    token: string;
    /**
     * The Bintray username.
     */
    username: string;
}

export interface RegistrySpecDockerhub {
    /**
     * The DockerHub password.
     */
    password: string;
    /**
     * The DockerHub username.
     */
    username: string;
}

export interface RegistrySpecEcr {
    /**
     * The AWS access key ID.
     */
    accessKeyId: string;
    /**
     * The AWS region.
     */
    region: string;
    /**
     * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
     */
    repositoryPrefix?: string;
    /**
     * The AWS secret access key.
     */
    secretAccessKey: string;
}

export interface RegistrySpecGar {
    /**
     * The serviceaccount json file contents.
     */
    keyfile: string;
    /**
     * The GAR location.
     */
    location: string;
    /**
     * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
     */
    repositoryPrefix?: string;
}

export interface RegistrySpecGcr {
    /**
     * The GCR registry domain.
     */
    domain: string;
    /**
     * The serviceaccount json file contents.
     */
    keyfile: string;
    /**
     * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
     */
    repositoryPrefix?: string;
}

export interface RegistrySpecOther {
    /**
     * See the [docs](https://codefresh.io/docs/docs/administration/behind-the-firewall/#accessing-an-internal-docker-registry).
     */
    behindFirewall?: boolean;
    /**
     * The domain.
     */
    domain: string;
    /**
     * The password.
     */
    password: string;
    /**
     * See the [docs](https://codefresh.io/docs/docs/integrations/docker-registries/#using-an-optional-repository-prefix).
     */
    repositoryPrefix?: string;
    /**
     * The username.
     */
    username: string;
}

export interface StepTypesVersion {
    stepTypesYaml: string;
    versionNumber: string;
}

export interface UserLogin {
    /**
     * The IdP ID for the user's login.
     */
    idpId?: string;
    /**
     * Whether to enforce SSO for the user.
     */
    sso?: boolean;
}

export interface UserPersonal {
    /**
     * The company name of the user.
     */
    companyName?: string;
    /**
     * The country of the user.
     */
    country?: string;
    /**
     * The first name of the user.
     */
    firstName?: string;
    /**
     * The last name of the user.
     */
    lastName?: string;
    /**
     * The phone number of the user.
     */
    phoneNumber?: string;
}

export interface UserShortProfile {
    userName: string;
}

