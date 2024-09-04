// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoggingBillingAccountExclusion extends pulumi.CustomResource {
    /**
     * Get an existing LoggingBillingAccountExclusion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoggingBillingAccountExclusionState, opts?: pulumi.CustomResourceOptions): LoggingBillingAccountExclusion {
        return new LoggingBillingAccountExclusion(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/loggingBillingAccountExclusion:LoggingBillingAccountExclusion';

    /**
     * Returns true if the given object is an instance of LoggingBillingAccountExclusion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoggingBillingAccountExclusion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoggingBillingAccountExclusion.__pulumiType;
    }

    public readonly billingAccount!: pulumi.Output<string>;
    /**
     * A human-readable description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Whether this exclusion rule should be disabled or not. This defaults to false.
     */
    public readonly disabled!: pulumi.Output<boolean | undefined>;
    /**
     * The filter to apply when excluding logs. Only log entries that match the filter are excluded.
     */
    public readonly filter!: pulumi.Output<string>;
    /**
     * The name of the logging exclusion.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a LoggingBillingAccountExclusion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoggingBillingAccountExclusionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoggingBillingAccountExclusionArgs | LoggingBillingAccountExclusionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoggingBillingAccountExclusionState | undefined;
            resourceInputs["billingAccount"] = state ? state.billingAccount : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disabled"] = state ? state.disabled : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as LoggingBillingAccountExclusionArgs | undefined;
            if ((!args || args.billingAccount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'billingAccount'");
            }
            if ((!args || args.filter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filter'");
            }
            resourceInputs["billingAccount"] = args ? args.billingAccount : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disabled"] = args ? args.disabled : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoggingBillingAccountExclusion.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoggingBillingAccountExclusion resources.
 */
export interface LoggingBillingAccountExclusionState {
    billingAccount?: pulumi.Input<string>;
    /**
     * A human-readable description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this exclusion rule should be disabled or not. This defaults to false.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The filter to apply when excluding logs. Only log entries that match the filter are excluded.
     */
    filter?: pulumi.Input<string>;
    /**
     * The name of the logging exclusion.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoggingBillingAccountExclusion resource.
 */
export interface LoggingBillingAccountExclusionArgs {
    billingAccount: pulumi.Input<string>;
    /**
     * A human-readable description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether this exclusion rule should be disabled or not. This defaults to false.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The filter to apply when excluding logs. Only log entries that match the filter are excluded.
     */
    filter: pulumi.Input<string>;
    /**
     * The name of the logging exclusion.
     */
    name?: pulumi.Input<string>;
}
