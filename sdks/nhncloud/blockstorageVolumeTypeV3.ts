// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class BlockstorageVolumeTypeV3 extends pulumi.CustomResource {
    /**
     * Get an existing BlockstorageVolumeTypeV3 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BlockstorageVolumeTypeV3State, opts?: pulumi.CustomResourceOptions): BlockstorageVolumeTypeV3 {
        return new BlockstorageVolumeTypeV3(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nhncloud:index/blockstorageVolumeTypeV3:BlockstorageVolumeTypeV3';

    /**
     * Returns true if the given object is an instance of BlockstorageVolumeTypeV3.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BlockstorageVolumeTypeV3 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BlockstorageVolumeTypeV3.__pulumiType;
    }

    public readonly description!: pulumi.Output<string>;
    public readonly extraSpecs!: pulumi.Output<{[key: string]: string}>;
    public readonly isPublic!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;

    /**
     * Create a BlockstorageVolumeTypeV3 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BlockstorageVolumeTypeV3Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BlockstorageVolumeTypeV3Args | BlockstorageVolumeTypeV3State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BlockstorageVolumeTypeV3State | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["extraSpecs"] = state ? state.extraSpecs : undefined;
            resourceInputs["isPublic"] = state ? state.isPublic : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
        } else {
            const args = argsOrState as BlockstorageVolumeTypeV3Args | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["extraSpecs"] = args ? args.extraSpecs : undefined;
            resourceInputs["isPublic"] = args ? args.isPublic : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BlockstorageVolumeTypeV3.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BlockstorageVolumeTypeV3 resources.
 */
export interface BlockstorageVolumeTypeV3State {
    description?: pulumi.Input<string>;
    extraSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isPublic?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BlockstorageVolumeTypeV3 resource.
 */
export interface BlockstorageVolumeTypeV3Args {
    description?: pulumi.Input<string>;
    extraSpecs?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    isPublic?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
