// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Volume extends pulumi.CustomResource {
    /**
     * Get an existing Volume resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VolumeState, opts?: pulumi.CustomResourceOptions): Volume {
        return new Volume(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netapp-elementsw:index/volume:Volume';

    /**
     * Returns true if the given object is an instance of Volume.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Volume {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Volume.__pulumiType;
    }

    public readonly account!: pulumi.Output<string>;
    public readonly attributes!: pulumi.Output<string[] | undefined>;
    public readonly burstIops!: pulumi.Output<number | undefined>;
    public readonly enable512e!: pulumi.Output<boolean>;
    public /*out*/ readonly iqn!: pulumi.Output<string>;
    public readonly maxIops!: pulumi.Output<number | undefined>;
    public readonly minIops!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly totalSize!: pulumi.Output<number>;

    /**
     * Create a Volume resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VolumeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VolumeArgs | VolumeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VolumeState | undefined;
            resourceInputs["account"] = state ? state.account : undefined;
            resourceInputs["attributes"] = state ? state.attributes : undefined;
            resourceInputs["burstIops"] = state ? state.burstIops : undefined;
            resourceInputs["enable512e"] = state ? state.enable512e : undefined;
            resourceInputs["iqn"] = state ? state.iqn : undefined;
            resourceInputs["maxIops"] = state ? state.maxIops : undefined;
            resourceInputs["minIops"] = state ? state.minIops : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["totalSize"] = state ? state.totalSize : undefined;
        } else {
            const args = argsOrState as VolumeArgs | undefined;
            if ((!args || args.account === undefined) && !opts.urn) {
                throw new Error("Missing required property 'account'");
            }
            if ((!args || args.enable512e === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enable512e'");
            }
            if ((!args || args.totalSize === undefined) && !opts.urn) {
                throw new Error("Missing required property 'totalSize'");
            }
            resourceInputs["account"] = args ? args.account : undefined;
            resourceInputs["attributes"] = args ? args.attributes : undefined;
            resourceInputs["burstIops"] = args ? args.burstIops : undefined;
            resourceInputs["enable512e"] = args ? args.enable512e : undefined;
            resourceInputs["maxIops"] = args ? args.maxIops : undefined;
            resourceInputs["minIops"] = args ? args.minIops : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["totalSize"] = args ? args.totalSize : undefined;
            resourceInputs["iqn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Volume.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Volume resources.
 */
export interface VolumeState {
    account?: pulumi.Input<string>;
    attributes?: pulumi.Input<pulumi.Input<string>[]>;
    burstIops?: pulumi.Input<number>;
    enable512e?: pulumi.Input<boolean>;
    iqn?: pulumi.Input<string>;
    maxIops?: pulumi.Input<number>;
    minIops?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    totalSize?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Volume resource.
 */
export interface VolumeArgs {
    account: pulumi.Input<string>;
    attributes?: pulumi.Input<pulumi.Input<string>[]>;
    burstIops?: pulumi.Input<number>;
    enable512e: pulumi.Input<boolean>;
    maxIops?: pulumi.Input<number>;
    minIops?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    totalSize: pulumi.Input<number>;
}
