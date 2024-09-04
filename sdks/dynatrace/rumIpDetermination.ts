// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RumIpDetermination extends pulumi.CustomResource {
    /**
     * Get an existing RumIpDetermination resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RumIpDeterminationState, opts?: pulumi.CustomResourceOptions): RumIpDetermination {
        return new RumIpDetermination(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/rumIpDetermination:RumIpDetermination';

    /**
     * Returns true if the given object is an instance of RumIpDetermination.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RumIpDetermination {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RumIpDetermination.__pulumiType;
    }

    /**
     * Client IP header name
     */
    public readonly headerName!: pulumi.Output<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    public readonly insertAfter!: pulumi.Output<string>;

    /**
     * Create a RumIpDetermination resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RumIpDeterminationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RumIpDeterminationArgs | RumIpDeterminationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RumIpDeterminationState | undefined;
            resourceInputs["headerName"] = state ? state.headerName : undefined;
            resourceInputs["insertAfter"] = state ? state.insertAfter : undefined;
        } else {
            const args = argsOrState as RumIpDeterminationArgs | undefined;
            if ((!args || args.headerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'headerName'");
            }
            resourceInputs["headerName"] = args ? args.headerName : undefined;
            resourceInputs["insertAfter"] = args ? args.insertAfter : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RumIpDetermination.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RumIpDetermination resources.
 */
export interface RumIpDeterminationState {
    /**
     * Client IP header name
     */
    headerName?: pulumi.Input<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RumIpDetermination resource.
 */
export interface RumIpDeterminationArgs {
    /**
     * Client IP header name
     */
    headerName: pulumi.Input<string>;
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     */
    insertAfter?: pulumi.Input<string>;
}
