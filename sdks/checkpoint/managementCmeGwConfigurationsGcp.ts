// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ManagementCmeGwConfigurationsGcp extends pulumi.CustomResource {
    /**
     * Get an existing ManagementCmeGwConfigurationsGcp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementCmeGwConfigurationsGcpState, opts?: pulumi.CustomResourceOptions): ManagementCmeGwConfigurationsGcp {
        return new ManagementCmeGwConfigurationsGcp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementCmeGwConfigurationsGcp:ManagementCmeGwConfigurationsGcp';

    /**
     * Returns true if the given object is an instance of ManagementCmeGwConfigurationsGcp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementCmeGwConfigurationsGcp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementCmeGwConfigurationsGcp.__pulumiType;
    }

    /**
     * Base64 key for trusted communication between management and GW.
     */
    public readonly base64SicKey!: pulumi.Output<string>;
    /**
     * Dictionary of activated/deactivated blades on the GW.
     */
    public readonly blades!: pulumi.Output<outputs.ManagementCmeGwConfigurationsGcpBlades>;
    /**
     * The GW configuration name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Policy name to be installed on the GW.
     */
    public readonly policy!: pulumi.Output<string>;
    /**
     * The CME account to associate with the GW Configuration.
     */
    public readonly relatedAccount!: pulumi.Output<string>;
    /**
     * List of objects that each contains name/UID of a script that exists in the scripts repository on the Management server.
     */
    public readonly repositoryGatewayScripts!: pulumi.Output<outputs.ManagementCmeGwConfigurationsGcpRepositoryGatewayScript[] | undefined>;
    /**
     * Alert Log Servers names to which alerts are sent.
     */
    public readonly sendAlertsToServers!: pulumi.Output<string[] | undefined>;
    /**
     * Backup Log Servers names to which logs are sent in case Primary Log Servers are unavailable.
     */
    public readonly sendLogsToBackupServers!: pulumi.Output<string[] | undefined>;
    /**
     * Primary Log Servers names to which logs are sent. Defined Log Server will act as Log and Alert Servers. Must be defined
     * as part of Log Servers parameters.
     */
    public readonly sendLogsToServers!: pulumi.Output<string[] | undefined>;
    /**
     * The GW version.
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a ManagementCmeGwConfigurationsGcp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagementCmeGwConfigurationsGcpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementCmeGwConfigurationsGcpArgs | ManagementCmeGwConfigurationsGcpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementCmeGwConfigurationsGcpState | undefined;
            resourceInputs["base64SicKey"] = state ? state.base64SicKey : undefined;
            resourceInputs["blades"] = state ? state.blades : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
            resourceInputs["relatedAccount"] = state ? state.relatedAccount : undefined;
            resourceInputs["repositoryGatewayScripts"] = state ? state.repositoryGatewayScripts : undefined;
            resourceInputs["sendAlertsToServers"] = state ? state.sendAlertsToServers : undefined;
            resourceInputs["sendLogsToBackupServers"] = state ? state.sendLogsToBackupServers : undefined;
            resourceInputs["sendLogsToServers"] = state ? state.sendLogsToServers : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ManagementCmeGwConfigurationsGcpArgs | undefined;
            if ((!args || args.base64SicKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'base64SicKey'");
            }
            if ((!args || args.blades === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blades'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            if ((!args || args.relatedAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'relatedAccount'");
            }
            if ((!args || args.version === undefined) && !opts.urn) {
                throw new Error("Missing required property 'version'");
            }
            resourceInputs["base64SicKey"] = args ? args.base64SicKey : undefined;
            resourceInputs["blades"] = args ? args.blades : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
            resourceInputs["relatedAccount"] = args ? args.relatedAccount : undefined;
            resourceInputs["repositoryGatewayScripts"] = args ? args.repositoryGatewayScripts : undefined;
            resourceInputs["sendAlertsToServers"] = args ? args.sendAlertsToServers : undefined;
            resourceInputs["sendLogsToBackupServers"] = args ? args.sendLogsToBackupServers : undefined;
            resourceInputs["sendLogsToServers"] = args ? args.sendLogsToServers : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementCmeGwConfigurationsGcp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementCmeGwConfigurationsGcp resources.
 */
export interface ManagementCmeGwConfigurationsGcpState {
    /**
     * Base64 key for trusted communication between management and GW.
     */
    base64SicKey?: pulumi.Input<string>;
    /**
     * Dictionary of activated/deactivated blades on the GW.
     */
    blades?: pulumi.Input<inputs.ManagementCmeGwConfigurationsGcpBlades>;
    /**
     * The GW configuration name.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy name to be installed on the GW.
     */
    policy?: pulumi.Input<string>;
    /**
     * The CME account to associate with the GW Configuration.
     */
    relatedAccount?: pulumi.Input<string>;
    /**
     * List of objects that each contains name/UID of a script that exists in the scripts repository on the Management server.
     */
    repositoryGatewayScripts?: pulumi.Input<pulumi.Input<inputs.ManagementCmeGwConfigurationsGcpRepositoryGatewayScript>[]>;
    /**
     * Alert Log Servers names to which alerts are sent.
     */
    sendAlertsToServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Backup Log Servers names to which logs are sent in case Primary Log Servers are unavailable.
     */
    sendLogsToBackupServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Primary Log Servers names to which logs are sent. Defined Log Server will act as Log and Alert Servers. Must be defined
     * as part of Log Servers parameters.
     */
    sendLogsToServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The GW version.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ManagementCmeGwConfigurationsGcp resource.
 */
export interface ManagementCmeGwConfigurationsGcpArgs {
    /**
     * Base64 key for trusted communication between management and GW.
     */
    base64SicKey: pulumi.Input<string>;
    /**
     * Dictionary of activated/deactivated blades on the GW.
     */
    blades: pulumi.Input<inputs.ManagementCmeGwConfigurationsGcpBlades>;
    /**
     * The GW configuration name.
     */
    name?: pulumi.Input<string>;
    /**
     * Policy name to be installed on the GW.
     */
    policy: pulumi.Input<string>;
    /**
     * The CME account to associate with the GW Configuration.
     */
    relatedAccount: pulumi.Input<string>;
    /**
     * List of objects that each contains name/UID of a script that exists in the scripts repository on the Management server.
     */
    repositoryGatewayScripts?: pulumi.Input<pulumi.Input<inputs.ManagementCmeGwConfigurationsGcpRepositoryGatewayScript>[]>;
    /**
     * Alert Log Servers names to which alerts are sent.
     */
    sendAlertsToServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Backup Log Servers names to which logs are sent in case Primary Log Servers are unavailable.
     */
    sendLogsToBackupServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Primary Log Servers names to which logs are sent. Defined Log Server will act as Log and Alert Servers. Must be defined
     * as part of Log Servers parameters.
     */
    sendLogsToServers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The GW version.
     */
    version: pulumi.Input<string>;
}
