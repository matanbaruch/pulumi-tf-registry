// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SnmpServerMib extends pulumi.CustomResource {
    /**
     * Get an existing SnmpServerMib resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SnmpServerMibState, opts?: pulumi.CustomResourceOptions): SnmpServerMib {
        return new SnmpServerMib(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'iosxr:index/snmpServerMib:SnmpServerMib';

    /**
     * Returns true if the given object is an instance of SnmpServerMib.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SnmpServerMib {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SnmpServerMib.__pulumiType;
    }

    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    public readonly deleteMode!: pulumi.Output<string | undefined>;
    /**
     * A device name from the provider configuration.
     */
    public readonly device!: pulumi.Output<string | undefined>;
    /**
     * Persist interface indices
     */
    public readonly ifindexPersist!: pulumi.Output<boolean | undefined>;
    /**
     * Enable support for ifAlias values longer than 64 characters
     */
    public readonly ifmibIfaliasLong!: pulumi.Output<boolean | undefined>;

    /**
     * Create a SnmpServerMib resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SnmpServerMibArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SnmpServerMibArgs | SnmpServerMibState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SnmpServerMibState | undefined;
            resourceInputs["deleteMode"] = state ? state.deleteMode : undefined;
            resourceInputs["device"] = state ? state.device : undefined;
            resourceInputs["ifindexPersist"] = state ? state.ifindexPersist : undefined;
            resourceInputs["ifmibIfaliasLong"] = state ? state.ifmibIfaliasLong : undefined;
        } else {
            const args = argsOrState as SnmpServerMibArgs | undefined;
            resourceInputs["deleteMode"] = args ? args.deleteMode : undefined;
            resourceInputs["device"] = args ? args.device : undefined;
            resourceInputs["ifindexPersist"] = args ? args.ifindexPersist : undefined;
            resourceInputs["ifmibIfaliasLong"] = args ? args.ifmibIfaliasLong : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SnmpServerMib.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SnmpServerMib resources.
 */
export interface SnmpServerMibState {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Persist interface indices
     */
    ifindexPersist?: pulumi.Input<boolean>;
    /**
     * Enable support for ifAlias values longer than 64 characters
     */
    ifmibIfaliasLong?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a SnmpServerMib resource.
 */
export interface SnmpServerMibArgs {
    /**
     * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being
     * managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is.
     * Default value is `all`. - Choices: `all`, `attributes`
     */
    deleteMode?: pulumi.Input<string>;
    /**
     * A device name from the provider configuration.
     */
    device?: pulumi.Input<string>;
    /**
     * Persist interface indices
     */
    ifindexPersist?: pulumi.Input<boolean>;
    /**
     * Enable support for ifAlias values longer than 64 characters
     */
    ifmibIfaliasLong?: pulumi.Input<boolean>;
}
