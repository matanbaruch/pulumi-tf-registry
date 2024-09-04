// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectDynamicAddressDynamicAddrMapping extends pulumi.CustomResource {
    /**
     * Get an existing ObjectDynamicAddressDynamicAddrMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectDynamicAddressDynamicAddrMappingState, opts?: pulumi.CustomResourceOptions): ObjectDynamicAddressDynamicAddrMapping {
        return new ObjectDynamicAddressDynamicAddrMapping(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectDynamicAddressDynamicAddrMapping:ObjectDynamicAddressDynamicAddrMapping';

    /**
     * Returns true if the given object is an instance of ObjectDynamicAddressDynamicAddrMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectDynamicAddressDynamicAddrMapping {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectDynamicAddressDynamicAddrMapping.__pulumiType;
    }

    public readonly addr!: pulumi.Output<string | undefined>;
    public readonly address!: pulumi.Output<string>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectDynamicAddressDynamicAddrMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectDynamicAddressDynamicAddrMappingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectDynamicAddressDynamicAddrMappingArgs | ObjectDynamicAddressDynamicAddrMappingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectDynamicAddressDynamicAddrMappingState | undefined;
            resourceInputs["addr"] = state ? state.addr : undefined;
            resourceInputs["address"] = state ? state.address : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectDynamicAddressDynamicAddrMappingArgs | undefined;
            if ((!args || args.address === undefined) && !opts.urn) {
                throw new Error("Missing required property 'address'");
            }
            resourceInputs["addr"] = args ? args.addr : undefined;
            resourceInputs["address"] = args ? args.address : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectDynamicAddressDynamicAddrMapping.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectDynamicAddressDynamicAddrMapping resources.
 */
export interface ObjectDynamicAddressDynamicAddrMappingState {
    addr?: pulumi.Input<string>;
    address?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectDynamicAddressDynamicAddrMapping resource.
 */
export interface ObjectDynamicAddressDynamicAddrMappingArgs {
    addr?: pulumi.Input<string>;
    address: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    scopetype?: pulumi.Input<string>;
}
