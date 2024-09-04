// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ApplicationSegmentBrowserAccessClientlessApp {
    /**
     * If you want ZPA to forward unauthenticated HTTP preflight OPTIONS requests from the browser to the app.
     */
    allowOptions?: pulumi.Input<boolean>;
    /**
     * Port for the BA app.
     */
    applicationPort: pulumi.Input<string>;
    /**
     * Protocol for the BA app.
     */
    applicationProtocol: pulumi.Input<string>;
    /**
     * ID of the BA certificate.
     */
    certificateId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    /**
     * Domain name or IP address of the BA app.
     */
    domain?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    /**
     * Indicates whether Use Untrusted Certificates is enabled or disabled for a BA app.
     */
    trustUntrustedCert?: pulumi.Input<boolean>;
}

export interface ApplicationSegmentBrowserAccessServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ApplicationSegmentBrowserAccessTcpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentBrowserAccessUdpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentInspectionCommonAppsDto {
    appsConfigs?: pulumi.Input<pulumi.Input<inputs.ApplicationSegmentInspectionCommonAppsDtoAppsConfig>[]>;
}

export interface ApplicationSegmentInspectionCommonAppsDtoAppsConfig {
    appTypes?: pulumi.Input<pulumi.Input<string>[]>;
    applicationPort?: pulumi.Input<string>;
    applicationProtocol?: pulumi.Input<string>;
    certificateId?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    trustUntrustedCert?: pulumi.Input<boolean>;
}

export interface ApplicationSegmentInspectionServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ApplicationSegmentInspectionTcpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentInspectionUdpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentPraCommonAppsDto {
    appsConfigs?: pulumi.Input<pulumi.Input<inputs.ApplicationSegmentPraCommonAppsDtoAppsConfig>[]>;
}

export interface ApplicationSegmentPraCommonAppsDtoAppsConfig {
    appTypes?: pulumi.Input<pulumi.Input<string>[]>;
    applicationPort?: pulumi.Input<string>;
    applicationProtocol?: pulumi.Input<string>;
    connectionSecurity?: pulumi.Input<string>;
    domain?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}

export interface ApplicationSegmentPraServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ApplicationSegmentPraTcpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentPraUdpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ApplicationSegmentTcpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface ApplicationSegmentUdpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface BrowserAccessClientlessApp {
    /**
     * If you want ZPA to forward unauthenticated HTTP preflight OPTIONS requests from the browser to the app.
     */
    allowOptions?: pulumi.Input<boolean>;
    /**
     * Port for the BA app.
     */
    applicationPort: pulumi.Input<string>;
    /**
     * Protocol for the BA app.
     */
    applicationProtocol: pulumi.Input<string>;
    /**
     * ID of the BA certificate.
     */
    certificateId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    /**
     * Domain name or IP address of the BA app.
     */
    domain?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    /**
     * Indicates whether Use Untrusted Certificates is enabled or disabled for a BA app.
     */
    trustUntrustedCert?: pulumi.Input<boolean>;
}

export interface BrowserAccessServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface BrowserAccessTcpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface BrowserAccessUdpPortRange {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface CloudBrowserIsolationExternalProfileDebugMode {
    allowed?: pulumi.Input<boolean>;
    filePassword?: pulumi.Input<string>;
}

export interface CloudBrowserIsolationExternalProfileSecurityControls {
    allowPrinting?: pulumi.Input<boolean>;
    copyPaste?: pulumi.Input<string>;
    deepLink?: pulumi.Input<inputs.CloudBrowserIsolationExternalProfileSecurityControlsDeepLink>;
    documentViewer?: pulumi.Input<boolean>;
    flattenedPdf?: pulumi.Input<boolean>;
    localRender?: pulumi.Input<boolean>;
    restrictKeystrokes?: pulumi.Input<boolean>;
    uploadDownload?: pulumi.Input<string>;
    watermark?: pulumi.Input<inputs.CloudBrowserIsolationExternalProfileSecurityControlsWatermark>;
}

export interface CloudBrowserIsolationExternalProfileSecurityControlsDeepLink {
    applications?: pulumi.Input<pulumi.Input<string>[]>;
    enabled?: pulumi.Input<boolean>;
}

export interface CloudBrowserIsolationExternalProfileSecurityControlsWatermark {
    enabled?: pulumi.Input<boolean>;
    message?: pulumi.Input<string>;
    showMessage?: pulumi.Input<boolean>;
    showTimestamp?: pulumi.Input<boolean>;
    showUserId?: pulumi.Input<boolean>;
}

export interface CloudBrowserIsolationExternalProfileUserExperience {
    browserInBrowser?: pulumi.Input<boolean>;
    forwardToZia?: pulumi.Input<inputs.CloudBrowserIsolationExternalProfileUserExperienceForwardToZia>;
    persistIsolationBar?: pulumi.Input<boolean>;
    sessionPersistence?: pulumi.Input<boolean>;
    translate?: pulumi.Input<boolean>;
    zgpu?: pulumi.Input<boolean>;
}

export interface CloudBrowserIsolationExternalProfileUserExperienceForwardToZia {
    cloudName?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    organizationId?: pulumi.Input<string>;
    pacFileUrl?: pulumi.Input<string>;
}

export interface GetApplicationSegmentBrowserAccessTcpPortRange {
    from?: string;
    to?: string;
}

export interface GetApplicationSegmentBrowserAccessTcpPortRangeArgs {
    from?: pulumi.Input<string>;
    to?: pulumi.Input<string>;
}

export interface GetApplicationSegmentBrowserAccessUdpPortRange {
    from?: string;
    to?: string;
}

export interface GetApplicationSegmentBrowserAccessUdpPortRangeArgs {
    from?: pulumi.Input<string>;
    to?: pulumi.Input<string>;
}

export interface GetApplicationSegmentInspectionTcpPortRange {
    from: string;
    to: string;
}

export interface GetApplicationSegmentInspectionTcpPortRangeArgs {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface GetApplicationSegmentInspectionUdpPortRange {
    from: string;
    to: string;
}

export interface GetApplicationSegmentInspectionUdpPortRangeArgs {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface GetApplicationSegmentPraTcpPortRange {
    from: string;
    to: string;
}

export interface GetApplicationSegmentPraTcpPortRangeArgs {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface GetApplicationSegmentPraUdpPortRange {
    from: string;
    to: string;
}

export interface GetApplicationSegmentPraUdpPortRangeArgs {
    from: pulumi.Input<string>;
    to: pulumi.Input<string>;
}

export interface GetApplicationSegmentTcpPortRange {
    from?: string;
    to?: string;
}

export interface GetApplicationSegmentTcpPortRangeArgs {
    from?: pulumi.Input<string>;
    to?: pulumi.Input<string>;
}

export interface GetApplicationSegmentUdpPortRange {
    from?: string;
    to?: string;
}

export interface GetApplicationSegmentUdpPortRangeArgs {
    from?: pulumi.Input<string>;
    to?: pulumi.Input<string>;
}

export interface GetLssConfigControllerConfig {
    auditMessage?: string;
    description?: string;
    enabled?: boolean;
    filters?: string[];
    format?: string;
    id?: string;
    lssHost?: string;
    lssPort?: string;
    name?: string;
    sourceLogType?: string;
    useTls?: boolean;
}

export interface GetLssConfigControllerConfigArgs {
    auditMessage?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enabled?: pulumi.Input<boolean>;
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    format?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    lssHost?: pulumi.Input<string>;
    lssPort?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    sourceLogType?: pulumi.Input<string>;
    useTls?: pulumi.Input<boolean>;
}

export interface InspectionCustomControlsRule {
    conditions?: pulumi.Input<pulumi.Input<inputs.InspectionCustomControlsRuleCondition>[]>;
    /**
     * Name of the rules. If rules.type is set to REQUEST_HEADERS, REQUEST_COOKIES, or RESPONSE_HEADERS, the rules.name field is required.
     */
    names?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Type value for the rules.
     */
    type?: pulumi.Input<string>;
}

export interface InspectionCustomControlsRuleCondition {
    /**
     * Signifies the key for the object type
     */
    lhs?: pulumi.Input<string>;
    /**
     * Denotes the operation type.
     */
    op?: pulumi.Input<string>;
    /**
     * Denotes the value for the given object type. Its value depends on the key.
     */
    rhs?: pulumi.Input<string>;
}

export interface InspectionProfileControlsInfo {
    controlType?: pulumi.Input<string>;
}

export interface InspectionProfileCustomControl {
    /**
     * The action of the custom control
     */
    action?: pulumi.Input<string>;
    /**
     * Denotes the action. Supports any string
     */
    actionValue?: pulumi.Input<string>;
    /**
     * The unique identifier of the custom control
     */
    id: pulumi.Input<string>;
}

export interface InspectionProfilePredefinedApiControl {
    action?: pulumi.Input<string>;
    actionValue?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}

export interface InspectionProfilePredefinedControl {
    action?: pulumi.Input<string>;
    actionValue?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}

export interface InspectionProfileThreatLabzControl {
    action?: pulumi.Input<string>;
    actionValue?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}

export interface InspectionProfileWebsocketControl {
    action?: pulumi.Input<string>;
    actionValue?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}

export interface LssConfigControllerConfig {
    auditMessage?: pulumi.Input<string>;
    /**
     * Description of the LSS configuration
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this LSS configuration is enabled or not. Supported values: true, false
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Filter for the LSS configuration. Format given by the following API to get status codes: /mgmtconfig/v2/admin/lssConfig/statusCodes
     */
    filters?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Format of the log type. Format given by the following API to get formats: /mgmtconfig/v2/admin/lssConfig/logType/formats
     */
    format: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    /**
     * Host of the LSS configuration
     */
    lssHost: pulumi.Input<string>;
    /**
     * Port of the LSS configuration
     */
    lssPort: pulumi.Input<string>;
    /**
     * Name of the LSS configuration
     */
    name: pulumi.Input<string>;
    /**
     * Log type of the LSS configuration
     */
    sourceLogType: pulumi.Input<string>;
    useTls?: pulumi.Input<boolean>;
}

export interface LssConfigControllerConnectorGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface LssConfigControllerPolicyRuleResource {
    /**
     * This is for providing the rule action.
     */
    action?: pulumi.Input<string>;
    /**
     * This field defines the description of the server.
     */
    actionId?: pulumi.Input<string>;
    bypassDefaultRule?: pulumi.Input<boolean>;
    /**
     * This is for proviidng the set of conditions for the policy.
     */
    conditions?: pulumi.Input<pulumi.Input<inputs.LssConfigControllerPolicyRuleResourceCondition>[]>;
    /**
     * This is for providing a customer message for the user.
     */
    customMsg?: pulumi.Input<string>;
    /**
     * This is for providing a customer message for the user.
     */
    defaultRule?: pulumi.Input<boolean>;
    /**
     * This is the description of the access policy.
     */
    description?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    lssDefaultRule?: pulumi.Input<boolean>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This is the name of the policy.
     */
    name: pulumi.Input<string>;
    operator?: pulumi.Input<string>;
    policySetId?: pulumi.Input<string>;
    policyType?: pulumi.Input<string>;
    priority?: pulumi.Input<string>;
    reauthDefaultRule?: pulumi.Input<boolean>;
    reauthIdleTimeout?: pulumi.Input<string>;
    reauthTimeout?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    ruleOrder?: pulumi.Input<string>;
    zpnCbiProfileId?: pulumi.Input<string>;
    zpnInspectionProfileId?: pulumi.Input<string>;
    zpnIsolationProfileId?: pulumi.Input<string>;
}

export interface LssConfigControllerPolicyRuleResourceCondition {
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.LssConfigControllerPolicyRuleResourceConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface LssConfigControllerPolicyRuleResourceConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.LssConfigControllerPolicyRuleResourceConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface LssConfigControllerPolicyRuleResourceConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface MicrotenantControllerUser {
    displayName?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}

export interface PolicyAccessRuleAppConnectorGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyAccessRuleAppServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyAccessRuleCondition {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyAccessRuleConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface PolicyAccessRuleConditionOperand {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
    /**
     * This signifies the key for the object type. String ID example: id
     */
    lhs: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    rhs?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    rhsLists?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyAccessRuleReorderRule {
    id: pulumi.Input<string>;
    order: pulumi.Input<string>;
}

export interface PolicyAccessRuleV2AppConnectorGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyAccessRuleV2AppServerGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyAccessRuleV2Condition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyAccessRuleV2ConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyAccessRuleV2ConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyAccessRuleV2ConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyAccessRuleV2ConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PolicyCapabilitiesRuleCondition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyCapabilitiesRuleConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyCapabilitiesRuleConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyCapabilitiesRuleConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyCapabilitiesRuleConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PolicyCapabilitiesRulePrivilegedCapabilities {
    /**
     * Indicates the PRA Clipboard Copy function
     */
    clipboardCopy?: pulumi.Input<boolean>;
    /**
     * Indicates the PRA Clipboard Paste function
     */
    clipboardPaste?: pulumi.Input<boolean>;
    /**
     * Indicates the PRA File Transfer capabilities that enables the File Download function
     */
    fileDownload?: pulumi.Input<boolean>;
    /**
     * Indicates the PRA File Transfer capabilities that enables the File Upload function
     */
    fileUpload?: pulumi.Input<boolean>;
    /**
     * Inspects the file via ZIA sandbox (if you have set up the ZIA cloud and the Integrations settings) and downloads the file following the inspection
     */
    inspectFileDownload?: pulumi.Input<boolean>;
    /**
     * Inspects the file via ZIA sandbox (if you have set up the ZIA cloud and the Integrations settings) and uploads the file following the inspection
     */
    inspectFileUpload?: pulumi.Input<boolean>;
    /**
     * Indicates the PRA Monitoring Capabilities to enable the PRA Session Monitoring function
     */
    monitorSession?: pulumi.Input<boolean>;
    /**
     * Indicates the PRA Session Recording capabilities to enable PRA Session Recording
     */
    recordSession?: pulumi.Input<boolean>;
    /**
     * Indicates the PRA Session Control and Monitoring capabilities to enable PRA Session Monitoring
     */
    shareSession?: pulumi.Input<boolean>;
}

export interface PolicyCredentialRuleCondition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyCredentialRuleConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyCredentialRuleConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyCredentialRuleConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyCredentialRuleConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PolicyCredentialRuleCredential {
    id: pulumi.Input<string>;
}

export interface PolicyForwardingRuleCondition {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyForwardingRuleConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface PolicyForwardingRuleConditionOperand {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
    /**
     * This signifies the key for the object type. String ID example: id
     */
    lhs: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    rhs?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    rhsLists?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyForwardingRuleV2Condition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyForwardingRuleV2ConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyForwardingRuleV2ConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyForwardingRuleV2ConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyForwardingRuleV2ConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PolicyInspectionRuleCondition {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyInspectionRuleConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface PolicyInspectionRuleConditionOperand {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
    /**
     * This signifies the key for the object type. String ID example: id
     */
    lhs: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    rhs?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    rhsLists?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyInspectionRuleV2Condition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyInspectionRuleV2ConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyInspectionRuleV2ConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyInspectionRuleV2ConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyInspectionRuleV2ConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PolicyIsolationRuleCondition {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyIsolationRuleConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface PolicyIsolationRuleConditionOperand {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
    /**
     * This signifies the key for the object type. String ID example: id
     */
    lhs: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    rhs?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    rhsLists?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyIsolationRuleV2Condition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyIsolationRuleV2ConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyIsolationRuleV2ConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyIsolationRuleV2ConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyIsolationRuleV2ConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PolicyRedirectionRuleCondition {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyRedirectionRuleConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface PolicyRedirectionRuleConditionOperand {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
    /**
     * This signifies the key for the object type. String ID example: id
     */
    lhs: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    rhs?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    rhsLists?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyRedirectionRuleServiceEdgeGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyTimeoutRuleCondition {
    id?: pulumi.Input<string>;
    microtenantId?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyTimeoutRuleConditionOperand>[]>;
    operator: pulumi.Input<string>;
}

export interface PolicyTimeoutRuleConditionOperand {
    id?: pulumi.Input<string>;
    idpId?: pulumi.Input<string>;
    /**
     * This signifies the key for the object type. String ID example: id
     */
    lhs: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    microtenantId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType: pulumi.Input<string>;
    /**
     * This denotes the value for the given object type. Its value depends upon the key.
     */
    rhs?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    rhsLists?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyTimeoutRuleV2Condition {
    id?: pulumi.Input<string>;
    /**
     * This signifies the various policy criteria.
     */
    operands?: pulumi.Input<pulumi.Input<inputs.PolicyTimeoutRuleV2ConditionOperand>[]>;
    operator?: pulumi.Input<string>;
}

export interface PolicyTimeoutRuleV2ConditionOperand {
    entryValues?: pulumi.Input<pulumi.Input<inputs.PolicyTimeoutRuleV2ConditionOperandEntryValue>[]>;
    /**
     * This is for specifying the policy critiera.
     */
    objectType?: pulumi.Input<string>;
    /**
     * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
     */
    values?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PolicyTimeoutRuleV2ConditionOperandEntryValue {
    lhs?: pulumi.Input<string>;
    rhs?: pulumi.Input<string>;
}

export interface PraApprovalControllerApplication {
    /**
     * The unique identifier of the pra application segment
     */
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface PraApprovalControllerWorkingHour {
    /**
     * The days of the week that you want to enable the privileged approval
     */
    days?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The end time that the user no longer has access to the privileged approval
     */
    endTime?: pulumi.Input<string>;
    /**
     * The cron expression provided to configure the privileged approval end time working hours. The standard cron expression format is [Seconds][Minutes][Hours][Day of the Month][Month][Day of the Week][Year]The cron expression provided to configure the privileged approval end time working hours. The standard cron expression format is [Seconds][Minutes][Hours][Day of the Month][Month][Day of the Week][Year]
     */
    endTimeCron?: pulumi.Input<string>;
    /**
     * The start time that the user has access to the privileged approval
     */
    startTime?: pulumi.Input<string>;
    /**
     * The cron expression provided to configure the privileged approval start time working hours. The standard cron expression format is [Seconds][Minutes][Hours][Day of the Month][Month][Day of the Week][Year]
     */
    startTimeCron?: pulumi.Input<string>;
    /**
     * The time zone for the time window of a privileged approval
     */
    timezone?: pulumi.Input<string>;
}

export interface PraConsoleControllerPraApplication {
    /**
     * The unique identifier of the Privileged Remote Access-enabled application
     */
    id: pulumi.Input<string>;
}

export interface PraConsoleControllerPraPortal {
    /**
     * The unique identifier of the privileged portal
     */
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface SegmentGroupApplication {
    id?: pulumi.Input<string>;
}

export interface ServerGroupAppConnectorGroup {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ServerGroupApplication {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ServerGroupServer {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ServiceEdgeGroupServiceEdge {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}

export interface ServiceEdgeGroupTrustedNetwork {
    ids?: pulumi.Input<pulumi.Input<string>[]>;
}
