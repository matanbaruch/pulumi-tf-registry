// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectSystemVirtualwirepair extends pulumi.CustomResource {
    /**
     * Get an existing ObjectSystemVirtualwirepair resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectSystemVirtualwirepairState, opts?: pulumi.CustomResourceOptions): ObjectSystemVirtualwirepair {
        return new ObjectSystemVirtualwirepair(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectSystemVirtualwirepair:ObjectSystemVirtualwirepair';

    /**
     * Returns true if the given object is an instance of ObjectSystemVirtualwirepair.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectSystemVirtualwirepair {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectSystemVirtualwirepair.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly members!: pulumi.Output<string[]>;
    public readonly name!: pulumi.Output<string>;
    public readonly outerVlanIds!: pulumi.Output<number[]>;
    public readonly poweroffBypass!: pulumi.Output<string>;
    public readonly poweronBypass!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly vlanFilter!: pulumi.Output<string | undefined>;
    public readonly wildcardVlan!: pulumi.Output<string>;

    /**
     * Create a ObjectSystemVirtualwirepair resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectSystemVirtualwirepairArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectSystemVirtualwirepairArgs | ObjectSystemVirtualwirepairState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectSystemVirtualwirepairState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["members"] = state ? state.members : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outerVlanIds"] = state ? state.outerVlanIds : undefined;
            resourceInputs["poweroffBypass"] = state ? state.poweroffBypass : undefined;
            resourceInputs["poweronBypass"] = state ? state.poweronBypass : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["vlanFilter"] = state ? state.vlanFilter : undefined;
            resourceInputs["wildcardVlan"] = state ? state.wildcardVlan : undefined;
        } else {
            const args = argsOrState as ObjectSystemVirtualwirepairArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["members"] = args ? args.members : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["outerVlanIds"] = args ? args.outerVlanIds : undefined;
            resourceInputs["poweroffBypass"] = args ? args.poweroffBypass : undefined;
            resourceInputs["poweronBypass"] = args ? args.poweronBypass : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["vlanFilter"] = args ? args.vlanFilter : undefined;
            resourceInputs["wildcardVlan"] = args ? args.wildcardVlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectSystemVirtualwirepair.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectSystemVirtualwirepair resources.
 */
export interface ObjectSystemVirtualwirepairState {
    adom?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    outerVlanIds?: pulumi.Input<pulumi.Input<number>[]>;
    poweroffBypass?: pulumi.Input<string>;
    poweronBypass?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    vlanFilter?: pulumi.Input<string>;
    wildcardVlan?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectSystemVirtualwirepair resource.
 */
export interface ObjectSystemVirtualwirepairArgs {
    adom?: pulumi.Input<string>;
    members?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    outerVlanIds?: pulumi.Input<pulumi.Input<number>[]>;
    poweroffBypass?: pulumi.Input<string>;
    poweronBypass?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    vlanFilter?: pulumi.Input<string>;
    wildcardVlan?: pulumi.Input<string>;
}
