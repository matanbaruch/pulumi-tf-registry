// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SentinelDataConnectorMicrosoftThreatProtection extends pulumi.CustomResource {
    /**
     * Get an existing SentinelDataConnectorMicrosoftThreatProtection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SentinelDataConnectorMicrosoftThreatProtectionState, opts?: pulumi.CustomResourceOptions): SentinelDataConnectorMicrosoftThreatProtection {
        return new SentinelDataConnectorMicrosoftThreatProtection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/sentinelDataConnectorMicrosoftThreatProtection:SentinelDataConnectorMicrosoftThreatProtection';

    /**
     * Returns true if the given object is an instance of SentinelDataConnectorMicrosoftThreatProtection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SentinelDataConnectorMicrosoftThreatProtection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SentinelDataConnectorMicrosoftThreatProtection.__pulumiType;
    }

    public readonly logAnalyticsWorkspaceId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SentinelDataConnectorMicrosoftThreatProtectionTimeouts | undefined>;

    /**
     * Create a SentinelDataConnectorMicrosoftThreatProtection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SentinelDataConnectorMicrosoftThreatProtectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SentinelDataConnectorMicrosoftThreatProtectionArgs | SentinelDataConnectorMicrosoftThreatProtectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SentinelDataConnectorMicrosoftThreatProtectionState | undefined;
            resourceInputs["logAnalyticsWorkspaceId"] = state ? state.logAnalyticsWorkspaceId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SentinelDataConnectorMicrosoftThreatProtectionArgs | undefined;
            if ((!args || args.logAnalyticsWorkspaceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logAnalyticsWorkspaceId'");
            }
            resourceInputs["logAnalyticsWorkspaceId"] = args ? args.logAnalyticsWorkspaceId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SentinelDataConnectorMicrosoftThreatProtection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SentinelDataConnectorMicrosoftThreatProtection resources.
 */
export interface SentinelDataConnectorMicrosoftThreatProtectionState {
    logAnalyticsWorkspaceId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SentinelDataConnectorMicrosoftThreatProtectionTimeouts>;
}

/**
 * The set of arguments for constructing a SentinelDataConnectorMicrosoftThreatProtection resource.
 */
export interface SentinelDataConnectorMicrosoftThreatProtectionArgs {
    logAnalyticsWorkspaceId: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SentinelDataConnectorMicrosoftThreatProtectionTimeouts>;
}
