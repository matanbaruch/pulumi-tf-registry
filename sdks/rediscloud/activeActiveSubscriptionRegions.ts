// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ActiveActiveSubscriptionRegions extends pulumi.CustomResource {
    /**
     * Get an existing ActiveActiveSubscriptionRegions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActiveActiveSubscriptionRegionsState, opts?: pulumi.CustomResourceOptions): ActiveActiveSubscriptionRegions {
        return new ActiveActiveSubscriptionRegions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rediscloud:index/activeActiveSubscriptionRegions:ActiveActiveSubscriptionRegions';

    /**
     * Returns true if the given object is an instance of ActiveActiveSubscriptionRegions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveActiveSubscriptionRegions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActiveActiveSubscriptionRegions.__pulumiType;
    }

    /**
     * Delete regions flag has to be set for re-creating and deleting regions
     */
    public readonly deleteRegions!: pulumi.Output<boolean | undefined>;
    /**
     * Cloud networking details, per region (multiple regions for Active-Active cluster)
     */
    public readonly regions!: pulumi.Output<outputs.ActiveActiveSubscriptionRegionsRegion[]>;
    /**
     * ID of the subscription that the regions belong to
     */
    public readonly subscriptionId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ActiveActiveSubscriptionRegionsTimeouts | undefined>;

    /**
     * Create a ActiveActiveSubscriptionRegions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveActiveSubscriptionRegionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActiveActiveSubscriptionRegionsArgs | ActiveActiveSubscriptionRegionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ActiveActiveSubscriptionRegionsState | undefined;
            resourceInputs["deleteRegions"] = state ? state.deleteRegions : undefined;
            resourceInputs["regions"] = state ? state.regions : undefined;
            resourceInputs["subscriptionId"] = state ? state.subscriptionId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ActiveActiveSubscriptionRegionsArgs | undefined;
            if ((!args || args.regions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'regions'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            resourceInputs["deleteRegions"] = args ? args.deleteRegions : undefined;
            resourceInputs["regions"] = args ? args.regions : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ActiveActiveSubscriptionRegions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ActiveActiveSubscriptionRegions resources.
 */
export interface ActiveActiveSubscriptionRegionsState {
    /**
     * Delete regions flag has to be set for re-creating and deleting regions
     */
    deleteRegions?: pulumi.Input<boolean>;
    /**
     * Cloud networking details, per region (multiple regions for Active-Active cluster)
     */
    regions?: pulumi.Input<pulumi.Input<inputs.ActiveActiveSubscriptionRegionsRegion>[]>;
    /**
     * ID of the subscription that the regions belong to
     */
    subscriptionId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ActiveActiveSubscriptionRegionsTimeouts>;
}

/**
 * The set of arguments for constructing a ActiveActiveSubscriptionRegions resource.
 */
export interface ActiveActiveSubscriptionRegionsArgs {
    /**
     * Delete regions flag has to be set for re-creating and deleting regions
     */
    deleteRegions?: pulumi.Input<boolean>;
    /**
     * Cloud networking details, per region (multiple regions for Active-Active cluster)
     */
    regions: pulumi.Input<pulumi.Input<inputs.ActiveActiveSubscriptionRegionsRegion>[]>;
    /**
     * ID of the subscription that the regions belong to
     */
    subscriptionId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ActiveActiveSubscriptionRegionsTimeouts>;
}
