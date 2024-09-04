// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PageLoad extends pulumi.CustomResource {
    /**
     * Get an existing PageLoad resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PageLoadState, opts?: pulumi.CustomResourceOptions): PageLoad {
        return new PageLoad(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thousandeyes:index/pageLoad:PageLoad';

    /**
     * Returns true if the given object is an instance of PageLoad.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PageLoad {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PageLoad.__pulumiType;
    }

    /**
     * The list of ThousandEyes agents to use.
     */
    public readonly agents!: pulumi.Output<outputs.PageLoadAgent[]>;
    /**
     * Gets the ruleId from the /alert-rules endpoint. If alertsEnabled is set to 'true' and alertRules is not included in a
     * creation/update query, the applicable defaults will be used.
     */
    public readonly alertRules!: pulumi.Output<outputs.PageLoadAlertRule[] | undefined>;
    /**
     * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
     */
    public readonly alertsEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Self links to the endpoint to pull test metadata, and data links to the endpoint for test data. Read-only, and shows rel
     * and href elements.
     */
    public /*out*/ readonly apiLinks!: pulumi.Output<outputs.PageLoadApiLink[]>;
    /**
     * [NONE, BASIC, NTLM, KERBEROS] The HTTP authentication type. Defaults to NONE.
     */
    public readonly authType!: pulumi.Output<string | undefined>;
    /**
     * Set to 1 to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that
     * networkMeasurements is set. Defaults to 'false'.
     */
    public readonly bandwidthMeasurements!: pulumi.Output<boolean | undefined>;
    /**
     * Enable BGP measurements. Set to true for enabled, false for disabled.
     */
    public readonly bgpMeasurements!: pulumi.Output<boolean | undefined>;
    /**
     * The array of BGP monitor object IDs. The monitorIDs can be sourced from the /bgp-monitors endpoint.
     */
    public readonly bgpMonitors!: pulumi.Output<outputs.PageLoadBgpMonitor[] | undefined>;
    /**
     * Verify content using a regular expression. This field does not require escaping.
     */
    public readonly contentRegex!: pulumi.Output<string | undefined>;
    /**
     * Created by user.
     */
    public /*out*/ readonly createdBy!: pulumi.Output<string>;
    /**
     * The date of creation.
     */
    public /*out*/ readonly createdDate!: pulumi.Output<string>;
    /**
     * The custom headers.
     */
    public readonly customHeaders!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * A description of the alert rule. Defaults to an empty string.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Enables or disables the test.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Follow HTTP/301 or HTTP/302 redirect directives. Defaults to 'true'.
     */
    public readonly followRedirects!: pulumi.Output<boolean | undefined>;
    /**
     * The array of label objects.
     */
    public /*out*/ readonly groups!: pulumi.Output<outputs.PageLoadGroup[]>;
    /**
     * The interval to run the HTTP server test on.
     */
    public readonly httpInterval!: pulumi.Output<number>;
    /**
     * The target time for HTTP server completion, specified in milliseconds.
     */
    public readonly httpTargetTime!: pulumi.Output<number | undefined>;
    /**
     * The target time for HTTP server limits, specified in seconds.
     */
    public readonly httpTimeLimit!: pulumi.Output<number | undefined>;
    /**
     * Set to 2 for the default HTTP version (prefer HTTP/2), or 1 for HTTP/1.1 only.
     */
    public readonly httpVersion!: pulumi.Output<number | undefined>;
    /**
     * Set to 'true' to capture response headers for objects loaded by the test.
     */
    public readonly includeHeaders!: pulumi.Output<boolean | undefined>;
    /**
     * The interval to run the test on, in seconds.
     */
    public readonly interval!: pulumi.Output<number>;
    /**
     * Set to 'true' for a test shared with your account group, or to 'false' for a normal test.
     */
    public /*out*/ readonly liveShare!: pulumi.Output<boolean>;
    /**
     * Last modified by this user.
     */
    public /*out*/ readonly modifiedBy!: pulumi.Output<string>;
    /**
     * The date the test was last modified. Shown in UTC.
     */
    public /*out*/ readonly modifiedDate!: pulumi.Output<string>;
    /**
     * Measure MTU sizes on the network from agents to the target.
     */
    public readonly mtuMeasurements!: pulumi.Output<boolean | undefined>;
    /**
     * Set to 'true' to enable network measurements.
     */
    public readonly networkMeasurements!: pulumi.Output<boolean | undefined>;
    /**
     * The number of path traces.
     */
    public readonly numPathTraces!: pulumi.Output<number | undefined>;
    /**
     * The target time for page load completion, specified in seconds (1 to 30). The value cannot exceed the pageLoadTimeLimit
     * value.
     */
    public readonly pageLoadTargetTime!: pulumi.Output<number | undefined>;
    /**
     * The page load time limit. This value must be larger than httpTimeLimit, and defaults to 10 seconds.
     */
    public readonly pageLoadTimeLimit!: pulumi.Output<number | undefined>;
    /**
     * The password to be used to authenticate with the destination server.
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * [classic or inSession] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
     */
    public readonly pathTraceMode!: pulumi.Output<string | undefined>;
    /**
     * [AUTO, SACk, or SYN] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP.
     * The default value is AUTO.
     */
    public readonly probeMode!: pulumi.Output<string | undefined>;
    /**
     * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is TCP.
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * Set to 'true' for a saved event, or to 'false' for a normal test.
     */
    public /*out*/ readonly savedEvent!: pulumi.Output<boolean>;
    /**
     * [“serverName”: “fqdn of server”] The array of DNS Server objects.
     */
    public readonly sharedWithAccounts!: pulumi.Output<outputs.PageLoadSharedWithAccount[] | undefined>;
    /**
     * Reflects the verbose ssl protocol version used by a test.
     */
    public /*out*/ readonly sslVersion!: pulumi.Output<string>;
    /**
     * Defines the SSL version. 0 for auto, 3 for SSLv3, 4 for TLS v1.0, 5 for TLS v1.1, 6 for TLS v1.2.
     */
    public readonly sslVersionId!: pulumi.Output<number | undefined>;
    /**
     * The subinterval for round-robin testing (in seconds). The value must be less than or equal to 'interval'.
     */
    public readonly subinterval!: pulumi.Output<number | undefined>;
    /**
     * The unique ID of the test.
     */
    public /*out*/ readonly testId!: pulumi.Output<number>;
    /**
     * The name of the test.
     */
    public readonly testName!: pulumi.Output<string>;
    /**
     * The type of test.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The target URL for the test.
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * Enable to use basic authentication. Only include this field if you are using authentication. Requires the username and
     * password to be set if enabled.
     */
    public readonly useNtlm!: pulumi.Output<boolean | undefined>;
    /**
     * Enable to automatically add all available Public BGP Monitors to the test.
     */
    public readonly usePublicBgp!: pulumi.Output<boolean | undefined>;
    /**
     * The user-agent string to be provided during the test.
     */
    public readonly userAgent!: pulumi.Output<string | undefined>;
    /**
     * The username to be used to authenticate with the destination server.
     */
    public readonly username!: pulumi.Output<string | undefined>;
    /**
     * Set whether to ignore certificate errors. Set to 'false' to ignore certificate errors. The default value is 'true'.
     */
    public readonly verifyCertificate!: pulumi.Output<boolean | undefined>;

    /**
     * Create a PageLoad resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PageLoadArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PageLoadArgs | PageLoadState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PageLoadState | undefined;
            resourceInputs["agents"] = state ? state.agents : undefined;
            resourceInputs["alertRules"] = state ? state.alertRules : undefined;
            resourceInputs["alertsEnabled"] = state ? state.alertsEnabled : undefined;
            resourceInputs["apiLinks"] = state ? state.apiLinks : undefined;
            resourceInputs["authType"] = state ? state.authType : undefined;
            resourceInputs["bandwidthMeasurements"] = state ? state.bandwidthMeasurements : undefined;
            resourceInputs["bgpMeasurements"] = state ? state.bgpMeasurements : undefined;
            resourceInputs["bgpMonitors"] = state ? state.bgpMonitors : undefined;
            resourceInputs["contentRegex"] = state ? state.contentRegex : undefined;
            resourceInputs["createdBy"] = state ? state.createdBy : undefined;
            resourceInputs["createdDate"] = state ? state.createdDate : undefined;
            resourceInputs["customHeaders"] = state ? state.customHeaders : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["followRedirects"] = state ? state.followRedirects : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["httpInterval"] = state ? state.httpInterval : undefined;
            resourceInputs["httpTargetTime"] = state ? state.httpTargetTime : undefined;
            resourceInputs["httpTimeLimit"] = state ? state.httpTimeLimit : undefined;
            resourceInputs["httpVersion"] = state ? state.httpVersion : undefined;
            resourceInputs["includeHeaders"] = state ? state.includeHeaders : undefined;
            resourceInputs["interval"] = state ? state.interval : undefined;
            resourceInputs["liveShare"] = state ? state.liveShare : undefined;
            resourceInputs["modifiedBy"] = state ? state.modifiedBy : undefined;
            resourceInputs["modifiedDate"] = state ? state.modifiedDate : undefined;
            resourceInputs["mtuMeasurements"] = state ? state.mtuMeasurements : undefined;
            resourceInputs["networkMeasurements"] = state ? state.networkMeasurements : undefined;
            resourceInputs["numPathTraces"] = state ? state.numPathTraces : undefined;
            resourceInputs["pageLoadTargetTime"] = state ? state.pageLoadTargetTime : undefined;
            resourceInputs["pageLoadTimeLimit"] = state ? state.pageLoadTimeLimit : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["pathTraceMode"] = state ? state.pathTraceMode : undefined;
            resourceInputs["probeMode"] = state ? state.probeMode : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["savedEvent"] = state ? state.savedEvent : undefined;
            resourceInputs["sharedWithAccounts"] = state ? state.sharedWithAccounts : undefined;
            resourceInputs["sslVersion"] = state ? state.sslVersion : undefined;
            resourceInputs["sslVersionId"] = state ? state.sslVersionId : undefined;
            resourceInputs["subinterval"] = state ? state.subinterval : undefined;
            resourceInputs["testId"] = state ? state.testId : undefined;
            resourceInputs["testName"] = state ? state.testName : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["useNtlm"] = state ? state.useNtlm : undefined;
            resourceInputs["usePublicBgp"] = state ? state.usePublicBgp : undefined;
            resourceInputs["userAgent"] = state ? state.userAgent : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["verifyCertificate"] = state ? state.verifyCertificate : undefined;
        } else {
            const args = argsOrState as PageLoadArgs | undefined;
            if ((!args || args.agents === undefined) && !opts.urn) {
                throw new Error("Missing required property 'agents'");
            }
            if ((!args || args.httpInterval === undefined) && !opts.urn) {
                throw new Error("Missing required property 'httpInterval'");
            }
            if ((!args || args.interval === undefined) && !opts.urn) {
                throw new Error("Missing required property 'interval'");
            }
            if ((!args || args.testName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testName'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["agents"] = args ? args.agents : undefined;
            resourceInputs["alertRules"] = args ? args.alertRules : undefined;
            resourceInputs["alertsEnabled"] = args ? args.alertsEnabled : undefined;
            resourceInputs["authType"] = args ? args.authType : undefined;
            resourceInputs["bandwidthMeasurements"] = args ? args.bandwidthMeasurements : undefined;
            resourceInputs["bgpMeasurements"] = args ? args.bgpMeasurements : undefined;
            resourceInputs["bgpMonitors"] = args ? args.bgpMonitors : undefined;
            resourceInputs["contentRegex"] = args ? args.contentRegex : undefined;
            resourceInputs["customHeaders"] = args ? args.customHeaders : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["followRedirects"] = args ? args.followRedirects : undefined;
            resourceInputs["httpInterval"] = args ? args.httpInterval : undefined;
            resourceInputs["httpTargetTime"] = args ? args.httpTargetTime : undefined;
            resourceInputs["httpTimeLimit"] = args ? args.httpTimeLimit : undefined;
            resourceInputs["httpVersion"] = args ? args.httpVersion : undefined;
            resourceInputs["includeHeaders"] = args ? args.includeHeaders : undefined;
            resourceInputs["interval"] = args ? args.interval : undefined;
            resourceInputs["mtuMeasurements"] = args ? args.mtuMeasurements : undefined;
            resourceInputs["networkMeasurements"] = args ? args.networkMeasurements : undefined;
            resourceInputs["numPathTraces"] = args ? args.numPathTraces : undefined;
            resourceInputs["pageLoadTargetTime"] = args ? args.pageLoadTargetTime : undefined;
            resourceInputs["pageLoadTimeLimit"] = args ? args.pageLoadTimeLimit : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["pathTraceMode"] = args ? args.pathTraceMode : undefined;
            resourceInputs["probeMode"] = args ? args.probeMode : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["sharedWithAccounts"] = args ? args.sharedWithAccounts : undefined;
            resourceInputs["sslVersionId"] = args ? args.sslVersionId : undefined;
            resourceInputs["subinterval"] = args ? args.subinterval : undefined;
            resourceInputs["testName"] = args ? args.testName : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["useNtlm"] = args ? args.useNtlm : undefined;
            resourceInputs["usePublicBgp"] = args ? args.usePublicBgp : undefined;
            resourceInputs["userAgent"] = args ? args.userAgent : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["verifyCertificate"] = args ? args.verifyCertificate : undefined;
            resourceInputs["apiLinks"] = undefined /*out*/;
            resourceInputs["createdBy"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["groups"] = undefined /*out*/;
            resourceInputs["liveShare"] = undefined /*out*/;
            resourceInputs["modifiedBy"] = undefined /*out*/;
            resourceInputs["modifiedDate"] = undefined /*out*/;
            resourceInputs["savedEvent"] = undefined /*out*/;
            resourceInputs["sslVersion"] = undefined /*out*/;
            resourceInputs["testId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PageLoad.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PageLoad resources.
 */
export interface PageLoadState {
    /**
     * The list of ThousandEyes agents to use.
     */
    agents?: pulumi.Input<pulumi.Input<inputs.PageLoadAgent>[]>;
    /**
     * Gets the ruleId from the /alert-rules endpoint. If alertsEnabled is set to 'true' and alertRules is not included in a
     * creation/update query, the applicable defaults will be used.
     */
    alertRules?: pulumi.Input<pulumi.Input<inputs.PageLoadAlertRule>[]>;
    /**
     * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
     */
    alertsEnabled?: pulumi.Input<boolean>;
    /**
     * Self links to the endpoint to pull test metadata, and data links to the endpoint for test data. Read-only, and shows rel
     * and href elements.
     */
    apiLinks?: pulumi.Input<pulumi.Input<inputs.PageLoadApiLink>[]>;
    /**
     * [NONE, BASIC, NTLM, KERBEROS] The HTTP authentication type. Defaults to NONE.
     */
    authType?: pulumi.Input<string>;
    /**
     * Set to 1 to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that
     * networkMeasurements is set. Defaults to 'false'.
     */
    bandwidthMeasurements?: pulumi.Input<boolean>;
    /**
     * Enable BGP measurements. Set to true for enabled, false for disabled.
     */
    bgpMeasurements?: pulumi.Input<boolean>;
    /**
     * The array of BGP monitor object IDs. The monitorIDs can be sourced from the /bgp-monitors endpoint.
     */
    bgpMonitors?: pulumi.Input<pulumi.Input<inputs.PageLoadBgpMonitor>[]>;
    /**
     * Verify content using a regular expression. This field does not require escaping.
     */
    contentRegex?: pulumi.Input<string>;
    /**
     * Created by user.
     */
    createdBy?: pulumi.Input<string>;
    /**
     * The date of creation.
     */
    createdDate?: pulumi.Input<string>;
    /**
     * The custom headers.
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A description of the alert rule. Defaults to an empty string.
     */
    description?: pulumi.Input<string>;
    /**
     * Enables or disables the test.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Follow HTTP/301 or HTTP/302 redirect directives. Defaults to 'true'.
     */
    followRedirects?: pulumi.Input<boolean>;
    /**
     * The array of label objects.
     */
    groups?: pulumi.Input<pulumi.Input<inputs.PageLoadGroup>[]>;
    /**
     * The interval to run the HTTP server test on.
     */
    httpInterval?: pulumi.Input<number>;
    /**
     * The target time for HTTP server completion, specified in milliseconds.
     */
    httpTargetTime?: pulumi.Input<number>;
    /**
     * The target time for HTTP server limits, specified in seconds.
     */
    httpTimeLimit?: pulumi.Input<number>;
    /**
     * Set to 2 for the default HTTP version (prefer HTTP/2), or 1 for HTTP/1.1 only.
     */
    httpVersion?: pulumi.Input<number>;
    /**
     * Set to 'true' to capture response headers for objects loaded by the test.
     */
    includeHeaders?: pulumi.Input<boolean>;
    /**
     * The interval to run the test on, in seconds.
     */
    interval?: pulumi.Input<number>;
    /**
     * Set to 'true' for a test shared with your account group, or to 'false' for a normal test.
     */
    liveShare?: pulumi.Input<boolean>;
    /**
     * Last modified by this user.
     */
    modifiedBy?: pulumi.Input<string>;
    /**
     * The date the test was last modified. Shown in UTC.
     */
    modifiedDate?: pulumi.Input<string>;
    /**
     * Measure MTU sizes on the network from agents to the target.
     */
    mtuMeasurements?: pulumi.Input<boolean>;
    /**
     * Set to 'true' to enable network measurements.
     */
    networkMeasurements?: pulumi.Input<boolean>;
    /**
     * The number of path traces.
     */
    numPathTraces?: pulumi.Input<number>;
    /**
     * The target time for page load completion, specified in seconds (1 to 30). The value cannot exceed the pageLoadTimeLimit
     * value.
     */
    pageLoadTargetTime?: pulumi.Input<number>;
    /**
     * The page load time limit. This value must be larger than httpTimeLimit, and defaults to 10 seconds.
     */
    pageLoadTimeLimit?: pulumi.Input<number>;
    /**
     * The password to be used to authenticate with the destination server.
     */
    password?: pulumi.Input<string>;
    /**
     * [classic or inSession] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
     */
    pathTraceMode?: pulumi.Input<string>;
    /**
     * [AUTO, SACk, or SYN] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP.
     * The default value is AUTO.
     */
    probeMode?: pulumi.Input<string>;
    /**
     * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is TCP.
     */
    protocol?: pulumi.Input<string>;
    /**
     * Set to 'true' for a saved event, or to 'false' for a normal test.
     */
    savedEvent?: pulumi.Input<boolean>;
    /**
     * [“serverName”: “fqdn of server”] The array of DNS Server objects.
     */
    sharedWithAccounts?: pulumi.Input<pulumi.Input<inputs.PageLoadSharedWithAccount>[]>;
    /**
     * Reflects the verbose ssl protocol version used by a test.
     */
    sslVersion?: pulumi.Input<string>;
    /**
     * Defines the SSL version. 0 for auto, 3 for SSLv3, 4 for TLS v1.0, 5 for TLS v1.1, 6 for TLS v1.2.
     */
    sslVersionId?: pulumi.Input<number>;
    /**
     * The subinterval for round-robin testing (in seconds). The value must be less than or equal to 'interval'.
     */
    subinterval?: pulumi.Input<number>;
    /**
     * The unique ID of the test.
     */
    testId?: pulumi.Input<number>;
    /**
     * The name of the test.
     */
    testName?: pulumi.Input<string>;
    /**
     * The type of test.
     */
    type?: pulumi.Input<string>;
    /**
     * The target URL for the test.
     */
    url?: pulumi.Input<string>;
    /**
     * Enable to use basic authentication. Only include this field if you are using authentication. Requires the username and
     * password to be set if enabled.
     */
    useNtlm?: pulumi.Input<boolean>;
    /**
     * Enable to automatically add all available Public BGP Monitors to the test.
     */
    usePublicBgp?: pulumi.Input<boolean>;
    /**
     * The user-agent string to be provided during the test.
     */
    userAgent?: pulumi.Input<string>;
    /**
     * The username to be used to authenticate with the destination server.
     */
    username?: pulumi.Input<string>;
    /**
     * Set whether to ignore certificate errors. Set to 'false' to ignore certificate errors. The default value is 'true'.
     */
    verifyCertificate?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a PageLoad resource.
 */
export interface PageLoadArgs {
    /**
     * The list of ThousandEyes agents to use.
     */
    agents: pulumi.Input<pulumi.Input<inputs.PageLoadAgent>[]>;
    /**
     * Gets the ruleId from the /alert-rules endpoint. If alertsEnabled is set to 'true' and alertRules is not included in a
     * creation/update query, the applicable defaults will be used.
     */
    alertRules?: pulumi.Input<pulumi.Input<inputs.PageLoadAlertRule>[]>;
    /**
     * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
     */
    alertsEnabled?: pulumi.Input<boolean>;
    /**
     * [NONE, BASIC, NTLM, KERBEROS] The HTTP authentication type. Defaults to NONE.
     */
    authType?: pulumi.Input<string>;
    /**
     * Set to 1 to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that
     * networkMeasurements is set. Defaults to 'false'.
     */
    bandwidthMeasurements?: pulumi.Input<boolean>;
    /**
     * Enable BGP measurements. Set to true for enabled, false for disabled.
     */
    bgpMeasurements?: pulumi.Input<boolean>;
    /**
     * The array of BGP monitor object IDs. The monitorIDs can be sourced from the /bgp-monitors endpoint.
     */
    bgpMonitors?: pulumi.Input<pulumi.Input<inputs.PageLoadBgpMonitor>[]>;
    /**
     * Verify content using a regular expression. This field does not require escaping.
     */
    contentRegex?: pulumi.Input<string>;
    /**
     * The custom headers.
     */
    customHeaders?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * A description of the alert rule. Defaults to an empty string.
     */
    description?: pulumi.Input<string>;
    /**
     * Enables or disables the test.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Follow HTTP/301 or HTTP/302 redirect directives. Defaults to 'true'.
     */
    followRedirects?: pulumi.Input<boolean>;
    /**
     * The interval to run the HTTP server test on.
     */
    httpInterval: pulumi.Input<number>;
    /**
     * The target time for HTTP server completion, specified in milliseconds.
     */
    httpTargetTime?: pulumi.Input<number>;
    /**
     * The target time for HTTP server limits, specified in seconds.
     */
    httpTimeLimit?: pulumi.Input<number>;
    /**
     * Set to 2 for the default HTTP version (prefer HTTP/2), or 1 for HTTP/1.1 only.
     */
    httpVersion?: pulumi.Input<number>;
    /**
     * Set to 'true' to capture response headers for objects loaded by the test.
     */
    includeHeaders?: pulumi.Input<boolean>;
    /**
     * The interval to run the test on, in seconds.
     */
    interval: pulumi.Input<number>;
    /**
     * Measure MTU sizes on the network from agents to the target.
     */
    mtuMeasurements?: pulumi.Input<boolean>;
    /**
     * Set to 'true' to enable network measurements.
     */
    networkMeasurements?: pulumi.Input<boolean>;
    /**
     * The number of path traces.
     */
    numPathTraces?: pulumi.Input<number>;
    /**
     * The target time for page load completion, specified in seconds (1 to 30). The value cannot exceed the pageLoadTimeLimit
     * value.
     */
    pageLoadTargetTime?: pulumi.Input<number>;
    /**
     * The page load time limit. This value must be larger than httpTimeLimit, and defaults to 10 seconds.
     */
    pageLoadTimeLimit?: pulumi.Input<number>;
    /**
     * The password to be used to authenticate with the destination server.
     */
    password?: pulumi.Input<string>;
    /**
     * [classic or inSession] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
     */
    pathTraceMode?: pulumi.Input<string>;
    /**
     * [AUTO, SACk, or SYN] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP.
     * The default value is AUTO.
     */
    probeMode?: pulumi.Input<string>;
    /**
     * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is TCP.
     */
    protocol?: pulumi.Input<string>;
    /**
     * [“serverName”: “fqdn of server”] The array of DNS Server objects.
     */
    sharedWithAccounts?: pulumi.Input<pulumi.Input<inputs.PageLoadSharedWithAccount>[]>;
    /**
     * Defines the SSL version. 0 for auto, 3 for SSLv3, 4 for TLS v1.0, 5 for TLS v1.1, 6 for TLS v1.2.
     */
    sslVersionId?: pulumi.Input<number>;
    /**
     * The subinterval for round-robin testing (in seconds). The value must be less than or equal to 'interval'.
     */
    subinterval?: pulumi.Input<number>;
    /**
     * The name of the test.
     */
    testName: pulumi.Input<string>;
    /**
     * The target URL for the test.
     */
    url: pulumi.Input<string>;
    /**
     * Enable to use basic authentication. Only include this field if you are using authentication. Requires the username and
     * password to be set if enabled.
     */
    useNtlm?: pulumi.Input<boolean>;
    /**
     * Enable to automatically add all available Public BGP Monitors to the test.
     */
    usePublicBgp?: pulumi.Input<boolean>;
    /**
     * The user-agent string to be provided during the test.
     */
    userAgent?: pulumi.Input<string>;
    /**
     * The username to be used to authenticate with the destination server.
     */
    username?: pulumi.Input<string>;
    /**
     * Set whether to ignore certificate errors. Set to 'false' to ignore certificate errors. The default value is 'true'.
     */
    verifyCertificate?: pulumi.Input<boolean>;
}
