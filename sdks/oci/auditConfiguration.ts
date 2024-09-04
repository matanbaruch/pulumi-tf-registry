// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AuditConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing AuditConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuditConfigurationState, opts?: pulumi.CustomResourceOptions): AuditConfiguration {
        return new AuditConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/auditConfiguration:AuditConfiguration';

    /**
     * Returns true if the given object is an instance of AuditConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AuditConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AuditConfiguration.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly retentionPeriodDays!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.AuditConfigurationTimeouts | undefined>;

    /**
     * Create a AuditConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuditConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AuditConfigurationArgs | AuditConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AuditConfigurationState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["retentionPeriodDays"] = state ? state.retentionPeriodDays : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AuditConfigurationArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.retentionPeriodDays === undefined) && !opts.urn) {
                throw new Error("Missing required property 'retentionPeriodDays'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["retentionPeriodDays"] = args ? args.retentionPeriodDays : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AuditConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AuditConfiguration resources.
 */
export interface AuditConfigurationState {
    compartmentId?: pulumi.Input<string>;
    retentionPeriodDays?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.AuditConfigurationTimeouts>;
}

/**
 * The set of arguments for constructing a AuditConfiguration resource.
 */
export interface AuditConfigurationArgs {
    compartmentId: pulumi.Input<string>;
    retentionPeriodDays: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.AuditConfigurationTimeouts>;
}
