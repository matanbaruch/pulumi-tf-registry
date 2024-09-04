// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudEndpointSelector extends pulumi.CustomResource {
    /**
     * Get an existing CloudEndpointSelector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudEndpointSelectorState, opts?: pulumi.CustomResourceOptions): CloudEndpointSelector {
        return new CloudEndpointSelector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/cloudEndpointSelector:CloudEndpointSelector';

    /**
     * Returns true if the given object is an instance of CloudEndpointSelector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudEndpointSelector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudEndpointSelector.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly cloudEpgDn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly matchExpression!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;

    /**
     * Create a CloudEndpointSelector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudEndpointSelectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudEndpointSelectorArgs | CloudEndpointSelectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudEndpointSelectorState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["cloudEpgDn"] = state ? state.cloudEpgDn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["matchExpression"] = state ? state.matchExpression : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
        } else {
            const args = argsOrState as CloudEndpointSelectorArgs | undefined;
            if ((!args || args.cloudEpgDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudEpgDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["cloudEpgDn"] = args ? args.cloudEpgDn : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["matchExpression"] = args ? args.matchExpression : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudEndpointSelector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudEndpointSelector resources.
 */
export interface CloudEndpointSelectorState {
    annotation?: pulumi.Input<string>;
    cloudEpgDn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    matchExpression?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudEndpointSelector resource.
 */
export interface CloudEndpointSelectorArgs {
    annotation?: pulumi.Input<string>;
    cloudEpgDn: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    matchExpression?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
