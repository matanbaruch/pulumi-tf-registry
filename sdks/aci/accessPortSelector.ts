// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AccessPortSelector extends pulumi.CustomResource {
    /**
     * Get an existing AccessPortSelector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessPortSelectorState, opts?: pulumi.CustomResourceOptions): AccessPortSelector {
        return new AccessPortSelector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/accessPortSelector:AccessPortSelector';

    /**
     * Returns true if the given object is an instance of AccessPortSelector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPortSelector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPortSelector.__pulumiType;
    }

    public readonly accessPortSelectorType!: pulumi.Output<string>;
    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly leafInterfaceProfileDn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly relationInfraRsAccBaseGrp!: pulumi.Output<string | undefined>;

    /**
     * Create a AccessPortSelector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AccessPortSelectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessPortSelectorArgs | AccessPortSelectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessPortSelectorState | undefined;
            resourceInputs["accessPortSelectorType"] = state ? state.accessPortSelectorType : undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["leafInterfaceProfileDn"] = state ? state.leafInterfaceProfileDn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["relationInfraRsAccBaseGrp"] = state ? state.relationInfraRsAccBaseGrp : undefined;
        } else {
            const args = argsOrState as AccessPortSelectorArgs | undefined;
            if ((!args || args.accessPortSelectorType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessPortSelectorType'");
            }
            if ((!args || args.leafInterfaceProfileDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'leafInterfaceProfileDn'");
            }
            resourceInputs["accessPortSelectorType"] = args ? args.accessPortSelectorType : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["leafInterfaceProfileDn"] = args ? args.leafInterfaceProfileDn : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["relationInfraRsAccBaseGrp"] = args ? args.relationInfraRsAccBaseGrp : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessPortSelector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessPortSelector resources.
 */
export interface AccessPortSelectorState {
    accessPortSelectorType?: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    leafInterfaceProfileDn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationInfraRsAccBaseGrp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccessPortSelector resource.
 */
export interface AccessPortSelectorArgs {
    accessPortSelectorType: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    leafInterfaceProfileDn: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationInfraRsAccBaseGrp?: pulumi.Input<string>;
}
