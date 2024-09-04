// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecurityPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SecurityPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityPolicyState, opts?: pulumi.CustomResourceOptions): SecurityPolicy {
        return new SecurityPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/securityPolicy:SecurityPolicy';

    /**
     * Returns true if the given object is an instance of SecurityPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecurityPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecurityPolicy.__pulumiType;
    }

    /**
     * Audit trail - Choices: `on`, `off`
     */
    public readonly auditTrail!: pulumi.Output<string | undefined>;
    /**
     * List of policy definitions
     */
    public readonly definitions!: pulumi.Output<outputs.SecurityPolicyDefinition[]>;
    /**
     * The description of the security policy
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Bypass firewall policy and allow all Internet traffic to/from VPN 0 - Choices: `allow`, `deny`
     */
    public readonly directInternetApplications!: pulumi.Output<string | undefined>;
    /**
     * Failure mode - Choices: `open`, `close`
     */
    public readonly failureMode!: pulumi.Output<string | undefined>;
    /**
     * High Speed Logging Server IP
     */
    public readonly highSpeedLoggingServerIp!: pulumi.Output<string | undefined>;
    /**
     * High Speed Logging Port
     */
    public readonly highSpeedLoggingServerPort!: pulumi.Output<string | undefined>;
    /**
     * High Speed Logging VPN
     */
    public readonly highSpeedLoggingVpn!: pulumi.Output<string | undefined>;
    public readonly loggings!: pulumi.Output<outputs.SecurityPolicyLogging[] | undefined>;
    /**
     * Match Statistics per-filter - Choices: `on`, `off`
     */
    public readonly matchStatisticsPerFilter!: pulumi.Output<string | undefined>;
    /**
     * The policy mode - Choices: `security`, `unified` - Default value: `security`
     */
    public readonly mode!: pulumi.Output<string>;
    /**
     * The name of the security policy
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * TCP SYN Flood Limit, value from 1 to 4294967295
     */
    public readonly tcpSynFloodLimit!: pulumi.Output<string | undefined>;
    /**
     * The use case of the security policy - Choices: `custom`, `compliance`, `guestAccess`, `directCloudAccess`,
     * `directInternetAccess`, `directCloudAccess` - Default value: `custom`
     */
    public readonly useCase!: pulumi.Output<string>;
    /**
     * The version of the object
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a SecurityPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecurityPolicyArgs | SecurityPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecurityPolicyState | undefined;
            resourceInputs["auditTrail"] = state ? state.auditTrail : undefined;
            resourceInputs["definitions"] = state ? state.definitions : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["directInternetApplications"] = state ? state.directInternetApplications : undefined;
            resourceInputs["failureMode"] = state ? state.failureMode : undefined;
            resourceInputs["highSpeedLoggingServerIp"] = state ? state.highSpeedLoggingServerIp : undefined;
            resourceInputs["highSpeedLoggingServerPort"] = state ? state.highSpeedLoggingServerPort : undefined;
            resourceInputs["highSpeedLoggingVpn"] = state ? state.highSpeedLoggingVpn : undefined;
            resourceInputs["loggings"] = state ? state.loggings : undefined;
            resourceInputs["matchStatisticsPerFilter"] = state ? state.matchStatisticsPerFilter : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tcpSynFloodLimit"] = state ? state.tcpSynFloodLimit : undefined;
            resourceInputs["useCase"] = state ? state.useCase : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SecurityPolicyArgs | undefined;
            if ((!args || args.definitions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'definitions'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["auditTrail"] = args ? args.auditTrail : undefined;
            resourceInputs["definitions"] = args ? args.definitions : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["directInternetApplications"] = args ? args.directInternetApplications : undefined;
            resourceInputs["failureMode"] = args ? args.failureMode : undefined;
            resourceInputs["highSpeedLoggingServerIp"] = args ? args.highSpeedLoggingServerIp : undefined;
            resourceInputs["highSpeedLoggingServerPort"] = args ? args.highSpeedLoggingServerPort : undefined;
            resourceInputs["highSpeedLoggingVpn"] = args ? args.highSpeedLoggingVpn : undefined;
            resourceInputs["loggings"] = args ? args.loggings : undefined;
            resourceInputs["matchStatisticsPerFilter"] = args ? args.matchStatisticsPerFilter : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tcpSynFloodLimit"] = args ? args.tcpSynFloodLimit : undefined;
            resourceInputs["useCase"] = args ? args.useCase : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecurityPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecurityPolicy resources.
 */
export interface SecurityPolicyState {
    /**
     * Audit trail - Choices: `on`, `off`
     */
    auditTrail?: pulumi.Input<string>;
    /**
     * List of policy definitions
     */
    definitions?: pulumi.Input<pulumi.Input<inputs.SecurityPolicyDefinition>[]>;
    /**
     * The description of the security policy
     */
    description?: pulumi.Input<string>;
    /**
     * Bypass firewall policy and allow all Internet traffic to/from VPN 0 - Choices: `allow`, `deny`
     */
    directInternetApplications?: pulumi.Input<string>;
    /**
     * Failure mode - Choices: `open`, `close`
     */
    failureMode?: pulumi.Input<string>;
    /**
     * High Speed Logging Server IP
     */
    highSpeedLoggingServerIp?: pulumi.Input<string>;
    /**
     * High Speed Logging Port
     */
    highSpeedLoggingServerPort?: pulumi.Input<string>;
    /**
     * High Speed Logging VPN
     */
    highSpeedLoggingVpn?: pulumi.Input<string>;
    loggings?: pulumi.Input<pulumi.Input<inputs.SecurityPolicyLogging>[]>;
    /**
     * Match Statistics per-filter - Choices: `on`, `off`
     */
    matchStatisticsPerFilter?: pulumi.Input<string>;
    /**
     * The policy mode - Choices: `security`, `unified` - Default value: `security`
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the security policy
     */
    name?: pulumi.Input<string>;
    /**
     * TCP SYN Flood Limit, value from 1 to 4294967295
     */
    tcpSynFloodLimit?: pulumi.Input<string>;
    /**
     * The use case of the security policy - Choices: `custom`, `compliance`, `guestAccess`, `directCloudAccess`,
     * `directInternetAccess`, `directCloudAccess` - Default value: `custom`
     */
    useCase?: pulumi.Input<string>;
    /**
     * The version of the object
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SecurityPolicy resource.
 */
export interface SecurityPolicyArgs {
    /**
     * Audit trail - Choices: `on`, `off`
     */
    auditTrail?: pulumi.Input<string>;
    /**
     * List of policy definitions
     */
    definitions: pulumi.Input<pulumi.Input<inputs.SecurityPolicyDefinition>[]>;
    /**
     * The description of the security policy
     */
    description: pulumi.Input<string>;
    /**
     * Bypass firewall policy and allow all Internet traffic to/from VPN 0 - Choices: `allow`, `deny`
     */
    directInternetApplications?: pulumi.Input<string>;
    /**
     * Failure mode - Choices: `open`, `close`
     */
    failureMode?: pulumi.Input<string>;
    /**
     * High Speed Logging Server IP
     */
    highSpeedLoggingServerIp?: pulumi.Input<string>;
    /**
     * High Speed Logging Port
     */
    highSpeedLoggingServerPort?: pulumi.Input<string>;
    /**
     * High Speed Logging VPN
     */
    highSpeedLoggingVpn?: pulumi.Input<string>;
    loggings?: pulumi.Input<pulumi.Input<inputs.SecurityPolicyLogging>[]>;
    /**
     * Match Statistics per-filter - Choices: `on`, `off`
     */
    matchStatisticsPerFilter?: pulumi.Input<string>;
    /**
     * The policy mode - Choices: `security`, `unified` - Default value: `security`
     */
    mode?: pulumi.Input<string>;
    /**
     * The name of the security policy
     */
    name?: pulumi.Input<string>;
    /**
     * TCP SYN Flood Limit, value from 1 to 4294967295
     */
    tcpSynFloodLimit?: pulumi.Input<string>;
    /**
     * The use case of the security policy - Choices: `custom`, `compliance`, `guestAccess`, `directCloudAccess`,
     * `directInternetAccess`, `directCloudAccess` - Default value: `custom`
     */
    useCase?: pulumi.Input<string>;
}
