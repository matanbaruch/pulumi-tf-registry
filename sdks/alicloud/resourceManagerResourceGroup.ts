// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ResourceManagerResourceGroup extends pulumi.CustomResource {
    /**
     * Get an existing ResourceManagerResourceGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResourceManagerResourceGroupState, opts?: pulumi.CustomResourceOptions): ResourceManagerResourceGroup {
        return new ResourceManagerResourceGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/resourceManagerResourceGroup:ResourceManagerResourceGroup';

    /**
     * Returns true if the given object is an instance of ResourceManagerResourceGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResourceManagerResourceGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResourceManagerResourceGroup.__pulumiType;
    }

    public /*out*/ readonly accountId!: pulumi.Output<string>;
    public /*out*/ readonly createDate!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    /**
     * @deprecated Deprecated
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly regionStatuses!: pulumi.Output<outputs.ResourceManagerResourceGroupRegionStatus[]>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ResourceManagerResourceGroupTimeouts | undefined>;

    /**
     * Create a ResourceManagerResourceGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ResourceManagerResourceGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResourceManagerResourceGroupArgs | ResourceManagerResourceGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResourceManagerResourceGroupState | undefined;
            resourceInputs["accountId"] = state ? state.accountId : undefined;
            resourceInputs["createDate"] = state ? state.createDate : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["regionStatuses"] = state ? state.regionStatuses : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ResourceManagerResourceGroupArgs | undefined;
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["accountId"] = undefined /*out*/;
            resourceInputs["createDate"] = undefined /*out*/;
            resourceInputs["regionStatuses"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ResourceManagerResourceGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ResourceManagerResourceGroup resources.
 */
export interface ResourceManagerResourceGroupState {
    accountId?: pulumi.Input<string>;
    createDate?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    regionStatuses?: pulumi.Input<pulumi.Input<inputs.ResourceManagerResourceGroupRegionStatus>[]>;
    resourceGroupName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ResourceManagerResourceGroupTimeouts>;
}

/**
 * The set of arguments for constructing a ResourceManagerResourceGroup resource.
 */
export interface ResourceManagerResourceGroupArgs {
    displayName: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.ResourceManagerResourceGroupTimeouts>;
}
