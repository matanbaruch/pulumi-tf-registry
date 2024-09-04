// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FirewallFilteringNetworkServiceGroups extends pulumi.CustomResource {
    /**
     * Get an existing FirewallFilteringNetworkServiceGroups resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FirewallFilteringNetworkServiceGroupsState, opts?: pulumi.CustomResourceOptions): FirewallFilteringNetworkServiceGroups {
        return new FirewallFilteringNetworkServiceGroups(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zia:index/firewallFilteringNetworkServiceGroups:FirewallFilteringNetworkServiceGroups';

    /**
     * Returns true if the given object is an instance of FirewallFilteringNetworkServiceGroups.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FirewallFilteringNetworkServiceGroups {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FirewallFilteringNetworkServiceGroups.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly groupId!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    /**
     * list of services IDs
     */
    public readonly services!: pulumi.Output<outputs.FirewallFilteringNetworkServiceGroupsService[] | undefined>;

    /**
     * Create a FirewallFilteringNetworkServiceGroups resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FirewallFilteringNetworkServiceGroupsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FirewallFilteringNetworkServiceGroupsArgs | FirewallFilteringNetworkServiceGroupsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FirewallFilteringNetworkServiceGroupsState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["groupId"] = state ? state.groupId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
        } else {
            const args = argsOrState as FirewallFilteringNetworkServiceGroupsArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["groupId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FirewallFilteringNetworkServiceGroups.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FirewallFilteringNetworkServiceGroups resources.
 */
export interface FirewallFilteringNetworkServiceGroupsState {
    description?: pulumi.Input<string>;
    groupId?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    /**
     * list of services IDs
     */
    services?: pulumi.Input<pulumi.Input<inputs.FirewallFilteringNetworkServiceGroupsService>[]>;
}

/**
 * The set of arguments for constructing a FirewallFilteringNetworkServiceGroups resource.
 */
export interface FirewallFilteringNetworkServiceGroupsArgs {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * list of services IDs
     */
    services?: pulumi.Input<pulumi.Input<inputs.FirewallFilteringNetworkServiceGroupsService>[]>;
}
