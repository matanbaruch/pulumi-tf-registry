// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SensitiveDataScannerGroupOrder extends pulumi.CustomResource {
    /**
     * Get an existing SensitiveDataScannerGroupOrder resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SensitiveDataScannerGroupOrderState, opts?: pulumi.CustomResourceOptions): SensitiveDataScannerGroupOrder {
        return new SensitiveDataScannerGroupOrder(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'datadog:index/sensitiveDataScannerGroupOrder:SensitiveDataScannerGroupOrder';

    /**
     * Returns true if the given object is an instance of SensitiveDataScannerGroupOrder.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SensitiveDataScannerGroupOrder {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SensitiveDataScannerGroupOrder.__pulumiType;
    }

    /**
     * The list of Sensitive Data Scanner group IDs, in order. Logs are tested against the query filter of each index one by
     * one following the order of the list.
     */
    public readonly groupIds!: pulumi.Output<string[]>;

    /**
     * Create a SensitiveDataScannerGroupOrder resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SensitiveDataScannerGroupOrderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SensitiveDataScannerGroupOrderArgs | SensitiveDataScannerGroupOrderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SensitiveDataScannerGroupOrderState | undefined;
            resourceInputs["groupIds"] = state ? state.groupIds : undefined;
        } else {
            const args = argsOrState as SensitiveDataScannerGroupOrderArgs | undefined;
            if ((!args || args.groupIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupIds'");
            }
            resourceInputs["groupIds"] = args ? args.groupIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SensitiveDataScannerGroupOrder.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SensitiveDataScannerGroupOrder resources.
 */
export interface SensitiveDataScannerGroupOrderState {
    /**
     * The list of Sensitive Data Scanner group IDs, in order. Logs are tested against the query filter of each index one by
     * one following the order of the list.
     */
    groupIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SensitiveDataScannerGroupOrder resource.
 */
export interface SensitiveDataScannerGroupOrderArgs {
    /**
     * The list of Sensitive Data Scanner group IDs, in order. Logs are tested against the query filter of each index one by
     * one following the order of the list.
     */
    groupIds: pulumi.Input<pulumi.Input<string>[]>;
}
